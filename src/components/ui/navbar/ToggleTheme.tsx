import styles from "../../../styles/modules/Navbar.module.css";
import {useTheme} from "../../../hooks/useTheme.ts";
import {useEffect} from "react";

/**
 * Switcher le thème de l'app
 */
export function ToggleTheme() {
    const {theme, toggleTheme} = useTheme()
    /**
     * Ajouter la classe dark au body quand on passe en dark mode
     */
    useEffect(() => {
        const body = document.body

        if (theme === "dark") body.classList.add("dark")
        else body.classList.remove("dark")

        return () => body.classList.remove("dark")
    }, [theme]);

    return <div className={styles.icon} aria-label="Toggle theme" onClick={toggleTheme}>
        <i className={`bx ${theme === "light" ? "bx-sun" : "bx-moon"}`}></i>
    </div>
}