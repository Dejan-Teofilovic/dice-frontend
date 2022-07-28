import React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { PrimaryButton } from '../../components/styledComponents';
import MotionDiv from '../../components/MotionDiv';
import MHidden from '../../components/MHidden';
import {
  varFadeInUp,
  varFadeInDown,
  FONT_IBM_PLEX_SERIF,
  FONT_PRIMARY
} from '../../utils/constants';

export default function ExploreDice() {
  return (
    <Container maxWidth="lg" sx={{ pb: 3, pt: 6 }}>
      <MHidden width="smUp">
        <Grid container mt={3}>
          <Grid item xs={12} md={6}>
            <Stack width="70%" mx="auto" spacing={4}>
              <MotionDiv variants={varFadeInUp}>
                <Typography
                  fontFamily={FONT_PRIMARY}
                  fontSize={{ xs: 18, sm: 30, md: 42 }}
                  color="white"
                  textAlign={{ xs: 'center', md: 'left' }}
                >Hand Crafted Wooden Figure</Typography>
              </MotionDiv>
              <MotionDiv variants={varFadeInDown}>
                <Typography
                  fontFamily={FONT_IBM_PLEX_SERIF}
                  fontSize={{ xs: 16, md: 18 }}
                  textAlign={{ xs: 'center', md: 'left' }}
                  color="white"
                >
                  Our European craftsmen use their skill and ingenuity to handcraft a unique figure that is true to the spirit of your NFT. It is made entirely of wood. Each figure is hand-painted with vibrant colors and finished with a patina coating. Since each figure is a representation of our keen interest in your NFT, only a limited number of requests will be processed at any given time.
                </Typography>
              </MotionDiv>
              <MotionDiv variants={varFadeInUp}>
                <Stack direction="row" justifyContent={{ xs: 'center', md: 'start' }}>
                  <Box
                    component="img"
                    src="/assets/images/explore_hero_1.jpg"
                    height={{ xs: 150, sm: 200, md: 250, lg: 300 }}
                    sx={{ objectFit: 'cover' }}
                  />
                </Stack>
              </MotionDiv>

              <MotionDiv variants={varFadeInDown}>
                <Stack direction="row" justifyContent={{ xs: 'center', md: 'start' }}>
                  <PrimaryButton
                    sx={{
                      color: 'white',
                      px: 3,
                      fontSize: { xs: '1rem', md: '1.5rem' },
                      fontWeight: 900
                    }}
                  >
                    Join the waitlist now
                  </PrimaryButton>
                </Stack>
              </MotionDiv>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack width="70%" mx="auto" spacing={4} mt={{ xs: 8, md: 0 }}>
              <MotionDiv variants={varFadeInUp}>
                <Typography
                  fontFamily={FONT_PRIMARY}
                  fontSize={{ xs: 18, sm: 30, md: 42 }}
                  color="white"
                  textAlign={{ xs: 'center', md: 'left' }}
                >A Bespoke 3D Printed Figure</Typography>
              </MotionDiv>
              <MotionDiv variants={varFadeInDown}>
                <Typography
                  fontFamily={FONT_IBM_PLEX_SERIF}
                  fontSize={{ xs: 16, md: 18 }}
                  textAlign={{ xs: 'center', md: 'left' }}
                  color="white"
                >
                  The full essence of your NFT will be reproduced in a customized 3D model. Then, your model will be printed and painted in vibrant colors to offer you the most realistic portrayal possible.
                </Typography>
              </MotionDiv>
              <MotionDiv variants={varFadeInUp}>
                <Stack direction="row" justifyContent={{ xs: 'center', md: 'start' }}>
                  <Box
                    component="img"
                    src="/assets/images/explore_hero_2.jpg"
                    height={{ xs: 150, sm: 200, md: 250, lg: 300 }}
                    sx={{ objectFit: 'cover' }}
                  />
                </Stack>
              </MotionDiv>
              <MotionDiv variants={varFadeInDown}>
                <Stack direction="row" justifyContent={{ xs: 'center', md: 'start' }}>
                  <PrimaryButton
                    sx={{
                      color: 'white',
                      px: 3,
                      fontSize: { xs: '1rem', md: '1.5rem' },
                      fontWeight: 900
                    }}
                  >
                    Join the waitlist now
                  </PrimaryButton>
                </Stack>
              </MotionDiv>
            </Stack>
          </Grid>
        </Grid>
      </MHidden>

      <MHidden width="smDown">
        <Stack direction="row" justifyContent="center">
          <Stack width="90%" justifyContent="center" spacing={3}>
            {/* Titles */}
            <Box>
              <Grid container spacing={20}>
                <Grid item md={6}>
                  <MotionDiv variants={varFadeInUp}>
                    <Typography
                      fontFamily={FONT_PRIMARY}
                      fontSize={{ xs: 18, sm: 26, md: 32 }}
                      color="white"
                      textAlign={{ xs: 'center', md: 'left' }}
                    >Hand Crafted Wooden Figure</Typography>
                  </MotionDiv>
                </Grid>

                <Grid item md={6}>
                  <MotionDiv variants={varFadeInUp}>
                    <Typography
                      fontFamily={FONT_PRIMARY}
                      fontSize={{ xs: 18, sm: 26, md: 32 }}
                      color="white"
                      textAlign={{ xs: 'center', md: 'left' }}
                    >A Bespoke 3D Printed Figure</Typography>
                  </MotionDiv>
                </Grid>
              </Grid>
            </Box>

            {/* Descriptions */}
            <Box>
              <Grid container spacing={20}>
                <Grid item md={6}>
                  <MotionDiv variants={varFadeInDown}>
                    <Typography
                      fontFamily={FONT_IBM_PLEX_SERIF}
                      fontSize={{ xs: 16, md: 16 }}
                      textAlign={{ xs: 'center', md: 'left' }}
                      color="white"
                    >
                      Our European craftsmen use their skill and ingenuity to handcraft a unique figure that is true to the spirit of your NFT. It is made entirely of wood. Each figure is hand-painted with vibrant colors and finished with a patina coating. Since each figure is a representation of our keen interest in your NFT, only a limited number of requests will be processed at any given time.
                    </Typography>
                  </MotionDiv>
                </Grid>

                <Grid item md={6}>
                  <MotionDiv variants={varFadeInDown}>
                    <Typography
                      fontFamily={FONT_IBM_PLEX_SERIF}
                      fontSize={{ xs: 16, md: 16 }}
                      textAlign={{ xs: 'center', md: 'left' }}
                      color="white"
                    >
                      The full essence of your NFT will be reproduced in a customized 3D model. Then, your model will be printed and painted in vibrant colors to offer you the most realistic portrayal possible.
                    </Typography>
                  </MotionDiv>
                </Grid>
              </Grid>
            </Box>

            {/* Images */}
            <Box>
              <Grid container spacing={20}>
                <Grid item md={6}>
                  <MotionDiv variants={varFadeInUp}>
                    <Box
                      component="img"
                      src="/assets/images/explore_hero_1.jpg"
                      height={{ xs: 150, sm: 200, md: 250, lg: 300 }}
                      sx={{ objectFit: 'cover' }}
                    />
                  </MotionDiv>
                </Grid>

                <Grid item md={6}>
                  <MotionDiv variants={varFadeInUp}>
                    <Box
                      component="img"
                      src="/assets/images/explore_hero_2.jpg"
                      height={{ xs: 150, sm: 200, md: 250, lg: 300 }}
                      sx={{ objectFit: 'cover' }}
                    />
                  </MotionDiv>
                </Grid>
              </Grid>
            </Box>

            {/* Buttons */}
            <Box>
              <Grid container spacing={20}>
                <Grid item md={6}>
                  <PrimaryButton
                    sx={{
                      color: 'white',
                      px: 3,
                      fontSize: { xs: 12, md: 20 },
                      fontWeight: 900
                    }}
                  >
                    Join the waitlist now
                  </PrimaryButton>
                </Grid>
                <Grid item md={6}>
                  <PrimaryButton
                    sx={{
                      color: 'white',
                      px: 3,
                      fontSize: { xs: 12, md: 20 },
                      fontWeight: 900
                    }}
                  >
                    Join the waitlist now
                  </PrimaryButton>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </Stack>
      </MHidden>
    </Container >
  );
}