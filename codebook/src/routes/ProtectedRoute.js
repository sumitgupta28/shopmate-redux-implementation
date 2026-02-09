import { Navigate } from 'react-router-dom'
import { useCart } from '../context'
export const ProtectedRoute = ({ children }) => {
    const { clearCart } = useCart();
    const token = JSON.parse(sessionStorage.getItem("token"))
    // !token && clearCart();
    return token ? children : <Navigate to="/login"></Navigate>
}
