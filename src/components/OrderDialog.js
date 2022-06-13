import React from 'react';
import { Box, DialogContent, DialogTitle, Grid, IconButton, Stack, Typography } from '@mui/material';
import { Close, Error } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import * as yup from 'yup';
import { useFormik } from "formik";
import useOrderDialog from '../hooks/useOrderDialog';
import { DTextField, DDialog } from './styledComponents';
import { FONT_PRIMARY } from '../utils/constants';

const validSchema = yup.object().shape({
  email: yup.string().email('Invaild email.').required('Email is required.'),
  message: yup.string().required('Message is required.')
});

export default function OrderDialog() {
  const { opened, nftData, closeOrderDialog } = useOrderDialog();

  const handleSubmit = (values) => {
    console.log('# nftData => ', nftData);
    console.log('# values => ', values);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      message: ''
    },
    validationSchema: validSchema,
    onSubmit: (values) => {
      return handleSubmit(values);
    }
  });

  return (
    <DDialog
      open={opened}
      onClose={closeOrderDialog}
      fullWidth
      maxWidth="sm"
    >
      <Box className="bg-modal">
        <DialogTitle
          sx={{
            py: 2,
            px: 3,
            color: 'white',
            fontSize: 28,
            fontFamily: FONT_PRIMARY,
            fontWeight: 900
          }}
        >
          Order
          <IconButton
            onClick={closeOrderDialog}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: grey[100]
            }}
          ><Close /></IconButton>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <Stack spacing={5}>
                <DTextField
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={
                    formik.touched.email && formik.errors.email ? (
                      <Typography
                        component="span"
                        fontSize={14}
                        fontWeight={700}
                        sx={{ display: 'flex', alignItems: 'center', mx: 0 }}
                      >
                        <Error />&nbsp;
                        {formik.touched.email && formik.errors.email}
                      </Typography>) : (<></>)
                  }
                  fullWidth
                />

                <DTextField
                  type="message"
                  name="message"
                  placeholder="Enter Messaage"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  error={formik.touched.message && Boolean(formik.errors.message)}
                  helperText={
                    formik.touched.message && formik.errors.message ? (
                      <Typography
                        component="span"
                        fontSize={14}
                        fontWeight={700}
                        sx={{ display: 'flex', alignItems: 'center', mx: 0 }}
                      >
                        <Error />&nbsp;
                        {formik.touched.message && formik.errors.message}
                      </Typography>) : (<></>)
                  }
                  fullWidth
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}></Grid>
          </Grid>
        </DialogContent>
      </Box>
    </DDialog>
  );
}