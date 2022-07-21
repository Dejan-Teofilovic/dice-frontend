import React from 'react';
import { Outlet } from 'react-router';
import { Box, IconButton, Stack } from '@mui/material';
import { Twitter } from '@mui/icons-material';
import TopNavbar from '../components/TopNavbar';
import Loading from '../components/Loading';
import AlertMessage from '../components/AlertMessage';

export default function MainLayout() {
  return (
    <Box className="bg-main" sx={{ minHeight: '100vh' }} position="relative">
      <Stack sx={{ minHeight: 'inherit' }}>
        <TopNavbar />
        <Box flexGrow={1} pb={10}>
          <Outlet />
        </Box>
      </Stack>
      <IconButton
        sx={{
          color: 'white',
          position: 'fixed',
          bottom: 32,
          left: { xs: 32, md: 64 },
          zIndex: 100
        }}
      >
        <Twitter sx={{ fontSize: { xs: 32, md: 48 } }} />
      </IconButton>
      <Loading />
      <AlertMessage />
    </Box>
  );
}