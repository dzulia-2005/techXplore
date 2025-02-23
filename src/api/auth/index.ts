import { httpClient } from "..";
import { AUTH_ENDPOINT } from "./index.enum";
import { LoginPayload, Logoutpayload, refreshPayload, } from "./index.types";

export const Login = ({ payload }: LoginPayload) => {
    return httpClient
        .post(AUTH_ENDPOINT.SIGN_IN, payload)
        .then((res) => {
            const refresh = res?.data?.refresh;
            const access = res?.data?.access;

            if (!refresh || !access) {
                console.error("Tokens not found");
                return;
            }

            localStorage.setItem("refreshToken",refresh);
            localStorage.setItem("accessToken",access);

            if (access && refresh) {
                console.log("Access Token:", access);
                console.log("Refresh Token:", refresh);
            } else {
                console.error("Tokens not found in localStorage");
            }

            console.log("dataIs : ",res.data);
            return res.data;
           
        })
        .catch((error) => {
            console.error("Login Error:", error);
            throw error;
        });
};


export const LogOut = ({payload}:Logoutpayload) => {
    const refreshToken = localStorage.getItem("refreshToken");
    return httpClient
        .post(
            AUTH_ENDPOINT.LOG_OUT,
            payload,
            {
                headers : {
                    "X-Refresh-Token":refreshToken
                }
            }
        )
        .then((res)=>res.data)
}

export const Refresh = ({payload}:refreshPayload) => {
    return httpClient
        .post(AUTH_ENDPOINT.REFRESH,payload)
        .then((res)=>res.data)
}


