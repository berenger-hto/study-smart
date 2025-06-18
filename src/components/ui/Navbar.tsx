import styles from "../../styles/modules/Navbar.module.css"
import {useCallback, useEffect, useState} from "react";
import {Search} from "./Search.tsx";
import type {MenuClickHandler} from "../../types/types.ts";
import {NavbarControls} from "./navbar/NavbarControls.tsx";
import {NavbarStart} from "./navbar/NavbarStart.tsx";

/**
 * Navbar component
 */
export function Navbar() {

    /**
     * Responsive menu and navbar links manage
     */
    const [ulActive, setUlActive] = useState<boolean>(false)
    const onMenuClick: MenuClickHandler = useCallback(() => {
        if (window.innerWidth <= 1032) setUlActive(prevState => !prevState)
    }, [])

    /**
     * Search component active state
     */
    const [activeSearch, setActiveSearch] = useState<boolean>(false)

    /**
     * Open and close Search component
     */
    const handleOpenAndClose = () => {
        setActiveSearch(prevState => !prevState)
    }

    useEffect(() => {
        const handleKeyboard = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.altKey && e.code === "KeyF") handleOpenAndClose()
        }

        window.addEventListener("keydown", handleKeyboard)
        return () => window.removeEventListener("keydown", handleKeyboard)
    }, [])

    const navbarProps = {
        ulActive,
        onMenuClick,
        handleOpenAndClose
    }

    return <div className={styles.navbar}>
        {
            activeSearch &&
            <Search handleClose={handleOpenAndClose} />
        }

        <NavbarStart {...navbarProps} />
        <NavbarControls {...navbarProps} />
    </div>
}
