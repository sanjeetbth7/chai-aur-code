import { createContext, useContext } from "react";

// Another way to build and export context api

export const ThemeContext = createContext({
    themeMode : "dark",
    lightTheme: ()=>{},
    darkTheme: ()=>{}
})

export const ThemeContextProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}
