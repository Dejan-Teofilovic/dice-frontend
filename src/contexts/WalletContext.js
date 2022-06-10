import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { useWeb3React } from '@web3-react/core';
import axios from 'axios';
import {
  ERROR,
  CHAIN_ID,
  SWITCH_ERROR_CODE,
  CHAIN_NAME,
  RPC_URLS,
  BLOCK_EXPLORER_URLS,
  NATIVE_CURRENCY_NAME,
  NATIVE_CURRENCY_SYMBOL,
  DECIMALS,
  API_TO_GET_NFTS,
} from '../utils/constants';
import { AlertMessageContext } from './AlertMessageContext';
import { isNoEthereumObject } from '../utils/errors';
import { injected } from '../utils/connectors';
import { LoadingContext } from './LoadingContext';
import { handleVisibleMyNftsPage } from '../utils/functions';

// ----------------------------------------------------------------------

const initialState = {
  walletConnected: false,
  currentAccount: '',
  tokenId: 0,
  nfts: []
};

const handlers = {
  SET_WALLET_CONNECTED: (state, action) => {
    return {
      ...state,
      walletConnected: action.payload
    };
  },
  SET_CURRENT_ACCOUNT: (state, action) => {
    return {
      ...state,
      currentAccount: action.payload
    };
  },
  SET_TOKEN_ID: (state, action) => {
    return {
      ...state,
      tokenId: action.payload
    };
  },
  ADD_NFTS: (state, action) => {
    let originNfts = [...state.nfts];
    originNfts.push(action.payload);
    return {
      ...state,
      nfts: originNfts
    };
  },
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const WalletContext = createContext({
  ...initialState,
  connectWallet: () => Promise.resolve(),
  disconnectWallet: () => Promise.resolve(),
  getNftsOfWallet: () => Promise.resolve()
});

//  Provider
function WalletProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { openAlert } = useContext(AlertMessageContext);
  const { openLoading, closeLoading } = useContext(LoadingContext);
  const { active, activate, deactivate, account, chainId } = useWeb3React();

  const connectWallet = async () => {
    openLoading();
    await activate(injected, (error) => {
      if (isNoEthereumObject(error))
        window.open("https://metamask.io/download.html");
    });
  };

  const disconnectWallet = () => {
    deactivate();
    dispatch({
      type: 'SET_CURRENT_ACCOUNT',
      payload: ''
    });

    dispatch({
      type: 'SET_WALLET_CONNECTED',
      payload: false
    });

    handleVisibleMyNftsPage(false);
  };

  useEffect(() => {
    (async () => {
      if (chainId) {
        if (chainId === CHAIN_ID) {
          dispatch({
            type: 'SET_CURRENT_ACCOUNT',
            payload: account
          });

          dispatch({
            type: 'SET_WALLET_CONNECTED',
            payload: true
          });

          handleVisibleMyNftsPage(true);
        } else {
          if (window.ethereum) {
            //  If the current network isn't the expected one, switch it to the expected one.
            try {
              await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: `0x${CHAIN_ID.toString(16)}` }],
              });

              dispatch({
                type: 'SET_CURRENT_ACCOUNT',
                payload: account
              });

              dispatch({
                type: 'SET_WALLET_CONNECTED',
                payload: true
              });

              handleVisibleMyNftsPage(true);

            } catch (switchError) {
              //  If the expected network isn't existed in the metamask.
              if (switchError.code === SWITCH_ERROR_CODE) {
                await window.ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [
                    {
                      chainId: `0x${CHAIN_ID.toString(16)}`,
                      chainName: CHAIN_NAME,
                      rpcUrls: RPC_URLS,
                      blockExplorerUrls: BLOCK_EXPLORER_URLS,
                      nativeCurrency: {
                        name: NATIVE_CURRENCY_NAME,
                        symbol: NATIVE_CURRENCY_SYMBOL, // 2-6 characters length
                        decimals: DECIMALS,
                      }
                    },
                  ],
                });
                dispatch({
                  type: 'SET_CURRENT_ACCOUNT',
                  payload: account
                });

                dispatch({
                  type: 'SET_WALLET_CONNECTED',
                  payload: true
                });

                handleVisibleMyNftsPage(true);
              } else {
                dispatch({
                  type: 'SET_CURRENT_ACCOUNT',
                  payload: ''
                });

                dispatch({
                  type: 'SET_WALLET_CONNECTED',
                  payload: false
                });

                openAlert({
                  severity: ERROR,
                  message: 'Wallet connection failed.'
                });

                handleVisibleMyNftsPage(false);
              }
            }
          } else {
            openAlert({ severity: 'error', message: 'Please install Metamask.' });
            return;
          }
        }
      }
    })();
    closeLoading();
  }, [chainId]);

  useEffect(() => {
    if (active) {
      dispatch({
        type: 'SET_CURRENT_ACCOUNT',
        payload: account
      });

      dispatch({
        type: 'SET_WALLET_CONNECTED',
        payload: true
      });
    }
  }, []);

  /** Get NFTs of the conencted wallet */
  const getNftsOfWallet = async () => {
    openLoading();
    const INIT_API = `${API_TO_GET_NFTS}?owner=${state.currentAccount}&limit=50`;
    let firstNfts = await axios.get(INIT_API);
    dispatch({
      type: 'ADD_NFTS',
      payload: firstNfts.assets
    });

    let getNextNfts = async (nextValue) => {
      let nextNfts = await axios.get(`${INIT_API}&cursor=${nextValue}`);
      dispatch({
        type: 'ADD_NFTS',
        payload: nextNfts.assets
      });
      if (nextNfts.next) {
        getNextNfts(nextNfts.next);
      }
    };

    if (firstNfts.next) {
      getNextNfts(firstNfts.next);
    }
    closeLoading();
  };

  return (
    <WalletContext.Provider
      value={{
        ...state,
        connectWallet,
        disconnectWallet,
        getNftsOfWallet
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export { WalletContext, WalletProvider };