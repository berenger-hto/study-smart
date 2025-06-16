import styles from "../../styles/modules/Navbar.module.css";
import {SearchBar} from "./SearchBar.tsx";
import type {SearchProps} from "../../types/types.ts";
import {createPortal} from "react-dom";
import type {ReactPortal} from "react";

/**
 * Search Component
 */
export function Search({handleClose}: SearchProps): ReactPortal {
    const searchContainer = document.querySelector(".search_modal") as HTMLDivElement

    return createPortal(<div className={styles.search_container}>
        <div className={styles.search}></div>
        <SearchBar placeholder="Tapez ici votre recherche" />
        <div className={styles.item_container}>
            <Item />
            <Item />
            <Item />
        </div>
        <button
            onClick={handleClose}
            className={styles.close}
        >
            Fermer
        </button>
    </div>,
        searchContainer)
}

function Item() {
    return <div className={styles.item}>
        <p>Lorem ipsum dolor</p>
    </div>
}