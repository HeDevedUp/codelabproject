import React, { createContext } from "react";
import { useNotifications } from "../../hooks/app-hooks/useNotification";
import { UseMutationResult, useMutation } from "react-query";
import { login, register } from "../call-service/auth";
import { Alert } from "react-native";
import { storeAppData } from "../../globals/helper_functions/storingAppData";
import { LoginData, RegisterData } from "../../globals/types";

interface ApiContextType {
  useLogin: () => UseMutationResult<any, unknown, LoginData>;
  useRegister: () => UseMutationResult<any, unknown, RegisterData>;
  logout: () => void;
}

const ApiContext = createContext<ApiContextType>({
  useLogin: () => ({} as UseMutationResult<any, unknown, LoginData>),
  useRegister: () => ({} as UseMutationResult<any, unknown, RegisterData>),
  logout: () => {},
});

export const ApiProvider: React.FC<{
  children: React.ReactNode;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ children, setIsAuthenticated }) => {
  const { showNotification } = useNotifications();

  function useLogin(): UseMutationResult<any, unknown, LoginData> {
    return useMutation<any, unknown, LoginData>(
      ["login"],
      (data: LoginData) => login(data.username, data.password),
      {
        onSuccess: (res) => {
          showNotification({
            title: "Success",
            type: 1,
            message: res.message,
          });
          storeAppData({
            item: "token",
            value: res.token,
          });
          storeAppData({
            item: "data",
            value: res,
          });

          setIsAuthenticated(true);
        },
        onError: (error: any) => {
          console.log("error", error);
          showNotification({
            title: "Error",
            type: 0,
            message: error.response.message,
          });
          console.error(error);
        },
      }
    );
  }

  function logout(): void {
    // Clear the stored token and data
    storeAppData({ item: "token", value: null });
    storeAppData({ item: "data", value: null });

    // Set the authentication state to false
    setIsAuthenticated(false);
  }

  function useRegister(): UseMutationResult<any, unknown, RegisterData> {
    return useMutation<any, unknown, RegisterData>(
      ["register"],
      (data: RegisterData) =>
        register(
          data.email,
          data.password,
          data.full_name,
          data.phone_number,
          data.education_level,
          data.profession
        ),
      {
        onSuccess: (res) => {
          showNotification({
            title: "Success",
            type: 1,
            message: res.data.message,
          });
          setTimeout(() => {
            storeAppData({
              item: "token",
              value: res.data.tokens,
            });
          }, 1000);
          setIsAuthenticated(true);
        },
        onError: (error: any) => {
          console.log("error", error);
          showNotification({
            title: "Error",
            type: 0,
            message: error.response.data.message,
          });
          console.error(error);
        },
      }
    );
  }

  const callActions: ApiContextType = {
    useLogin,
    useRegister,
    logout,
  };

  return (
    <ApiContext.Provider value={callActions}>{children}</ApiContext.Provider>
  );
};

export default ApiContext;
