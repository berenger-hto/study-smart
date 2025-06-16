import styles from "../../styles/modules/FlashCard.module.css"
import {useDocumentTitle} from "../../hooks/useDocumentTitle.ts";
import {FlashCard} from "./FlashCard.tsx";
import {randomBackground} from "../../utils/backgroundsCard.ts";
import {flashcards} from "../../datas/fakeData.ts";
import {shuffle} from "lodash";

/**
 * FlashCard component
 */
export function FlashCards() {
    useDocumentTitle("StudySmart")
    const modifyFlashCards = shuffle(flashcards)
    return <div className="container">
        <p className="title">Flashcards</p>
        <div className={styles.card_container}>
            {
                modifyFlashCards.map(flashCard => (
                    <FlashCard
                        data={flashCard}
                        background={randomBackground()}
                        key={flashCard.id}
                    />
                ))
            }
        </div>
    </div>
}

