import { useNavigate } from "react-router-dom";
import { useRefresh } from "../react-query/mutation/auth";
import { useEffect } from "react";
import { signInSuccess } from "../pages/signIn/components/logInCard/utils";
import { httpClient } from "../api";
import { queryClient } from "../main";

export const useHttpInterceptor = () => {
    const navigate = useNavigate();
    const { mutate: handleRefresh } = useRefresh();

    useEffect(() => {
        const interceptor = httpClient.interceptors.response.use(
            (res) => res,
            (error) => {
                const refreshToken = localStorage.getItem("refreshToken");

                if (error.response?.status === 401 && refreshToken) {
                    return new Promise((resolve, reject) => {
                        handleRefresh(
                            { payload: { refreshToken } },
                            {
                                onSuccess: (res) => {
                                    signInSuccess({
                                        accessToken: res.accessToken,
                                        refreshToken: res.refreshToken,
                                    });

                                    error.config.headers["Authorization"] = `Bearer ${res.accessToken}`;
                                    resolve(httpClient(error.config));
                                },
                                onError: () => {
                                    // Refresh Token ვერ იმუშავა → ლოგაუტი
                                    localStorage.removeItem("refreshToken");
                                    localStorage.removeItem("accessToken");
                                    queryClient.clear();
                                    navigate("/");
                                    reject(error);
                                },
                            }
                        );
                    });
                }

                if (error.response?.status) {
                    navigate("/");
                }

                
                return Promise.reject(error);
            }
        );

        
        return () => {
            httpClient.interceptors.response.eject(interceptor);
        };
    }, [handleRefresh, navigate]);
};
