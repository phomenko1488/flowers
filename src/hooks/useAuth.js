import {AuthContext} from "../services/AuthContext";
import {useContext} from "react";

export function useAuth() {
    return useContext(AuthContext)
}