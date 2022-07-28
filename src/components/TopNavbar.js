import React, { useMemo, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton, TextButton, ToolbarWithoutPaddingX } from './styledComponents';
import { ROUTES } from '../utils/constants';
import useWallet from '../hooks/useWallet';

const CustomizedDrawer = styled(Drawer)`
  .MuiPaper-root {
    background-color: #111;
  }
`;

export default function TopNavbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { connectWallet, walletConnected, disconnectWallet } = useWallet();

  const [drawerOpened, setDrawerOpened] = useState(false);

  const valueOfPy = useMemo(() => {
    if (pathname === '/') {
      return 8;
    } else if(pathname === '/explore-dice') {
      return 5;
    }
    return 3;
  }, [pathname]);

  const handleDisconnect = () => {
    disconnectWallet();
    navigate('/');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0)', py: valueOfPy, boxShadow: 'none' }}>
      <Container maxWidth="lg">
        <ToolbarWithoutPaddingX>
          <Button component={RouterLink} to="/">
            <Box component="img" src="/assets/images/logo.png" width={100} alt="logo" />
          </Button>
          <Box flexGrow={1} />
          {
            ROUTES.map(route => (
              route.visible &&
              <TextButton
                key={route.id}
                sx={{
                  mr: 4,
                  fontWeight: 600,
                  display: { xs: 'none', md: 'flex' },
                  fontSize: { xs: 14, sm: 16, md: 18 }
                }}
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
                sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}
              >Disconnect</PrimaryButton>
            ) : (
              <PrimaryButton
                variant="contained"
                onClick={() => connectWallet()}
                sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}
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
                  <Box component="img" src="/assets/images/logo.png" width={80} />
                </Button>
              </Stack>
              <List sx={{ mt: 2 }} onClick={() => setDrawerOpened(false)}>
                {
                  ROUTES.map(route => (
                    route.visible &&
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
        </ToolbarWithoutPaddingX>
      </Container>
    </AppBar>
  );
}