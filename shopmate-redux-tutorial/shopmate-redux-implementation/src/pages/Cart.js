import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { incrementClick } from "../store/clickReducer";
import { clearCart } from "../store/cartReducers";
import { useState } from "react";
export const Cart = () => {
  useTitle("Cart");

  const [clearAllEnabled, setClearAllEnabled] = useState(true);

  const products = useSelector((state) => state.cartState.cartList);
  const total = useSelector((state) => state.cartState.total);
  const dispatch = useDispatch();

  products.length === 0 && clearAllEnabled && setClearAllEnabled(false);
  products.length > 0 && !clearAllEnabled && setClearAllEnabled(true);

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {products.length} / Total: ${total}</h1>

        {clearAllEnabled ? <button className="remove-all-button" onClick={() => { dispatch(incrementClick()); dispatch(clearCart()) }}>Clear Cart</button> : null}

        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}
