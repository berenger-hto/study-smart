import type {ThemeType} from "../types/types.ts";

/**
 * Renvoie le thème courant de l'app en fonction du thème système utilisé par l'utilisateur
 */
export function getCurrentTheme (): ThemeType {
    const rawTheme = localStorage.getItem("theme")?.toLowerCase()
    const systemTheme: ThemeType = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"

    if (!rawTheme) localStorage.setItem("theme", systemTheme)

    return rawTheme as ThemeType

}