import {useParams} from "react-router";
import styles from "../../styles/modules/FlashCard.module.css";
import {FlashCardForm} from "./FlashCardForm.tsx";
import {useDocumentTitle} from "../../hooks/useDocumentTitle.ts";
import {PageError} from "../PageError.tsx";
import {useDatas} from "../../hooks/useDatas.ts";
import {useNavigateTo} from "../../hooks/useNavigateTo.ts";

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
    const {get: flashcards} = useDatas()
    const data = flashcards().find(flashcard => flashcard.id === id)

    /**
     * Naviguez vers /flashcard
     */
    const {handleNavigate} = useNavigateTo()
    const navigate = () => {
        handleNavigate("../../flashcards")
    }

    return <>
        {
            data ?
            <div className={`container ${styles.editCard}`}>
                <p className="title">Modifier la flashcard</p>
                <button className={styles.returnButton} onClick={navigate}>
                    <i className='bx bx-left-arrow-alt'></i>
                    <span>Retour</span>
                </button>
                <div className={styles.content}>
                    <FlashCardForm action="update" data={data} />
                </div>
            </div>
                :
            <PageError />
        }
    </>
}