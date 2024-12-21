import React, { useContext } from 'react'
import { BsCart } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from '../Features/ContextProvider'


const Navbar = () =>
 {

  const {cart} = useContext(CartContext)
  return (
    <div className='d-flex justify-content-between py-2 px-3'>
  
       <Link to ="/"  >Shop</Link>
       <Link to ="/cart" ><BsCart/>{cart.length}</Link>
    </div>
  )
}

export default Navbar;
