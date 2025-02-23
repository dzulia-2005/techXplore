import { setAuthorazationHeader } from "../../../../../api";

export const signInSuccess = ({
    accessToken,
    refreshToken
}: {
    accessToken:string;
    refreshToken:string;
}) => {
    localStorage.setItem("accessToken",accessToken);
    localStorage.setItem("refreshToken",refreshToken);

    setAuthorazationHeader(`Bearer ${accessToken}`);
}