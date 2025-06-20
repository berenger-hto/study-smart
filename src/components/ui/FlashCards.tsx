import styles from "../../styles/modules/FlashCard.module.css"
import {useDocumentTitle} from "../../hooks/useDocumentTitle.ts";
import {FlashCard} from "./FlashCard.tsx";
import {randomBackground} from "../../utils/backgroundsCard.ts";
import {shuffle} from "lodash";
import {useDatas} from "../../hooks/useDatas.ts";
import {NoFlashCard} from "./NoFlashCard.tsx";

/**
 * FlashCard component
 */
export function FlashCards() {
    useDocumentTitle("StudySmart")
    const {get: getFlashcards} = useDatas()
    const flashCards = shuffle(getFlashcards())
    return <div className="container">
        <p className="title">Flashcards</p>
        <div className={styles.card_container}>
            {
                flashCards.length > 0 ? flashCards.map(flashCard => (
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

