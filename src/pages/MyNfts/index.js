import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import useWallet from '../../hooks/useWallet';
import NftCard from './NftCard';
import MotionDiv from '../../components/MotionDiv';
import { varFadeInUp } from '../../utils/constants';
import OrderDialog from './OrderDialog'
import useOrderDialog from '../../hooks/useOrderDialog';

export default function MyNfts() {
  const { nfts } = useWallet();
  const { openOrderDialog } = useOrderDialog();

  return (
    <Box px={4}>
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
      <Grid container spacing={2}>
        {
          nfts.map((nftItem, index) => (
            <Grid item xs={12} sm={3} md={2} key={index}>
              <NftCard data={nftItem} handleClick={() => openOrderDialog(nftItem)} />
            </Grid>
          ))
        }
      </Grid>
      <OrderDialog />
    </Box>
  );
}