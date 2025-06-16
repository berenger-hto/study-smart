import type {FlashCardProps} from "../../types/types.ts";
import styles from "../../styles/modules/FlashCard.module.css"
import {useState} from "react";

/**
 * Card component
 */
export function FlashCard({background, data, onClick, notFlipped = false}: FlashCardProps) {

    /**
     * Retourner la carte pour voir la réponse si on clique dessus
     */
    const [flipped, setFlipped] = useState<boolean>(false)
    const handleFlipped = () => {
        /**
         * Exécuter la fonction onClick si existante
         */
        onClick?.()

        /**
         * Vérifier si on doit flipped avant de retourner
         */
        if (!notFlipped)
        setFlipped(prevState => !prevState)
    }

    return <div onClick={handleFlipped} className={`${styles.card} ${styles[background]} ${flipped && !notFlipped ? styles.flipped : ""}`}>
        <div className={`${styles.card_details}`}>
            <p className={styles.card_title}>{data.question}</p>
            {
                !notFlipped &&
                <p className={styles.card_info}>Clique pour voir le résultat</p>
            }
        </div>
        <div className={styles.cardBack}>
            <p>
                {data.answer}
            </p>
        </div>
    </div>
}