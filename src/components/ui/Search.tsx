import styles from "../../styles/modules/Navbar.module.css";
import {SearchBar} from "./search/SearchBar.tsx";
import type {SearchProps} from "../../types/types.ts";
import {createPortal} from "react-dom";
import type {ReactPortal} from "react";
import {SearchItem} from "./search/SearchItem.tsx";
import {useSearch} from "../../hooks/useSearch.ts";

/**
 * Search Component
 */
export function Search({handleClose}: SearchProps): ReactPortal {
    const searchContainer = document.querySelector(".search_modal") as HTMLDivElement

    /**
     * Récupérer les résultats de recherche
     */
    const {result} = useSearch()

    return createPortal(<div className={styles.search_container}>
        <div className={styles.search}></div>
        <SearchBar placeholder="Tapez ici votre recherche" />
        <div className={styles.item_container}>
            {
                result && result.map(data => (
                    <SearchItem
                        key={data.id}
                        data={data}
                        handleClose={handleClose}
                    />
                ))
            }
        </div>
        <button
            onClick={handleClose}
            className={styles.close}
        >
            Fermer
        </button>
    </div>, searchContainer)
}

