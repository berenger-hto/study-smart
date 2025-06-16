import {Logo} from "./Logo.tsx";
import img from "../../assets/images/profil.png"
import styles from "../../styles/modules/Navbar.module.css"
import {useCallback, useEffect, useRef, useState} from "react";
import {SearchBar} from "./SearchBar.tsx";
import {Search} from "./Search.tsx";
import type {MenuClickHandler, NavLinksType} from "../../types/types.ts";
import {NavLink} from "react-router";
export function Navbar() {

    /**
     * Responsive menu and nav links manage
     */
    const navLinks: NavLinksType[] = [
        {
            link: "Accueil",
            routes: ""
        },
        {
            link: "Créer",
            routes: "/create"
        },
        {
            link: "Flashcards",
            routes: "/flashcards"
        }
    ]
    const [ulActive, setUlActive] = useState<boolean>(false)
    const onMenuClick: MenuClickHandler = useCallback(() => {
        if (window.innerWidth <= 960) setUlActive(prevState => !prevState)
    }, [])

    const menuRef = useRef<HTMLUListElement | null>(null)

    useEffect(() => {
        const handleClick: (e: MouseEvent) => void = (e: MouseEvent) => {
            if (window.innerWidth <= 960 &&
                ulActive &&
                menuRef.current &&
                !menuRef.current.contains(e.target as Node)
            ) onMenuClick()
        }

        window.addEventListener("mousedown", handleClick)
        return () => window.removeEventListener("mousedown", handleClick)
    }, [ulActive, onMenuClick])

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

    return <div className={styles.navbar}>
        {
            activeSearch &&
            <Search handleClose={handleOpenAndClose} />
        }

        <div className={styles.col}>
            <div className={styles.logo}>
                <Logo width="20" height="20" />
                <p>StudySmart</p>
            </div>
            <ul className={ulActive ? styles.ul_active : ""} ref={menuRef}>
                {
                    navLinks.map((navLink, index) => (
                        <NavLink
                            className={({isActive}) => isActive ? styles.a_active : ""}
                            to={navLink.routes}
                            key={index}
                            onClick={onMenuClick}
                        >
                            <li>{navLink.link}</li>
                        </NavLink>
                    ))
                }
            </ul>
        </div>

        <div className={styles.col}>
            <SearchBar onClick={handleOpenAndClose} />
            <div className={styles.icon} aria-label="Search" onClick={handleOpenAndClose} style={{display: "none"}}>
                <i className="bx bx-search"></i>
            </div>
            <div className={styles.icon} aria-label="Notifications">
                <span>9+</span>
                <i className="bx bx-bell"></i>
            </div>
            <div className={styles.icon} aria-label="Menu" onClick={onMenuClick} style={{display: "none"}}>
                <i className="bx bx-menu"></i>
            </div>
            <div className={styles.profil}>
                <img src={img} alt="profil" />
            </div>
        </div>
    </div>
}
