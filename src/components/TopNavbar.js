import React from 'react';
import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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
            display={{ xs: 'none', md: 'flex' }}
          >DICE</Typography>
          <Box component="img" src="/assets/images/logo.png" width={24} ml={1} />
          <Box flexGrow={1} />

          <TextButton sx={{ mr: 3, fontWeight: 600, display: { xs: 'none', md: 'flex' } }}>FAQ</TextButton>
          <TextButton sx={{ mr: 4, fontWeight: 600, display: { xs: 'none', md: 'flex' } }}>Explore Dice</TextButton>
          <PrimaryButton variant="contained">Connect</PrimaryButton>

          <IconButton>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}