import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png"
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { incrementClick } from "../store/clickReducer";

export const Header = () => {
  const products = useSelector((state) => state.cartState.cartList);
  const total = useSelector((state) => state.cartState.total);
  const dispatch = useDispatch();
  return (
    <header>
      <Link to="/" className="logo" onClick={() => dispatch(incrementClick())}>
        <img src={Logo} alt="Shopmate Logo" />
        <span>Redux Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" onClick={() => dispatch(incrementClick())} end>Home</NavLink>
        <NavLink to="/cart" className="link" onClick={() => dispatch(incrementClick())}>Cart</NavLink>
      </nav>
      <Link to="/cart" className="items" onClick={() => dispatch(incrementClick())}>
        <span>Cart: {products.length} / Total: ${total}</span>
      </Link>
      <span>Click Count : {useSelector((state) => state.clickState.clickCount)}</span>
    </header>
  )
}
