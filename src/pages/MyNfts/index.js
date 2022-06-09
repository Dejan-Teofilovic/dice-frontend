import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import useWallet from '../../hooks/useWallet';

export default function MyNfts() {
  const { getNftsOfWallet } = useWallet();
  useEffect(() => {
    getNftsOfWallet();
  }, []);
  return (
    <Container maxWidth="xl">

    </Container>
  );
}