import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

export default function NftCard({ data }) {
  return (
    <Card sx={{ bgcolor: grey[900] }}>
      <CardMedia
        component="img"
        src="/assets/images/nft_placeholder.webp"
        alt="placeholder"
        height={260}
      />
      <CardContent>
        <Typography fontSize={14} color={grey[500]}>
          Collection name
        </Typography>
        <Typography fontSize={16} color={grey[100]}>
          NFT name
        </Typography>
      </CardContent>
    </Card>
  );
}