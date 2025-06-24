import styles from "../../styles/modules/FlashCard.module.css"
import {useDocumentTitle} from "../../hooks/useDocumentTitle.ts";
import {FlashCard} from "./FlashCard.tsx";
import {randomBackground} from "../../utils/backgroundsCard.ts";
import {shuffle} from "lodash";
import {useDatas} from "../../hooks/useDatas.ts";
import {NoFlashCard} from "./NoFlashCard.tsx";
import {useRef} from "react";
import type {FlashCardData} from "../../types/types.ts";

/**
 * FlashCard component
 */
export function FlashCards() {
    useDocumentTitle("StudySmart")
    const {get: getFlashcards, hasFlashcards} = useDatas()

    /**
     * Sauvegarder les flashcards pour que le tableau ne change pas à chaque rendu composant
     */
    const flashCards = useRef<FlashCardData[]>(shuffle(getFlashcards()))

    return <div className="container">
        {hasFlashcards && <p className="title">Flashcards</p>}
        <div className={styles.card_container}>
            {
                hasFlashcards ? flashCards.current.map(flashCard => (
                    <FlashCard
                        data={flashCard}
                        background={randomBackground()}
                        key={flashCard.id}
                    />
                )) : <NoFlashCard />
            }
        </div>
    </div>
}

