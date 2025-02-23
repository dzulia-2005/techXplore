import { httpClient } from ".."
import { ASSISTANT_ENDPOINT } from "./index.enum"
import { assistantPayload } from "./index.types"

export const acceptTerm = () => {
    const accessToken = localStorage.getItem("accessToken");
    console.log("AccessToken in acceptTerm:", accessToken); 
  
    return httpClient.post(
      ASSISTANT_ENDPOINT.ACCEPTERM,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => {
      console.error("AcceptTerm Error:", err.response?.data);
    });
  };



export const assistant = ({payload}:assistantPayload) => {
    const accessToken = localStorage.getItem("accessToken");

    return httpClient
        .post(
          ASSISTANT_ENDPOINT.ASSISTANT,
          payload,
          {
            headers : {
              Authorization: `Bearer ${accessToken}`,
            }
          }
        )
        .then((res)=>res.data)
        .catch((err)=>{
          console.error("რარაარარრა",err.response?.data);
        })
};