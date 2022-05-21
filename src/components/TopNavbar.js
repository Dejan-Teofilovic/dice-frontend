import React, { useState } from 'react';
import { AppBar, Box, Container, Drawer, IconButton, List, ListItem, ListItemButton, Stack, styled, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { PrimaryButton, TextButton } from './styledComponents';

const CustomizedDrawer = styled(Drawer)`
  .MuiPaper-root {
    background-color: #111;
  }
`;

export default function TopNavbar() {
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0)', py: 3 }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            fontFamily="'IBM Plex Mono', monospace"
            fontSize={28}
            color="white"
            display={{ xs: 'none', md: 'flex' }}
          >DICE</Typography>
          <Box component="img" src="/assets/images/logo.png" width={24} ml={1} />
          <Box flexGrow={1} />

          <TextButton sx={{ mr: 3, fontWeight: 600, display: { xs: 'none', md: 'flex' } }}>FAQ</TextButton>
          <TextButton sx={{ mr: 4, fontWeight: 600, display: { xs: 'none', md: 'flex' } }}>Explore Dice</TextButton>
          <PrimaryButton variant="contained">Connect</PrimaryButton>

          <IconButton
            size="large"
            sx={{ color: '#FFFFFF', ml: { xs: 2, md: 0 }, display: { xs: 'flex', md: 'none' } }}
            onClick={() => setDrawerOpened(true)}
          >
            <MenuIcon />
          </IconButton>

          <CustomizedDrawer
            anchor="right"
            open={drawerOpened}
            onClose={() => setDrawerOpened(false)}
          >
            <Box my={3}>
              <Stack direction="row" justifyContent="center" alignItems="center">
                <Box component="img" src="/assets/images/logo.png" />
              </Stack>
              <List sx={{ mt: 2 }}>
                <ListItem><ListItemButton sx={{ color: '#9DB7BD', fontFamily: "'Source Sans Pro', sans-serif" }}>FAQ</ListItemButton></ListItem>
                <ListItem><ListItemButton sx={{ color: '#9DB7BD', fontFamily: "'Source Sans Pro', sans-serif" }}>Explore Dice</ListItemButton></ListItem>
              </List>
            </Box>
          </CustomizedDrawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}