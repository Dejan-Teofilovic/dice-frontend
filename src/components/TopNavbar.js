import React from 'react';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { PrimaryButton, TextButton } from './styledComponents';

export default function TopNavbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0)', py: 3 }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            fontFamily="'IBM Plex Mono', monospace"
            fontSize={28}
            color="white"
          >DICE</Typography>
          <Box component="img" src="/assets/images/logo.png" width={24} ml={1} />
          <Box flexGrow={1} />

          <TextButton sx={{ mr: 3, fontWeight: 600 }}>FAQ</TextButton>
          <TextButton sx={{ mr: 4, fontWeight: 600 }}>Explore Dice</TextButton>
          <PrimaryButton variant="contained">Connect</PrimaryButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}