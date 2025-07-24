import {Box, Toolbar, AppBar, Typography, Button, IconButton, Badge} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import {Link} from 'react-router-dom'
function Navbar({cartTotal}){
   return(
    <Box sx={{flexGrow: 1}}>
        <AppBar position='fixed' color='primary'>
            <Toolbar>
                <Typography variant='h6' component="div" sx={{flexGrow: 1}}>My Bookstore</Typography>
                <Box sx={{display:'flex', gap:1}}>
                <Button color='inherit' component={Link} to="/home">Home </Button>
                <Button color='inherit' component={Link} to="/">Book </Button>
                <Button color='inherit' component={Link} to="/about">About </Button>
                <Button color='inherit' component={Link} to="/contacts">Contacts </Button>
                </Box>
                <Box sx={{display:'flex', gap:1, marginLeft:2}}>
                    <Button color='inherit' variant='outlined' component={Link} to="/login">Login</Button>
                    <Button color="inherit" variant='outlined' component={Link} to="/register">Register</Button>
                     <Button color='inherit' component={Link} to="/cart" sx={{ml: 2, p: 0,minWidth: 'auto'}}>
                        <Badge badgeContent={cartTotal} color='secondary' showZero>
                         <ShoppingCartIcon />
                        </Badge>
                     </Button>
                </Box>
            </Toolbar>
        </AppBar>
    </Box>
   )
}
export default Navbar