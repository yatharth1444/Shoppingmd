import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button} from "@mui/material"
 import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import { Link } from "react-router-dom"
function Cart({onRemove, cart = [], removeFromCartWholeItem, handleAddingtoCart}) {
    const safeCart = Array.isArray(cart) ? cart : []
   const Totalprice = safeCart.reduce((sum, item) => sum = sum + item.price * item.quantity, 0 )

    return(
       <Container sx={{marginTop : 10}}>
        <Typography variant ="h4" gutterBottom>
            Your cart
        </Typography>
        {
            safeCart.length === 0  ?
            <Typography variant="h6" > Your cart is empty</Typography>
            :(
                <>
                 <TableContainer component={Paper}>
                    <Table aria-label="cart-items">
                        <TableHead >
                            <TableRow >
                                <TableCell>Books</TableCell>
                               <TableCell>Author</TableCell>
                               <TableCell align="center">Quantity</TableCell>
                               <TableCell align="right" >Price</TableCell>
                               <TableCell align="right">Subtotal</TableCell>
                               <TableCell align="center">Remove</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {safeCart.map((item)=>(
                                <TableRow key={item.id}>
                                   <TableCell component="th" scope="row" >
                                   <Box sx={{display:"flex", alignItems:"center", gap:2}}>
                                    <img src={item.imageUrl} alt={item.title} width={50}/>
                                    <Typography >{item.title}</Typography>
                                   </Box>
                                </TableCell>
                                <TableCell >{item.author}</TableCell>
                                 <TableCell align="center">{item.quantity}</TableCell>
                                  <TableCell align="right">${item.price.toFixed(2)}</TableCell>
                                   <TableCell align="right">{(item.price * item.quantity).toFixed(2)}</TableCell>
                                   <TableCell align="center">
                                    <Box  sx={{display: "flex", gap:2}}>
                                        <Box sx={{gap: 0.5}}>
                                    <Button 
                                      variant="outlined"
                                      color="error"
                                      size="small"
                                      onClick={()=> handleAddingtoCart(item.id)}
                                      sx={{mr : 2}}
                                     >
                                        <AddIcon color="primary"></AddIcon>
                                       
                                    </Button>
                                    <Button 
                                      variant="outlined"
                                      color="error"
                                      size="small"
                                      onClick={()=> onRemove(item.id)}
                                     >
                                        <RemoveIcon color="primary"></RemoveIcon>
                                       
                                    </Button>
                                    </Box>
                                    <Button 
                                      sx={{ml: 2}}
                                      variant="outlined"
                                      color="error"
                                      size="small"
                                      onClick={()=> removeFromCartWholeItem(item.id)}
                                     >
                                       Remove Item
                                    </Button>
                                    </Box>
                                   </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                      
                    </Table>
                 </TableContainer>
                 <Typography variant="h6" align="right" sx={{mt:2}}>
                    Total : ${Totalprice.toFixed(2)}
                 </Typography>
                </>
            )
        }
        <Button variant="outlined" component={Link} to='/' >
          
           Close</Button>

       </Container>
    )
}
export default Cart
