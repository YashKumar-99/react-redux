import React from 'react'

import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from 'react-redux';
const Navbar = () => {

    const {amount}=useSelector((store)=>store.cart)

    // console.log(amount)
    return (
        <>
            <div className='Header-section'>

                <div className='Header-title'>React-redux with api</div>
                <div className='cart-name'><AiOutlineShoppingCart /><span className='cart-count'>{amount}</span></div>
            </div>
        </>
    )
}

export default Navbar