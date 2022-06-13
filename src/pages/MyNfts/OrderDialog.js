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
import { FONT_PRIMARY } from '../../utils/constants';
import NftCard from './NftCard';

const validSchema = yup.object().shape({
  email: yup.string().email('Invaild email.').required('Email is required.'),
  message: yup.string().required('Message is required.')
});

export default function OrderDialog() {
  const { opened, nftData, closeOrderDialog } = useOrderDialog();
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

  useEffect(() => {
    if (!opened) {
      formik.setValues({
        email: '',
        message: ''
      });
      formik.setTouched({
        email: false,
        message: false
      });
    }
  }, [opened]);

  const handleSubmit = (values) => {
    console.log('# nftData => ', nftData);
    console.log('# values => ', values);
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