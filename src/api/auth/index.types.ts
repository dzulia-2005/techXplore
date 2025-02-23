export type LoginPayload = {
    payload : {
        email:string;
        password:string;
    }
}

export type Logoutpayload = {
   payload : {
    refresh: string;
   }
}

export type refreshPayload = {
    payload:{
        refreshToken:string
    }
}