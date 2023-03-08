import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const useAuth = () => {
    return useContext(UserContext);
}

export default useAuth;