import { Navigate } from "react-router-dom"

const PrivateRoute = ({children}) => {
    const currUser = JSON.parse(localStorage.getItem('currUser'))

    return currUser? children : <Navigate to='/login' replace />
}

export default PrivateRoute;