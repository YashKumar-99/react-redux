import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { RemoveItem,Increase ,decrese} from "../Features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartSingleItem = ({ id, title, price, img, amount }) => {

  const Dispatch=useDispatch();
   
  return (



    <div className="ItemContainer">

      <div className="AboutItem">
        <div className="Itemimage"><img src={img} /></div>

        <div className="ItemTitle">{title}</div>
        <div className="Itemprice">${price}</div>


        <button type="button" onClick={()=>Dispatch(RemoveItem(id))}>Remove</button>

      </div>

      <div className="HowmanyItem">
        <div className="UpArrow">
          <IoIosArrowUp onClick={()=>Dispatch(Increase(id))} />
        </div>
        <div>{amount}</div>
        <div className="DownArrow">
          <IoIosArrowDown onClick={()=>
            
            {
              
              if(amount===1){
                Dispatch(RemoveItem(id))
                return;
              }
              Dispatch(decrese(id))

            }
            
            
            }/>
        </div>
      </div>

    </div>

  )
}



export default CartSingleItem;
