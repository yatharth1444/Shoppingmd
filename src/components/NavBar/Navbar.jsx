
// import { Box, Toolbar, AppBar, Typography, Button, IconButton, Badge, Tooltip } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import { Link, useNavigate } from 'react-router-dom';

// function Navbar({ cartTotal }) {
//   const navigate = useNavigate();

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="fixed" color="primary" elevation={4} /* subtle shadow */>
//         <Toolbar>
//           {/* Tooltip for accessibility */}
//           <Tooltip title="Go Back" arrow>
//             <IconButton 
//               onClick={() => navigate(-1)} 
//               aria-label="Go Back" 
//               edge="start" 
//               color="inherit"
//               sx={{ mr: 2 }} 
//               disableRipple /* optional */
//             >
//               <ArrowBackIosNewIcon fontSize="small" />
//             </IconButton>
//           </Tooltip>

//           <Typography 
//             variant="h6" 
//             component="div" 
//             sx={{ flexGrow: 1, fontWeight: 600, letterSpacing: 0.5, fontSize:'1.5rem' }}
//           >
//             My Bookstore
//           </Typography>

//           {/* Main navigation buttons */}
//           <Box sx={{ display: 'flex', gap: 2 }}>
//             <Button 
//               color="inherit" 
//               component={Link} 
//               to="/home" 
//               sx={{ textTransform: 'none', fontWeight: 500,  fontSize: '1.1rem' }}
//             >
//               Home
//             </Button>
//             <Button 
//               color="inherit" 
//               component={Link} 
//               to="/" 
//               sx={{ textTransform: 'none', fontWeight: 500, fontSize: '1.1rem' }}
//             >
//               Books
//             </Button>
//             <Button 
//               color="inherit" 
//               component={Link} 
//               to="/about" 
//               sx={{ textTransform: 'none', fontWeight: 500, fontSize: '1.1rem' }}
//             >
//               About
//             </Button>
//             <Button 
//               color="inherit" 
//               component={Link} 
//               to="/contacts" 
//               sx={{ textTransform: 'none', fontWeight: 500, fontSize: '1.1rem'}}
//             >
//               Contact
//             </Button>
//           </Box>

//           {/* Auth and cart buttons */}
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 3 }}>
            
//             <Button
//               color="inherit"
//               variant="outlined"
//               component={Link}
//               to="/login"
//               sx={{ textTransform: 'none', fontWeight: 600, px: 2,  fontSize: '1.1rem' }}
//             >
//               Login
//             </Button>

//             <Button
//               color="inherit"
//               variant="outlined"
//               component={Link}
//               to="/register"
//               sx={{ textTransform: 'none', fontWeight: 600, px: 2,   fontSize: '1.1rem' }}
//             >
//               Register
//             </Button>

//             <Button
//               color="inherit"
//               component={Link}
//               to="/cart"
//               sx={{ ml: 2, p: 0, minWidth: 'auto',  fontSize: '1.1rem' }}
//               aria-label="Cart"
//             >
//               <Badge badgeContent={cartTotal} color="secondary" showZero>
//                 <ShoppingCartIcon fontSize="medium" />
//               </Badge>
//             </Button>
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

// export default Navbar;


//(((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))
// import React, { useState } from 'react';
// import {
//   Box,
//   Toolbar,
//   AppBar,
//   Typography,
//   Button,
//   IconButton,
//   Badge,
//   Tooltip,
//   Avatar,
//   Menu,
//   MenuItem,
//   ListItemIcon,
//   Divider
// } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import LogoutIcon from '@mui/icons-material/Logout';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { Link, useNavigate } from 'react-router-dom';

// function Navbar({ cartTotal }) {
//   const navigate = useNavigate();

//   // State for avatar menu
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   // Assume user info is fetched from localStorage or context
//   // Example user:
//   const user = JSON.parse(localStorage.getItem('user'));

//   const handleAvatarClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     handleMenuClose();
//     navigate('/login');
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="fixed" color="primary" elevation={4}>
//         <Toolbar>
//           <Tooltip title="Go Back" arrow>
//             <IconButton
//               onClick={() => navigate(-1)}
//               aria-label="Go Back"
//               edge="start"
//               color="inherit"
//               sx={{ mr: 2 }}
//               disableRipple
//             >
//               <ArrowBackIosNewIcon fontSize="small" />
//             </IconButton>
//           </Tooltip>

//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, fontWeight: 600, letterSpacing: 0.5, fontSize: '1.5rem' }}
//           >
//             My Bookstore
//           </Typography>

//           <Box sx={{ display: 'flex', gap: 2 }}>
//             <Button
//               color="inherit"
//               component={Link}
//               to="/home"
//               sx={{ textTransform: 'none', fontWeight: 500, fontSize: '1.1rem' }}
//             >
//               Home
//             </Button>
//             <Button
//               color="inherit"
//               component={Link}
//               to="/"
//               sx={{ textTransform: 'none', fontWeight: 500, fontSize: '1.1rem' }}
//             >
//               Books
//             </Button>
//             <Button
//               color="inherit"
//               component={Link}
//               to="/about"
//               sx={{ textTransform: 'none', fontWeight: 500, fontSize: '1.1rem' }}
//             >
//               About
//             </Button>
//             <Button
//               color="inherit"
//               component={Link}
//               to="/contacts"
//               sx={{ textTransform: 'none', fontWeight: 500, fontSize: '1.1rem' }}
//             >
//               Contact
//             </Button>
//           </Box>

//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 3 }}>
//             {!user ? (
//               <>
//                 <Button
//                   color="inherit"
//                   variant="outlined"
//                   component={Link}
//                   to="/login"
//                   sx={{ textTransform: 'none', fontWeight: 600, px: 2, fontSize: '1.1rem' }}
//                 >
//                   Login
//                 </Button>

//                 <Button
//                   color="inherit"
//                   variant="outlined"
//                   component={Link}
//                   to="/register"
//                   sx={{ textTransform: 'none', fontWeight: 600, px: 2, fontSize: '1.1rem' }}
//                 >
//                   Register
//                 </Button>
//               </>
//             ) : (
//               <>
//                 {/* User Avatar */}
//                 <IconButton
//                   onClick={handleAvatarClick}
//                   size="small"
//                   sx={{ ml: 2 }}
//                   aria-controls={open ? 'account-menu' : undefined}
//                   aria-haspopup="true"
//                   aria-expanded={open ? 'true' : undefined}
//                   color="inherit"
//                   disableRipple
//                 >
//                   <Avatar sx={{ width: 32, height: 32, bgcolor: '#1976d2' }}>
//                     {user.name ? user.name.charAt(0).toUpperCase() : <AccountCircleIcon />}
//                   </Avatar>
//                 </IconButton>

//                 {/* Dropdown Menu */}
//                 <Menu
//                   anchorEl={anchorEl}
//                   id="account-menu"
//                   open={open}
//                   onClose={handleMenuClose}
//                   onClick={handleMenuClose}
//                   PaperProps={{
//                     elevation: 4,
//                     sx: {
//                       overflow: 'visible',
//                       filter:
//                         'drop-shadow(0px 2px 8px rgba(0,0,0,0.15))',
//                       mt: 1.5,
//                       '& .MuiAvatar-root': {
//                         width: 32,
//                         height: 32,
//                         ml: -0.5,
//                         mr: 1,
//                       },
//                       '&:before': {
//                         content: '""',
//                         display: 'block',
//                         position: 'absolute',
//                         top: 0,
//                         right: 14,
//                         width: 10,
//                         height: 10,
//                         bgcolor: 'background.paper',
//                         transform: 'translateY(-50%) rotate(45deg)',
//                         zIndex: 0,
//                       },
//                     },
//                   }}
//                   transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//                   anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//                 >
//                   <MenuItem component={Link} to="/profile">
//                     <ListItemIcon>
//                       <AccountCircleIcon fontSize="small" />
//                     </ListItemIcon>
//                     Profile
//                   </MenuItem>

//                   <Divider />

//                   <MenuItem onClick={handleLogout}>
//                     <ListItemIcon>
//                       <LogoutIcon fontSize="small" />
//                     </ListItemIcon>
//                     Logout
//                   </MenuItem>
//                 </Menu>
//               </>
//             )}

//             {/* Cart Icon */}
//             <Button
//               color="inherit"
//               component={Link}
//               to="/cart"
//               sx={{ ml: 2, p: 0, minWidth: 'auto' }}
//               aria-label="Cart"
//             >
//               <Badge badgeContent={cartTotal} color="secondary" showZero>
//                 <ShoppingCartIcon fontSize="medium" />
//               </Badge>
//             </Button>
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import {
  Box, Toolbar, AppBar, Typography, Button, IconButton, Badge, Tooltip, Avatar,
  Menu, MenuItem, Divider, useTheme
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ cartTotal }) {
  const navigate = useNavigate();
  const theme = useTheme();

  // Example user detection logic
  const user = JSON.parse(localStorage.getItem('user'));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // menu handlers
  const handleAvatarClick = e => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    handleMenuClose();
    navigate('/login');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={6}
        sx={{
          background: "linear-gradient(90deg, #4B6CB7 0%, #182848 100%)",
          minHeight: 72,
          justifyContent: 'center',
        }}>
        <Toolbar sx={{ minHeight: 72 }}>
          <Tooltip title="Go Back" arrow>
            <IconButton
              onClick={() => navigate(-1)}
              aria-label="Go Back"
              color="inherit"
              size="medium"
              sx={{
                mr: 2,
                '&:hover': {
                  backgroundColor: 'rgba(25,118,210,0.12)',
                  transform: 'scale(1.08)'
                },
                transition: 'all 0.27s'
              }}>
              <ArrowBackIosNewIcon fontSize="medium" />
            </IconButton>
          </Tooltip>
          <Typography
            variant="h5"
            noWrap
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              fontFamily: 'Poppins, Segoe UI, sans-serif',
              letterSpacing: 1,
              fontSize: 'clamp(1.3rem, 3vw, 2.1rem)',
              color: "#fff"
            }}>
            My Bookstore
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mr: 2 }}>
            {/* Animated Nav links */}
            {[
              { label: "Home", to: "/home" },
              { label: "Books", to: "/" },
              { label: "About", to: "/about" },
              { label: "Contact", to: "/contacts" },
            ].map(link =>
              <Button
                key={link.label}
                color="inherit"
                component={Link}
                to={link.to}
                sx={{
                  position: 'relative',
                  fontWeight: 500,
                  fontSize: '1.13rem',
                  textTransform: 'none',
                  px: 1.5,
                  letterSpacing: "0.05em",
                  overflow: "hidden",
                  '&:after': {
                    display: "block",
                    content: '""',
                    borderBottom: '2px solid #fff',
                    transform: 'scaleX(0)',
                    transition: "transform 0.23s ease",
                  },
                  '&:hover:after': {
                    transform: 'scaleX(1)'
                  },
                }}>
                {link.label}
              </Button>
            )}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Auth or Avatar dropdown */}
            {!user ? (
              <>
                <Button
                  component={Link}
                  to="/login"
                  variant="contained"
                  color="secondary"
                  sx={{
                    borderRadius: 4,
                    fontWeight: 600,
                    fontSize: "1.01rem",
                    px: 2.2,
                    mr: 1,
                    boxShadow: "0 2px 8px rgba(75,108,183,0.10)",
                    textTransform: "none",
                    transition: "background 0.18s, transform 0.20s",
                    '&:hover': {
                      background: "#2d9cdb",
                      transform: "translateY(-2px) scale(1.03)"
                    }
                  }}>
                  Login
                </Button>
                <Button
                  component={Link}
                  to="/register"
                  variant="outlined"
                  color="secondary"
                  sx={{
                    borderRadius: 4,
                    fontWeight: 600,
                    fontSize: "1.01rem",
                    px: 2.2,
                    ml: 0.2,
                    borderWidth: "2px",
                    boxShadow: "0 1px 5px rgba(75,108,183,0.05)",
                    textTransform: "none",
                    borderColor: "#fff",
                    color: '#fff',
                    background: "transparent",
                    transition: "border 0.23s, transform 0.18s",
                    '&:hover': {
                      background: "#fff",
                      color: theme.palette.primary.main,
                      borderColor: theme.palette.primary.main,
                      transform: "translateY(-2px) scale(1.03)"
                    }
                  }}>
                  Register
                </Button>
              </>
            ) : (
              <>
                <IconButton
                  sx={{
                    ml: 2,
                    p: 0,
                    borderRadius: "50%",
                    transition: "box-shadow 0.2s, transform 0.2s",
                    boxShadow: open ? "0 0 0 3px #1976d2" : "none",
                    '&:hover': {
                      boxShadow: "0 0 0 4px #ffd70099",
                      background: "rgba(25,118,210,0.07)",
                      transform: "scale(1.07)"
                    }
                  }}
                  onClick={handleAvatarClick}
                  size="large"
                  color="inherit"
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar sx={{
                    width: 38, height: 38,
                    bgcolor: "#ffc107",
                    color: "#2c3e50",
                    fontWeight: 700,
                    fontSize: "1.25rem"
                  }}>
                    {user?.name ? user.name[0].toUpperCase() : <AccountCircleIcon />}
                  </Avatar>
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleMenuClose}
                  PaperProps={{
                    elevation: 6,
                    sx: {
                      mt: 1.6,
                      minWidth: 150,
                      borderRadius: 3,
                      background: "#fff",
                      py: 0.5,
                      boxShadow: "0 4px 20px rgba(44,100,195,0.11)"
                    }
                  }}
                  anchorOrigin={{
                    vertical: 'bottom', horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top', horizontal: 'right',
                  }}>
                  <MenuItem component={Link} to="/profile">
                    <AccountCircleIcon sx={{ mr: 1 }} fontSize="small" />
                    My Profile
                  </MenuItem>
                  <Divider sx={{ my: 0.4 }} />
                  <MenuItem onClick={handleLogout}>
                    <LogoutIcon sx={{ mr: 1 }} fontSize="small" />
                    Logout
                  </MenuItem>
                </Menu>
              </>
            )}

            {/* Cart */}
            <IconButton
              component={Link}
              to="/cart"
              color="inherit"
              sx={{
                ml: 2, p: 0.9, minWidth: 'auto',
                borderRadius: '50%',
                transition: 'background 0.20s, box-shadow 0.15s, transform 0.18s',
                '&:hover': {
                  background: "#e3effd",
                  transform: "scale(1.11)"
                }
              }}
              aria-label="Cart"
            >
              <Badge badgeContent={cartTotal} color="error" showZero
                sx={{ '.MuiBadge-badge': { fontWeight: 600, fontSize: "0.95em", borderRadius: '6px' } }}>
                <ShoppingCartIcon fontSize="large" />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
