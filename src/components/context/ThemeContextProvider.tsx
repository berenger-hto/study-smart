import type {ThemeContextProviderProps, ThemeType} from "../../types/types.ts";
import {useEffect, useState} from "react";
import {ThemeContext} from "../../hooks/useTheme.ts";
import {getCurrentTheme} from "../../functions/getCurrentTheme.ts";
/**
 * ThemeContextProvider component
 * Utiliser pour introduire le thème
 */
export function ThemeContextProvider({children}: ThemeContextProviderProps) {
    const [theme, setTheme] = useState<ThemeType>(getCurrentTheme())
    const toggleTheme = () => {
        setTheme(prevState => prevState === "dark" ? "light" : "dark")
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme]);

    return <ThemeContext.Provider value={{
        theme: theme,
        toggleTheme
    }}>
        {children}
    </ThemeContext.Provider>
}