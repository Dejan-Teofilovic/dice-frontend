import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { AlertMessageProvider } from './contexts/AlertMessageContext';
import { WalletProvider } from './contexts/WalletContext';
import Routes from './Routes';
import { LoadingProvider } from './contexts/LoadingContext';

const getLibrary = (provider) => {
  const library = new Web3Provider(provider, "any");
  return library;
};

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <LoadingProvider>
        <AlertMessageProvider>
          <WalletProvider>
            <Router>
              <Routes />
            </Router>
          </WalletProvider>
        </AlertMessageProvider>
      </LoadingProvider>
    </Web3ReactProvider>
  );
}

export default App;
