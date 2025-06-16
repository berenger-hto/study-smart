import {useNavigate, useParams} from "react-router";
import styles from "../../styles/modules/FlashCard.module.css";
import {FlashCardForm} from "./FlashCardForm.tsx";
import {flashcards} from "../../datas/fakeData.ts";
import {useDocumentTitle} from "../../hooks/useDocumentTitle.ts";
import {PageError} from "./PageError.tsx";

/**
 * EditFlashCard component
 */
export function EditFlashCard() {
    useDocumentTitle("Modifier la flashcard")
    /**
     * Récupérer les datas de la flashcard
     */
    const params = useParams()
    const id = params.id as string
    const data = flashcards.filter(flashcard => flashcard.id === id)[0]

    /**
     * Naviguez vers /flashcard
     */
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate("../../flashcards")
    }

    return <>
        {
            data ?
            <div className={`container ${styles.editCard}`}>
                <p className="title">Modifier la flashcard</p>
                <button className={styles.returnButton} onClick={handleNavigate}>
                    <i className='bx bx-left-arrow-alt'></i>
                    <span>Retour</span>
                </button>
                <div className={styles.content}>
                    <FlashCardForm data={data} />
                </div>
            </div>
                :
            <PageError />
        }

    </>
}