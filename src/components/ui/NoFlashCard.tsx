import {Link} from "react-router";
import styles from "../../styles/modules/FlashCard.module.css"
import {Button} from "../forms/Button.tsx";
import helloWEBP from "../../assets/emojis/hello.webp"
import helloGIF from "../../assets/emojis/hello.gif"

/**
 * NoFlashCard component
 * Est rendu quand aucune flashcard n'est enrégistrer par l'utilisateur
 */
export function NoFlashCard() {
    return <div className={styles.noFlashCard}>
        <p>Heureux de te voir</p>
        <p>Crée une flashcard pour commencer</p>
        <picture>
            <source srcSet={helloWEBP} type="image/webp"/>
            <img src={helloGIF} alt="👋" width="45" height="45"/>
        </picture>
        <Link to="/create">
            <Button type="button">
                Créer
            </Button>
        </Link>
    </div>
}