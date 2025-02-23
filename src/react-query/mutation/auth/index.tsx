import {useMutation} from "@tanstack/react-query";
import { Login, LogOut, Refresh } from "../../../api/auth";

export const useSignIn = () => {
    return useMutation({
        mutationKey:["sign-in"],
        mutationFn:Login
    })
} 

export const useRefresh = () => {
    return useMutation({
        mutationKey:["refresh"],
        mutationFn:Refresh
    })
}

export const useLogOut = () => {
    return useMutation({
        mutationKey:["log-out"],
        mutationFn:LogOut
    })
}

