import React from 'react';
import { Outlet } from 'react-router';
import { Box } from '@mui/material';
import TopNavbar from '../components/TopNavbar';

export default function MainLayout() {
  return (
    <Box className="bg-main" sx={{ minHeight: '100vh' }}>
      <TopNavbar />
      <Outlet />
    </Box>
  );
}