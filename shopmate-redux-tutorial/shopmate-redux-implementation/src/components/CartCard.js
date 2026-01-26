import { removeFromCart } from "../store/cartReducers";
import "./CartCard.css";
import { useDispatch } from "react-redux";
import { incrementClick } from "../store/clickReducer";
export const CartCard = ({ product }) => {
  const { name, price, image } = product;
  const dispatch = useDispatch();
  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button onClick={() => { dispatch(removeFromCart(product)); dispatch(incrementClick()) }}>Remove</button>
    </div>
  )
}
