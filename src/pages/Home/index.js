import React from 'react';
import { Box, Container, Grid, IconButton, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MotionDiv from '../../components/MotionDiv';
import {
  FONT_IBM_PLEX,
  FONT_IBM_PLEX_SERIF,
  varFadeInDown,
  varFadeInLeft,
  varFadeInRight,
  varFadeInUp
} from '../../utils/constants';
import { Twitter } from '@mui/icons-material';

export default function Home() {
  return (
    <Container maxWidth="xl" sx={{ pb: 3 }}>
      <Grid container flexDirection={{ xs: 'column-reverse', md: 'row' }} spacing={{ xs: 0, sm: 14, md: 0 }}>
        <Grid item xs={12} md={6}>
          <MotionDiv variants={varFadeInLeft}>
            <Typography
              mt={{ xs: 5, sm: 5, md: 5, lg: 15 }}
              fontSize={{ xs: 28, md: 36 }}
              fontFamily="sfProRounded"
              fontWeight={900}
              textAlign={{ xs: 'center', md: 'left' }}
              color="white"
              letterSpacing={3}
            >
              <Typography
                component="span"
                fontSize={{ xs: 32, md: 38 }}
                fontFamily={FONT_IBM_PLEX}
                fontWeight="inherit"
                fontStyle="italic"
                color="#A1275D"
              >What if</Typography>&nbsp;you can touch your NFT Avatar?
            </Typography>
          </MotionDiv>

          <MotionDiv variants={varFadeInRight}>
            <Typography
              mt={2}
              fontFamily={FONT_IBM_PLEX_SERIF}
              fontSize={16}
              textAlign={{ xs: 'center', md: 'left' }}
              color="white"
            >
              We know you love your NFT Avatar, which is why we want to build a one-of-a-kind figure that you can admire from any angle. Show the world who truly owns your NFT and let the fascination of your unique creation begin.....
            </Typography>
          </MotionDiv>

          <MotionDiv variants={varFadeInDown}>
            <Stack direction="row" justifyContent={{ xs: 'center', md: 'start' }}>
              <RouterLink to="/explore-dice">
                <Box
                  component="img"
                  src="/assets/images/circle_text.png"
                  mt={5}
                  sx={{ width: 140 }}
                />
              </RouterLink>
            </Stack>
          </MotionDiv>

        </Grid>

        <Grid item xs={12} md={6}>
          <MotionDiv variants={varFadeInUp}>
            <Stack mt={5} alignItems="center">
              <Box component="img" src="/assets/images/hero.png" width={{ xs: '70%', sm: '50%', md: '50%' }} />
            </Stack>
          </MotionDiv>
        </Grid>
      </Grid>
      <IconButton
        sx={{
          color: 'white',
          position: 'fixed',
          bottom: 32,
          left: { xs: 32, md: 64 },
          zIndex: 100
        }}
        component={Link}
        target="_blank"
        href="https://twitter.com/dice__NFT/"
      >
        <Twitter sx={{ fontSize: { xs: 32, md: 48 } }} />
      </IconButton>
    </Container>
  );
}