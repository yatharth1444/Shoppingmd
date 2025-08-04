// import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button} from "@mui/material"
//  import RemoveIcon from '@mui/icons-material/Remove';
// import AddIcon from '@mui/icons-material/Add';

// import { Link } from "react-router-dom"
// function Cart({onRemove, cart = [], removeFromCartWholeItem, handleAddingtoCart}) {
//     const safeCart = Array.isArray(cart) ? cart : []
//    const Totalprice = safeCart.reduce((sum, item) => sum = sum + item.price * item.quantity, 0 )

//     return(
//        <Container sx={{marginTop : 10}}>
//         <Typography variant ="h4" gutterBottom>
//             Your cart
//         </Typography>
//         {
//             safeCart.length === 0  ?
//             <Typography variant="h6" > Your cart is empty</Typography>
//             :(
//                 <>
//                  <TableContainer component={Paper}>
//                     <Table aria-label="cart-items">
//                         <TableHead >
//                             <TableRow >
//                                 <TableCell>Books</TableCell>
//                                <TableCell>Author</TableCell>
//                                <TableCell align="center">Quantity</TableCell>
//                                <TableCell align="right" >Price</TableCell>
//                                <TableCell align="right">Subtotal</TableCell>
//                                <TableCell align="center">Remove</TableCell>

//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {safeCart.map((item)=>(
//                                 <TableRow key={item.id}>
//                                    <TableCell component="th" scope="row" >
//                                    <Box sx={{display:"flex", alignItems:"center", gap:2}}>
//                                     <img src={item.imageUrl} alt={item.title} width={50}/>
//                                     <Typography >{item.title}</Typography>
//                                    </Box>
//                                 </TableCell>
//                                 <TableCell >{item.author}</TableCell>
//                                  <TableCell align="center">{item.quantity}</TableCell>
//                                   <TableCell align="right">${item.price.toFixed(2)}</TableCell>
//                                    <TableCell align="right">{(item.price * item.quantity).toFixed(2)}</TableCell>
//                                    <TableCell align="center">
//                                     <Box  sx={{display: "flex", gap:2}}>
//                                         <Box sx={{gap: 0.5}}>
//                                     <Button 
//                                       variant="outlined"
//                                       color="error"
//                                       size="small"
//                                       onClick={()=> handleAddingtoCart(item.id)}
//                                       sx={{mr : 2}}
//                                      >
//                                         <AddIcon color="primary"></AddIcon>
                                       
//                                     </Button>
//                                     <Button 
//                                       variant="outlined"
//                                       color="error"
//                                       size="small"
//                                       onClick={()=> onRemove(item.id)}
//                                      >
//                                         <RemoveIcon color="primary"></RemoveIcon>
                                       
//                                     </Button>
//                                     </Box>
//                                     <Button 
//                                       sx={{ml: 2}}
//                                       variant="outlined"
//                                       color="error"
//                                       size="small"
//                                       onClick={()=> removeFromCartWholeItem(item.id)}
//                                      >
//                                        Remove Item
//                                     </Button>
//                                     </Box>
//                                    </TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
                      
//                     </Table>
//                  </TableContainer>
//                  <Typography variant="h6" align="right" sx={{mt:2}}>
//                     Total : ${Totalprice.toFixed(2)}
//                  </Typography>
//                 </>
//             )
//         }
//         <Button variant="outlined" component={Link} to='/' >
          
//            Close</Button>

//        </Container>
//     )
// }
// export default Cart
import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button, IconButton } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom"

function Cart({onRemove, cart = [], removeFromCartWholeItem, handleAddingtoCart}) {
  const safeCart = Array.isArray(cart) ? cart : [];
  const Totalprice = safeCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <Container sx={{ marginTop: 10 }}>
      <Typography variant="h4" gutterBottom fontWeight={600}>Your cart</Typography>
      {
        safeCart.length === 0 ?
          <Typography variant="h6">Your cart is empty</Typography>
          : (
            <>
              <TableContainer
                component={Paper}
                sx={{
                  borderRadius: 4,
                  boxShadow: '0 12px 32px 0 rgba(80,100,190,0.10)',
                  background: "linear-gradient(to bottom, #f6fbfe 80%, #fff 100%)"
                }}
              >
                <Table aria-label="cart-items">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 700 }}>Books</TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>Author</TableCell>
                      <TableCell align="center" sx={{ fontWeight: 700 }}>Quantity</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 700 }}>Price</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 700 }}>Subtotal</TableCell>
                      <TableCell align="center" sx={{ fontWeight: 700 }}>Remove</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    
                   { safeCart.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell component="th" scope="row">
                          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <img src={item.imageUrl} alt={item.title} width={50} style={{ borderRadius: 8, boxShadow: "0 2px 12px rgba(50,70,120,0.09)" }} />
                            <Typography fontWeight={600}>{item.title}</Typography>
                          </Box>
                        </TableCell>
                        <TableCell>{item.author}</TableCell>
                        <TableCell align="center">
                          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
                            <IconButton
                              size="medium"
                              sx={{
                                bgcolor: "#e3f0fa",
                                color: "#245eaf",
                                borderRadius: '50%',
                                boxShadow: 1,
                                '&:hover': { bgcolor: "#1976d2", color: "#fff" },
                                mx: 1,
                              }}
                               onClick={() => handleAddingtoCart(item.book._id || item.book)}
                            >
                              <AddIcon fontSize="medium" />
                            </IconButton>
                            <Typography fontWeight={600} sx={{ minWidth: 24, textAlign: "center" }}>{item.quantity}</Typography>
                            <IconButton
                              size="medium"
                              sx={{
                                bgcolor: "#fbe9e7",
                                color: "#c62828",
                                borderRadius: '50%',
                                boxShadow: 1,
                                '&:hover': { bgcolor: "#d32f2f", color: "#fff" },
                                mx: 1,
                              }}
                              onClick={() => onRemove(item.id)}
                            >
                              <RemoveIcon fontSize="medium" />
                            </IconButton>
                          </Box>
                        </TableCell>
                        <TableCell align="right">${item.price.toFixed(2)}</TableCell>
                        <TableCell align="right">${(item.price * item.quantity).toFixed(2)}</TableCell>
                        <TableCell align="center">
                          <Button
                            variant="contained"
                            color="error"
                            startIcon={<DeleteOutlineIcon />}
                            sx={{
                              borderRadius: "20px",
                              color: "#fff",
                              px: 2.5,
                              fontWeight: 600,
                              boxShadow: "none",
                              background: "linear-gradient(90deg,#ea5c5a 60%,#fcbb6d 100%)",
                              '&:hover': { background: "linear-gradient(90deg,#c62828 70%,#fcbb6d 100%)" },
                            }}
                            onClick={() => removeFromCartWholeItem(item.id)}
                          >
                            Remove
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Typography variant="h6" align="right" sx={{ mt: 2, fontWeight: 700 }}>
                Total : <span style={{ color: "#1661c9" }}>${Totalprice.toFixed(2)}</span>
              </Typography>
            </>
          )
      }
      <Button
        variant="outlined"
        component={Link}
        to='/'
        sx={{
          mt: 4,
          fontWeight: 500,
          borderRadius: 2,
          px: 3,
          borderColor: "#145a9e",
          color: "#145a9e",
          '&:hover': { bgcolor: "#eef6fe", borderColor: "#1565c0", color: "#1976d2" }
        }}
      >
        CLOSE
      </Button>
    </Container>
  );
}

export default Cart;
