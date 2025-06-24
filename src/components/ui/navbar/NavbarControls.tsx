import styles from "../../../styles/modules/Navbar.module.css";
import {SearchBar} from "../search/SearchBar.tsx";
import {ToggleTheme} from "./ToggleTheme.tsx";
import img from "../../../assets/images/profil.png";
import type {NavbarControlsProps} from "../../../types/types.ts";

/**
 * NavbarControls components
 * Côté droit de la Navbar
 */
export function NavbarControls({handleOpenAndClose, onMenuClick}: NavbarControlsProps) {
    return <div className={styles.col}>
        <SearchBar onClick={handleOpenAndClose} />
        <ToggleTheme />
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
}