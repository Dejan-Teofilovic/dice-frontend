import React from 'react';
import { CircularProgress, Dialog, DialogContent } from '@mui/material';
import useLoading from '../hooks/useLoading';

export default function Loading() {
  const { isLoading } = useLoading();
  return (
    <Dialog open={isLoading}>
      <DialogContent sx={{ bgcolor: '#000000' }}>
        <CircularProgress sx={{ color: '#A1275D' }} />
      </DialogContent>
    </Dialog>
  );
}