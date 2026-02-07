import { useTitle } from "../../hook/useTitle"
import { OrderSuccess } from "./components/OrderSuccess";
import { OrderFail } from "./components/OrderFail";
import { useLocation } from "react-router-dom";

export const OrderPage = () => {

  const { state } = useLocation();
  console.log('Order Page ', state.orderStatus)
  useTitle('Order Page ')
  return (
    <main>
      {state.orderStatus ? <OrderSuccess data={state.data} /> : <OrderFail />}
    </main>
  )
}
