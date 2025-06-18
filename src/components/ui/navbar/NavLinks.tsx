import styles from "../../../styles/modules/Navbar.module.css";
import {NavLink} from "react-router";
import type {NavLinksProps, NavLinksType} from "../../../types/types.ts";
import {useEffect, useRef} from "react";

/**
 * NavLinks component
 * Regroupe les liens cliquables de la Navbar
 */
export function NavLinks({ulActive, onMenuClick}: NavLinksProps) {
    /**
     * Lien de navigation sur la Navbar
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

    /**
     * Gestion d'une partie du menu responsive
     */
    const menuRef = useRef<HTMLUListElement | null>(null)

    useEffect(() => {
        const handleClick: (e: MouseEvent) => void = (e: MouseEvent) => {
            if (window.innerWidth <= 1032 &&
                ulActive &&
                menuRef.current &&
                !menuRef.current.contains(e.target as Node)
            ) onMenuClick()
        }

        window.addEventListener("mousedown", handleClick)
        return () => window.removeEventListener("mousedown", handleClick)
    }, [ulActive, onMenuClick])

    return <ul className={ulActive ? styles.ul_active : ""} ref={menuRef}>
        {
            navLinks.map(navLink => (
                <NavLink
                    className={({isActive}) => isActive ? styles.a_active : ""}
                    to={navLink.routes}
                    key={navLink.link}
                    onClick={onMenuClick}
                >
                    <li>{navLink.link}</li>
                </NavLink>
            ))
        }
    </ul>
}