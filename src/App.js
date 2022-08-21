
import './App.css';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { calculateTotals, getCartItems } from './Features/cart/cartSlice';
import { useEffect } from 'react';
import EmptyCart from './components/EmptyCart';

function App() {

  const { cartItems, isLoading, amount } = useSelector((store) => store.cart)

  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(calculateTotals());
  }, [cartItems])

  useEffect(() => {
    Dispatch(getCartItems());
  }, [])

  if(isLoading){
    return(<>
          <Navbar />  
          <h2 style={{textAlign:'center',marginTop:'5%'}}>Please wait , data is isLoading...</h2>
    </>)
  }

  return (
    <>
      <Navbar /> 
        {(amount > 0) ? <CartContainer /> : <EmptyCart />}
    </>
  );
}

export default App;
