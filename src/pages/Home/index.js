import React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import MotionDiv from '../../components/MotionDiv';
import { 
  FONT_IBM_PLEX, 
  FONT_IBM_PLEX_SERIF, 
  varFadeInDown, 
  varFadeInLeft, 
  varFadeInRight, 
  varFadeInUp 
} from '../../utils/constants';

export default function Home() {
  return (
    <Container maxWidth="xl" sx={{ pb: 3 }}>
      <Grid container flexDirection={{ xs: 'column-reverse', md: 'row' }} spacing={{ xs: 0, sm: 14, md: 0 }}>
        <Grid item xs={12} md={6}>
          <MotionDiv variants={varFadeInLeft}>
            <Typography
              mt={{ xs: 5, sm: 5, md: 5, lg: 15 }}
              fontSize={{ xs: 28, md: 48 }}
              fontFamily="sfProRounded"
              fontWeight={900}
              textAlign={{ xs: 'center', md: 'left' }}
              color="white"
              letterSpacing={3}
            >
              <Typography
                component="span"
                fontSize={{ xs: 32, md: 54 }}
                fontFamily={FONT_IBM_PLEX}
                fontWeight="inherit"
                fontStyle="italic"
                color="#A1275D"
              >What if</Typography>&nbsp;you can touch your PFP NFT?
            </Typography>
          </MotionDiv>

          <MotionDiv variants={varFadeInRight}>
            <Typography
              mt={2}
              fontFamily={FONT_IBM_PLEX_SERIF}
              fontSize={{ xs: 12, md: 18 }}
              textAlign={{ xs: 'center', md: 'left' }}
              color="#9DB7BD"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </Typography>
          </MotionDiv>

          <MotionDiv variants={varFadeInDown}>
            <Stack direction="row" justifyContent={{ xs: 'center', md: 'start' }}>
              <Box component="img" src="/assets/images/circle_text.png" mt={5} width={{ xs: '40%', sm: '30%', md: '25%' }} />
            </Stack>
          </MotionDiv>

        </Grid>

        <Grid item xs={12} md={6}>
          <MotionDiv variants={varFadeInUp}>
            <Stack mt={5} alignItems="center">
              <Box component="img" src="/assets/images/hero.png" width={{ xs: '70%', sm: '50%', md: '70%' }} />
            </Stack>
          </MotionDiv>
        </Grid>
      </Grid>
    </Container>
  );
}