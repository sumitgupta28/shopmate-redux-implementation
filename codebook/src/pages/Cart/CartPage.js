import { useTitle } from "../../hook/useTitle"
import { CartEmpty } from "./components/CartEmpty"
import { CartList } from './components/CartList'
import { useCart } from '../../context'

export const CartPage = () => {
  useTitle('Books Cart')
  const { cartList, total } = useCart();
  console.log('CartPage ', cartList.length)
  return (
    <main>
      {cartList.length ? <CartList cartList={cartList} total={total} /> : <CartEmpty />}
    </main>
  )
}