import React, { useEffect } from 'react';
import {
  Box,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Stack,
  Typography
} from '@mui/material';
import { Close, Error } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import * as yup from 'yup';
import { useFormik } from "formik";
import useOrderDialog from '../../hooks/useOrderDialog';
import { DTextField, DDialog, PrimaryButton } from '../../components/styledComponents';
import {
  ERROR,
  FONT_PRIMARY,
  MESSAGE_FAILED,
  MESSAGE_ORDER_CREATE_SUCCESS,
  MESSAGE_ORDER_UPDATE_SUCCESS,
  SUCCESS
} from '../../utils/constants';
import NftCard from './NftCard';
import api from '../../utils/api';
import useWallet from '../../hooks/useWallet';
import useAlertMessage from '../../hooks/useAlertMessage';
import useLoading from '../../hooks/useLoading';

const validSchema = yup.object().shape({
  name: yup.string().required('Name is required.'),
  email: yup.string().email('Invaild email.').required('Email is required.'),
  message: yup.string().required('Message is required.')
});

export default function OrderDialog() {
  const { opened, nftData, closeOrderDialog } = useOrderDialog();
  const { openLoading, closeLoading } = useLoading();
  const { currentAccount } = useWallet();
  const { openAlert } = useAlertMessage();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: validSchema,
    onSubmit: (values) => {
      return handleSubmit(values);
    }
  });

  useEffect(() => {
    if (!opened) {
      formik.setValues({
        name: '',
        email: '',
        message: ''
      });
      formik.setTouched({
        name: false,
        email: false,
        message: false
      });
    }
  }, [opened]);

  const handleSubmit = (values) => {
    openLoading();

    api.post('/site/saveOrder', {
      walletAddress: currentAccount,
      ...values,
      nft: nftData
    }).then(response => {
      if (response.status === 200) {
        openAlert({
          severity: SUCCESS,
          message: MESSAGE_ORDER_UPDATE_SUCCESS
        });
      } else {
        openAlert({
          severity: SUCCESS,
          message: MESSAGE_ORDER_CREATE_SUCCESS
        });
      }
      closeLoading();
      closeOrderDialog();
    }).catch(error => {
      openAlert({
        severity: ERROR,
        message: MESSAGE_FAILED
      });
      closeLoading();
    });
  };

  return (
    <DDialog
      open={opened}
      onClose={closeOrderDialog}
      fullWidth
      maxWidth="md"
    >
      <Box className="bg-modal" p={{ xs: 1, md: 3 }}>
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
          Submit Request
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
          <Grid
            container
            spacing={2}
            sx={{
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Grid item xs={12} md={7}>
              <Stack spacing={{ xs: 0.5, md: 2 }}>
              <DTextField
                  name="name"
                  placeholder="Enter Your Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={
                    formik.touched.name && formik.errors.name ? (
                      <Typography
                        component="span"
                        fontSize={14}
                        fontWeight={700}
                        sx={{ display: 'flex', alignItems: 'center', mx: 0 }}
                      >
                        <Error />&nbsp;
                        {formik.touched.name && formik.errors.name}
                      </Typography>) : (<></>)
                  }
                  fullWidth
                />

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
                  multiline
                  rows={5}
                />
              </Stack>
            </Grid>

            <Grid item xs={12} md={5}>
              <Stack direction="row" justifyContent={{ xs: "center", md: 'end' }}>
                <Box width={{ xs: '100%', md: '80%' }}>
                  <NftCard data={nftData} />
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <PrimaryButton onClick={formik.handleSubmit} variant="contained">
            Submit
          </PrimaryButton>
        </DialogActions>
      </Box>
    </DDialog>
  );
}