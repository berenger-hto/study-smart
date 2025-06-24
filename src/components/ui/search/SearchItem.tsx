import styles from "../../../styles/modules/Navbar.module.css";
import type {SearchItemProps} from "../../../types/types.ts";
import {useLocation} from "react-router";
import {useNavigateTo} from "../../../hooks/useNavigateTo.ts";

/**
 * Search item component
 */
export function SearchItem({data, handleClose}: SearchItemProps) {
    const currentLocation = useLocation()
    const {handleNavigate: navigateTo} = useNavigateTo()

    /**
     * Naviguez vers la flashcard quand on clique dessus
     */
    const handleNavigate = () => {
        handleClose()
        if (currentLocation.pathname === "/") {
            location.href = `#${data.id}`
            return
        }

        navigateTo(`flashcards/card/${data.id}`)
    }

    return <div className={styles.item} onClick={handleNavigate}>
        <p>{data.question}</p>
    </div>
}