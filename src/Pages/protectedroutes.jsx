import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../context/user"

const ProtectedRoutes = () => {

    const { user } = useContext(UserContext)
    const booleanUser = Boolean(user)
    console.log(booleanUser)

    
    return user ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes