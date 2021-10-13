import { createContext } from "react"
import { AuthContext } from "../context/authProvider"

const useAuth = () => {
    return createContext(AuthContext);
}

export default useAuth;