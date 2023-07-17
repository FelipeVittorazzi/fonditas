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
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Nosotros', 'Fonditas', 'Mapa', 'Inscribírse'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const Navbar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    };

    return ( 
        <AppBar position="static">
            <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 5,
                    display: { xs: 'none', md: 'flex' },
                    fontWeight: 700,
                    fontSize: "56px",
                    color: 'inherit',
                    textDecoration: 'none',
                }}
                >
               Fonditas
                </Typography>
    
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: "center", flexDirection: 'row' }}>
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
                    sx={{
                    display: { xs: 'block', md: 'none' },
                    textTransform: "none"
                    }}
                    
                >
                    {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                    ))}
                </Menu>
                </Box>
                <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontWeight: 700,
                    color: 'inherit',
                    textDecoration: 'none',
                }}
                >
                LOGO
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: "30px" }}>
                {pages.map((page) => (
                    <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block', textTransform: "none"  }}
                    >
                    {page}
                    </Button>
                ))}
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end', marginRight: "20px" }}>
                    <Button
                        sx={{ my: 2, color: 'white', display: 'block', border: 1, borderRadius: "10px", paddingX: "30px"}}
                        >
                        <Typography
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                fontWeight: 600,
                                color: 'inherit',
                                textDecoration: 'none',
                                textTransform: "none"
                            }}
                            >
                            Inicia sesión
                        </Typography>
                    </Button>
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="../../../public/icons/cart.svg" />
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                    ))}
                </Menu>
                </Box>
            </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;