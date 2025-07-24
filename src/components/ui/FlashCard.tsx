import type {FlashCardProps} from "../../types/types.ts";
import styles from "../../styles/modules/FlashCard.module.css"
import {useState} from "react";
import {Button} from "../forms/Button.tsx";
import {useDatas} from "../../hooks/useDatas.ts";
import * as React from "react";

/**
 * Card component
 */
export function FlashCard({data, onClick, notFlipped = false, flashCardId = null}: FlashCardProps) {

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

    /**
     * Remove flashcard function
     */
    const {remove: removeCard} = useDatas()
    const handleDeleteCard = (e: React.MouseEvent) => {
        e.stopPropagation()
        removeCard(flashCardId!)
    }

    return <div id={data.id} onClick={handleFlipped} className={`${styles.card} ${flipped && !notFlipped ? styles.flipped : ""}`}>
        {(notFlipped && flashCardId) && <Button action="delete" onClick={handleDeleteCard}>Supprimer</Button>}
        <div className={`${styles.card_details}`}>
            <p className={styles.card_title}>{data.question}</p>
            {
                !notFlipped ?
                <p className={styles.card_info}>Clique pour voir le résultat</p>
                :
                <p className={styles.card_info}>Clique pour modifier</p>

            }
        </div>
        <div className={styles.cardBack}>
            <p>
                {data.answer}
            </p>
        </div>
    </div>
}