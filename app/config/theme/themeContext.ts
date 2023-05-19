import { createContext } from "react";

type Theme = {
  primary: string;
  facebook:string,
  secondary: string;
  light_blue: string;
  white: string;
  accent: string;
  background: string;
  text: string;
  grayText: string;
  disabled: string;
  success: string;
  warning: string;
  error: string;
  placeholder: string,
  gray:string,
  app_base:string,
  button:string
};

const themeContext = createContext<Theme>({
  primary: "",
  facebook:"",
  secondary: "",
  white: "",
  light_blue: "",
  accent: "",
  background: "",
  text: "",
  grayText: "",
  disabled: "",
  success: "",
  warning: "",
  error: "",
  placeholder: "",
  gray:"",
  app_base:"",
  button:""
});

export default themeContext;
