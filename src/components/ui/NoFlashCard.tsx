import {Link} from "react-router";
import styles from "../../styles/modules/FlashCard.module.css"
import {Button} from "../forms/Button.tsx";

export function NoFlashCard() {
    return <div className={styles.noFlashCard}>
        <p>Aucune flashcard</p>
        <Link to="/create">
            <Button type="button">
                Créer
            </Button>
        </Link>
    </div>
}