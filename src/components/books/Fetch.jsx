import {Container, Card, CardMedia, CardContent, Grid, Typography, Button, CardActionArea } from '@mui/material'
function FetchBooks({books, onAddToCart, handleOpenDialogBox, setSelectedBookItem}){

    
 return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom fontWeight={700} letterSpacing="0.02em">
        Book List
      </Typography>
      <Grid container spacing={4}>
        {Array.isArray(books) && books.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item._id}>
            <Card
              sx={{
                maxWidth: 280,
                width: 280,     
                minWidth: 280, 
                height: '420px',        
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                boxShadow: '0 8px 16px rgba(0,0,0,0.12)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 16px 24px rgba(0,0,0,0.2)'
                }
              }}
            >
              <CardActionArea
                onClick={() => {
                  setSelectedBookItem(item._id);
                  handleOpenDialogBox();
                }}
                sx={{ flexGrow: 1 }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    height: 270,        
                    objectFit: 'cover',
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                />
                <CardContent sx={{ flexGrow: 1, px: 2, pt: 1 }}>
                  <Typography variant="h6" component="div" fontWeight={600} gutterBottom noWrap>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom noWrap>
                    {item.author}
                  </Typography>
                  <Typography variant="body1" color="text.primary" fontWeight={700}>
                    ${item.price.toFixed(2)}
                  </Typography>
                </CardContent>
              </CardActionArea>

              <Button
                variant="contained"
                color="secondary"
                sx={{
                  m: 2,
                  mt: 'auto',
                  py: 1.1,
                  fontWeight: 600,
                  borderRadius: 2,
                  textTransform: 'none',
                  boxShadow: '0 4px 8px rgba(75,108,183,0.4)',
                  transition: 'background-color 0.3s ease, transform 0.2s ease',
                  '&:hover': {
                    backgroundColor: '#145a9e',
                    transform: 'scale(1.05)',
                    boxShadow: '0 6px 12px rgba(35,50,90,0.5)',
                  },
                }}
                onClick={() => onAddToCart(item._id)}
              >
                Add to Cart
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
export default FetchBooks