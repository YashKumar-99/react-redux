import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import CartItem from './CartSingleItem';
import { clearCart, calculateTotals } from '../Features/cart/cartSlice';


const CartContainer = () => {
    const { cartItems, amount, total } = useSelector((store) => store.cart);
    const Dispatch = useDispatch();
    return (
        <>
            <div className='SingleItemContainer'>
                {
                    cartItems.map((element) => {
                        return (<>
                            <CartItem key={element.id}  {...element} />
                        </>)
                    })
                }
                <div className='TotalContainer'>
                    <div className='cart-total-title'>Cart Total</div>
                    <div className='cart-total-price'>${total.toFixed(2)}</div>
                </div>
                <div className='ClearcartSection'>
                    <button type='button' className='ClearCartbutton' onClick={() => Dispatch(clearCart())}>Clear All</button>
                </div>

            </div>


        </>
    )
}

export default CartContainer;