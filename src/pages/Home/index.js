import React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="xl" sx={{ pb: 3 }}>
      <Grid container flexDirection={{ xs: 'column-reverse', md: 'row' }} spacing={{ xs: 0, sm: 14, md: 0 }}>
        <Grid item xs={12} md={6}>
          <Typography
            mt={{ xs: 5, sm: 5, md: 5, lg: 15 }}
            fontSize={{ xs: 28, md: 48 }}
            fontFamily="'IBM Plex Mono', monospace"
            fontWeight={700}
            textAlign={{ xs: 'center', md: 'left' }}
            color="white"
          >
            <Typography
              component="span"
              fontSize="inherit"
              fontFamily="'Source Sans Pro', sans-serif"
              fontWeight="inherit"
              fontStyle="italic"
              color="#A1275D"
            >What if</Typography> you can touch your PFP NFT?
          </Typography>

          <Typography
            mt={2}
            fontFamily="'IBM Plex Mono', monospace"
            fontSize={{ xs: 12, md: 18 }}
            textAlign={{ xs: 'center', md: 'left' }}
            color="#9DB7BD"
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </Typography>

          <Stack direction="row" justifyContent={{ xs: 'center', md: 'start' }}>
            <Box component="img" src="/assets/images/circle_text.png" mt={5} width={{ xs: '40%', sm: '30%', md: '25%' }} />
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack mt={5} alignItems="center">
            <Box component="img" src="/assets/images/hero.png" width={{ xs: '70%', sm: '50%', md: '70%' }} />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}