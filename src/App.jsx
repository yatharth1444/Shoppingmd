import FetchBooks from "./components/books/Fetch"
import {Route, Routes, useNavigate, Link, useRoutes} from "react-router-dom"
import Home from "./pages/Home/Home"
import AboutFunction from "./pages/About/about"
import Contact from "./pages/Contact/Contact"
import Navbar from "./components/NavBar/Navbar"
import { books } from "./components/books/books"
import { useState } from "react"
import Cart from "./components/Cart/Cart"
function App() {
  const [cart, setCart] = useState([]) 
  function handleAddingtoCart(bookID){
    const bookToAdd = books.find((book)=> book.id === bookID)
    if (!bookToAdd) return 
    
    setCart((prev)=>{
      const existingItem = prev.find((item)=> item.id === bookID)
      if(existingItem){
        return prev.map((item) => 
        item.id === bookID
        ?{...item, quantity: item.quantity + 1 }
        :item
      )
       
      }
      else{
        return [...prev, {...bookToAdd, quantity: 1}] 

      }
    }
    )
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
     <Route path="/" element={<FetchBooks onAddToCart={handleAddingtoCart}/>}></Route>
      <Route path="/cart" element={<Cart onRemove ={removeFromCart} cart={cart} removeFromCartWholeItem={removeFromCartWholeItem} handleAddingtoCart={handleAddingtoCart}/>} ></Route>
     </Routes>
     
    </>
  )
}

export default App
