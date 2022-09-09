import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import RocketIcon from '@mui/icons-material/Rocket';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    console.log(e)
    setAnchorElNav(null);
  };


  return (
    <AppBar position="sticky" sx={{ bgcolor: 'text.primary' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SatelliteAltIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            RvVerse
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' }, }}
            >
              <MenuItem>
                <Link to="/blog" style={{ textDecoration: 'none' }}>
                  <Typography sx={{ color: 'text.primary' }}>
                    Blog
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/blog" style={{ textDecoration: 'none' }}>
                  <Typography sx={{ color: 'text.primary' }}>
                    Blog_2
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/blog" style={{ textDecoration: 'none' }}>
                  <Typography sx={{ color: 'text.primary' }}>
                    Blog_1
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <SatelliteAltIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            RvVerse
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/blog" style={{ textDecoration: 'none' }}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Blog
              </Button>
            </Link>
            <Link to="/blog" style={{ textDecoration: 'none' }}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Blog_1
              </Button>
            </Link>
            <Link to="/blog" style={{ textDecoration: 'none' }}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Blog_2
              </Button>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="RvVerse" enterDelay={500} leaveDelay={3000}>
              <IconButton sx={{ p: 0 }}>
                <Avatar sx={{ bgcolor: 'text.primary' }}>
                  <RocketIcon fontSize='large' />
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
