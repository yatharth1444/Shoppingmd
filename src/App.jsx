import FetchBooks from "./components/books/Fetch"
import {Route, Routes, useNavigate, Link, useRoutes} from "react-router-dom"
import Home from "./pages/Home/Home"
import AboutFunction from "./pages/About/about"
import Contact from "./pages/Contact/Contact"
import Navbar from "./components/NavBar/Navbar"
import { useState, useEffect } from "react"
import Cart from "./components/Cart/Cart"
import DialogBox from "./components/DialogBox/DialogBox"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"

function App() {
  const [cart, setCart] = useState([]) 
  const [isDialogOpen, setIsDialogopen] = useState(false)
  const [selectedBook, setSelectedBook] = useState(null);
  const [books, setBooks] = useState([])
     useEffect(()=>{
         const fetchBooks = async() =>{
        try {
            const response = await fetch('http://localhost:5000/api/forBooks/Allbooks')
           
            const data = await response.json()
            console.log("Fetched Data", data);
            
            setBooks(data.data)
        } catch (error) {
            console.error(`Failed to fetch books`, error)
        }}
        fetchBooks()
     },[])
  function handleClose(){
    setIsDialogopen(false)
    setSelectedBook(null)
    // navigate('/')
  }
  function handleOpenDialogBox(){
      setIsDialogopen(true)
  }
  function setSelectedBookItem(bookID){
     const book = books.find((item)=> item._id === bookID)
     setSelectedBook(book || null)
  }
 async function handleAddingtoCart(bookID, quantity= 1){
    const token = localStorage.getItem('token')
    
    
    if(!token){
      alert ('Please Login to Add to Cart')
      return 
    }
    try {
      const response = await fetch('http://localhost:5000/api/cart/addItemToCart',{
      method: "POST",
      headers: {
        "content-type" : "application/json",
         Authorization : `Bearer ${token}`     
      },
      body: JSON.stringify({book: bookID, quantity }),
    })
    const data = await response.json()
    if(response.ok){
        setCart(data.cart.items.map((item)=>({
          _id: item.book._id,
          title: item.book.title,
          author: item.book.author,
          price: item.book.price,
          description: item.book.description,
          imageUrl : item.book.image,
          quantity: item.quantity,
        })))
    }else{
      alert(data.msg || 'Failed to add item to cart')
    }
    } catch (error) {
      console.error('add to cart failed: ', error);
      alert('network error please try again')
      
    }
    console.log(cart);
    
    // const bookToAdd = books.find((book)=> book.id === bookID)
    // if (!bookToAdd) return 
    
    // setCart((prev)=>{
    //   const existingItem = prev.find((item)=> item.id === bookID)
    //   if(existingItem){
    //     return prev.map((item) => 
    //     item.id === bookID
    //     ?{...item, quantity: item.quantity + 1 }
    //     :item
    //   )
       
    //   }
    //   else{
    //     return [...prev, {...bookToAdd, quantity: 1}] 

    //   }
    // }
    // )
  }
  function removeFromCart (bookID){
      setCart((prev)=>
      prev
      .map(item => item.id === bookID ?
        {...item, quantity : item.quantity - 1}
        :item 
      )
      .filter(item => item.quantity > 0 )
    )
  }
  function removeFromCartWholeItem(bookID){
    setCart((prev)=>
    prev.filter((item)=> item.id !== bookID
  ))
  }

 
  const CartCountValue = cart.reduce((sum, item) => sum = sum + item.quantity , 0 )
  return (
    <>
    <Navbar  cartTotal={CartCountValue}/>
     <Routes >
     <Route  path="/home" element={<Home />}></Route>
     <Route  path="/about" element={<AboutFunction />}></Route>
     <Route path="/contacts" element={<Contact />}></Route>
     <Route path="/" element={<FetchBooks  books={books} setSelectedBookItem={setSelectedBookItem} handleOpenDialogBox={handleOpenDialogBox} onAddToCart={handleAddingtoCart}/>}></Route>
     <Route path="/cart" element={<Cart onRemove ={removeFromCart} cart={cart} removeFromCartWholeItem={removeFromCartWholeItem} handleAddingtoCart={handleAddingtoCart}/>} ></Route>
     <Route path="/login" element={<Login ></Login>}></Route>
     <Route path="/register" element={<Register></Register>}></Route>
      {/* <Route path="/DialogBox" element={<DialogBox isDialogOpen={isDialogOpen} selectedBook={selectedBook} handleAddingtoCart={handleAddingtoCart} handleClose={handleClose}/>}></Route> */}
     </Routes>

     <DialogBox 
       isDialogOpen={isDialogOpen} 
       selectedBook={selectedBook} 
       handleAddingtoCart={handleAddingtoCart} 
       handleClose={handleClose}
     />
     
    </>
  )
}

export default App
