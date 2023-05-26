import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../context/user"
import React from "react"

const ProtectedRoutes = () => {

    const { user } = useContext(UserContext)

    return user ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes