import {createContext, useContext} from "react";
import type {ThemeContextType} from "../types/types.ts";
import {getCurrentTheme} from "../utils/getCurrentTheme.ts";

export const ThemeContext = createContext<ThemeContextType>({
    theme: getCurrentTheme(),
    toggleTheme: () => {}
})

/**
 * Hook pour récupérer le theme et switcher le theme
 */
export function useTheme(): ThemeContextType {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return {
        theme,
        toggleTheme
    }
}

