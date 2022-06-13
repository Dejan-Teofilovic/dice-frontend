import React, { createContext, useReducer } from 'react';
// ----------------------------------------------------------------------

const initialState = {
  nftData: null,
  opened: false
};

const handlers = {
  INITIALIZE: (state, action) => {
    return {
      ...state,
      ...action.payload
    };
  },
  SET_NFT_DATA: (state, action) => {
    return {
      ...state,
      nftData: action.payload
    };
  },
  SET_OPENED: (state, action) => {
    return {
      ...state,
      opened: action.payload
    };
  }
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const OrderDialogContext = createContext({
  ...initialState,
  openOrderDialog: () => Promise.resolve(),
  closeOrderDialog: () => Promise.resolve()
});

//  Provider
function OrderDialogProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openOrderDialog = (nftData) => {
    console.log('# openOrderDialog');
    dispatch({
      type: 'SET_NFT_DATA',
      payload: nftData
    });
    dispatch({
      type: 'SET_OPENED',
      payload: true
    });
  };

  const closeOrderDialog = () => {
    console.log('# closeOrderDialog');
    dispatch({
      type: 'SET_NFT_DATA',
      payload: null
    });
    dispatch({
      type: 'SET_OPENED',
      payload: false
    });
  };

  return (
    <OrderDialogContext.Provider
      value={{
        ...state,
        openOrderDialog,
        closeOrderDialog
      }}
    >
      {children}
    </OrderDialogContext.Provider>
  );
}

export { OrderDialogContext, OrderDialogProvider };