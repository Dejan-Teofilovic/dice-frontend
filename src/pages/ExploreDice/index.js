import React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { PrimaryButton } from '../../components/styledComponents';
import MotionDiv from '../../components/MotionDiv';
import { 
  varFadeInUp, 
  varFadeInDown, 
  FONT_IBM_PLEX_SERIF, 
  COLOR_SECONDARY, 
  FONT_PRIMARY 
} from '../../utils/constants';

export default function ExploreDice() {
  return (
    <Container maxWidth="xl" sx={{ pb: 3 }}>
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
                fontSize={{ xs: 12, md: 16 }}
                textAlign={{ xs: 'center', md: 'left' }}
                color={COLOR_SECONDARY}
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
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
              >Bespoke 3D Printed Figure</Typography>
            </MotionDiv>
            <MotionDiv variants={varFadeInDown}>
              <Typography
                fontFamily={FONT_IBM_PLEX_SERIF}
                fontSize={{ xs: 12, md: 16 }}
                textAlign={{ xs: 'center', md: 'left' }}
                color={COLOR_SECONDARY}
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
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
    </Container >
  );
}