import { useContext,createContext } from "react";

export const ThemeContext=createContext({
    // After comment why still working ???????
    // themeMode:"light",
    // darkMode:()=>{},
    // lightMode:()=>{}
})

export default function  useTheme(){
     return useContext(ThemeContext);
}

export const ThemeProvider=ThemeContext.Provider;