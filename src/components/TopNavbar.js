import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Stack,
  styled,
  Toolbar,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton, TextButton } from './styledComponents';
import { ROUTES } from '../utils/constants';
import useWallet from '../hooks/useWallet';

const CustomizedDrawer = styled(Drawer)`
  .MuiPaper-root {
    background-color: #111;
  }
`;

export default function TopNavbar() {
  const navigate = useNavigate();

  const { connectWallet, currentAccount, walletConnected, disconnectWallet } = useWallet();

  const [drawerOpened, setDrawerOpened] = useState(false);

  const handleDisconnect = () => {
    disconnectWallet();
    navigate('/');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0)', py: 3 }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Button component={RouterLink} to="/">
            <Typography
              fontFamily="'IBM Plex Mono', monospace"
              fontSize={28}
              color="white"
              display={{ xs: 'none', md: 'flex' }}
            >DICE</Typography>
            <Box component="img" src="/assets/images/logo.png" width={24} ml={1} />
          </Button>
          <Box flexGrow={1} />
          {
            ROUTES.map(route => (
              <TextButton
                key={route.id}
                sx={{ mr: 4, fontWeight: 600, display: { xs: 'none', md: 'flex' } }}
                component={RouterLink}
                to={route.path}
              >{route.name}</TextButton>
            ))
          }

          {
            walletConnected ? (
              <PrimaryButton
                variant="contained"
                onClick={handleDisconnect}
              >Disconnect</PrimaryButton>
            ) : (
              <PrimaryButton
                variant="contained"
                onClick={() => connectWallet()}
              >Connect</PrimaryButton>
            )
          }

          {/* For Mobile */}
          <IconButton
            size="large"
            sx={{ color: '#FFFFFF', ml: { xs: 2, md: 0 }, display: { xs: 'flex', md: 'none' } }}
            onClick={() => setDrawerOpened(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* For Mobile */}
          <CustomizedDrawer
            anchor="right"
            open={drawerOpened}
            onClose={() => setDrawerOpened(false)}
          >
            <Box my={3}>
              <Stack direction="row" justifyContent="center" alignItems="center">
                <Button component={RouterLink} to="/">
                  <Box component="img" src="/assets/images/logo.png" />
                </Button>
              </Stack>
              <List sx={{ mt: 2 }} onClick={() => setDrawerOpened(false)}>
                {
                  ROUTES.map(route => (
                    <ListItem key={route.id}>
                      <ListItemButton
                        sx={{ color: '#9DB7BD', fontFamily: "'Source Sans Pro', sans-serif" }}
                        component={RouterLink}
                        to={route.path}
                      >
                        {route.name}
                      </ListItemButton>
                    </ListItem>
                  ))
                }
              </List>
            </Box>
          </CustomizedDrawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}