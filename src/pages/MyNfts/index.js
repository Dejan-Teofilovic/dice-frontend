import React, { useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import useWallet from '../../hooks/useWallet';
import NftCard from './NftCard';
import MotionDiv from '../../components/MotionDiv';
import { FONT_IBM_PLEX, varFadeInUp } from '../../utils/constants';

export default function MyNfts() {
  const { getNftsOfWallet, nfts } = useWallet();
  useEffect(() => {
    getNftsOfWallet();
  }, []);
  return (
    <Container maxWidth="xl">
      <MotionDiv variants={varFadeInUp}>
        <Typography
          my={5}
          fontSize={{ xs: 28, md: 48 }}
          fontFamily="sfProRounded"
          fontWeight={900}
          textAlign="center"
          color="white"
          letterSpacing={3}
        >
          My NFTs
        </Typography>
      </MotionDiv>
      <Grid container spacing={1}>
        {
          nfts.map(nftItem => (
            <NftCard />
          ))
        }
      </Grid>
    </Container>
  );
}