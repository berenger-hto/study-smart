import {useDocumentTitle} from "../../hooks/useDocumentTitle.ts";
import {FlashCardForm} from "./FlashCardForm.tsx";

/**
 * CreateFlashCard component
 */
export function CreateFlashCard() {
    useDocumentTitle("Ajouter une flashcard")

    return <div className="container">
        <p className="title">Ajouter une Flashcard</p>
        <FlashCardForm />
    </div>
}
