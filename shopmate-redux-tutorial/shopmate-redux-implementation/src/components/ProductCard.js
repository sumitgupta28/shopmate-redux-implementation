import "./ProductCard.css";
import { addToCart, removeFromCart } from "../store/cartReducers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { incrementClick } from "../store/clickReducer";

export const ProductCard = ({ product }) => {
  const { name, price, image, id } = product;
  const [isAdded, setIsAdded] = useState(false);
  const cartList = useSelector(state => state.cartState.cartList);

  const dispatch = useDispatch();

  useEffect(() => {
    // Check if the product is already in the cart
    // and update isAdded state accordingly
    const productInCart = cartList.find(item => item.id === id);
    if (productInCart) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartList, id]);

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>

        {isAdded ?
          <button className="remove" onClick={() => { dispatch(removeFromCart(product)); dispatch(incrementClick()) }}>Remove</button>
          :
          <button onClick={() => { dispatch(addToCart(product)); dispatch(incrementClick()) }}>Add To Cart</button>
        }
      </div>
    </div >
  );
};
