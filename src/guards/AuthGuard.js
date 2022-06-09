import React from 'react';
import { Navigate } from 'react-router-dom';
import useWallet from '../hooks/useWallet';

export default function AuthGuard({ children }) {
  const { walletConnected } = useWallet();

  if (walletConnected) {
    return <>{children}</>;
  } else {
    return <Navigate to="/" />;
  }
}