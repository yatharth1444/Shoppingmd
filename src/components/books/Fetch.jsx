import {Container, Card, CardMedia, CardContent, Grid, Typography, Button } from '@mui/material'
import  {books} from "./books"
function FetchBooks({onAddToCart}){




    return (
        <div>
            
            <Container maxWidth="lg" sx={{marginTop:10}}>
                <Typography variant='h4' gutterBottom> Book List </Typography>
                <Grid container spacing={3}>
            {
                books?.map((item)=>(
                 <Grid item xs={12} sm={6} md={4} key={item.id} >
                 <Card sx={{maxWidth:250, height:'100%', display:'flex', flexDirection:'column'}}>
                    <CardMedia sx={{height:250, objectFit: 'cover'} }
                      component="img"
                      image={item.imageUrl}
                      alt={item.title}
                    />
                    <CardContent sx={{flexGrow:1}}>
                        <Typography variant='h6' component="div" gutterBottom> 
                              {item.title}
                        </Typography>
                        <Typography variant='subtitle1' color='text.secondary' gutterBottom>
                               {item.author}
                        </Typography>
                        <Typography variant="body2" color='text.secondary'>
                            ${item.price.toFixed(2)}
                        </Typography>
                        <Button variant='contained' color='secondary' sx={{m: 2, mt:'auto'}} onClick={()=> onAddToCart(item.id)}>Add to Cart</Button>
                    </CardContent>
                 </Card>
                 </Grid>
                ))
            }
            
            </Grid>
            </Container>
        </div>
    )
}
export default FetchBooks