import { useContext } from "react"
import { AuthContext } from "../context/provider";

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
}