import styles from "../../../styles/modules/Navbar.module.css";
import {Logo} from "../Logo.tsx";
import {NavLinks} from "./NavLinks.tsx";
import type {NavbarStartProps} from "../../../types/types.ts";

/**
 * NavbarStart component
 * Côté gauche de la Navbar
 */
export function NavbarStart({ulActive, onMenuClick}: NavbarStartProps) {
    return <div className={styles.col}>
        <div className={styles.logo}>
            <Logo width="20" height="20" />
            <p>StudySmart</p>
        </div>
        <NavLinks
            ulActive={ulActive}
            onMenuClick={onMenuClick}
        />
    </div>
}