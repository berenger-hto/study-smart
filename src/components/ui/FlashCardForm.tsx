import type {FlashCardData, FlashCardFormProps} from "../../types/types.ts";
import {type ChangeEvent, type FormEventHandler, type SyntheticEvent, useState} from "react";
import styles from "../../styles/modules/FlashCard.module.css"
import {Input} from "../forms/Input.tsx";
import {Textarea} from "../forms/Textarea.tsx";
import {Button} from "../forms/Button.tsx";
import {FlashCard} from "./FlashCard.tsx";
import {uniqueRandomBackground} from "../../utils/backgroundsCard.ts";

/**
 * FlashCardForm component
 * Formulaire pour ajouter ou modifier des flashcards
 */
export function FlashCardForm({data}: FlashCardFormProps) {

    /**
     * Gérer la data passée en param
     * Et modifier en temps réel les données de la carte
     */
    const dataAssign: FlashCardData = data ? data : {
        id: "",
        question: "",
        answer: ""
    }

    const [dataState, setDataState] = useState<FlashCardData>(dataAssign)
    const handleModifyQuestion = (e:ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        setDataState(prevState => ({...prevState, question: value}))
    }

    const handleModifyAnswer = (e:ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.currentTarget.value
        setDataState(prevState => ({...prevState, answer: value}))
    }

    /**
     * Visualiser la Flashcard component
     */
    const [visualize, setVisualize] = useState<boolean>(false)
    const handleVisualize = () => setVisualize(!visualize)

    /**
     * Submit handler
     */
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e: SyntheticEvent) => {
        e.preventDefault()
        console.log("Submitted")
    }

    return <>
        {
            visualize && <div className={styles.card_container}>
                <FlashCard background={uniqueRandomBackground} data={dataState} />
            </div>
        }
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input
                type="text"
                label="Question"
                placeholder="Quelle est votre question"
                value={dataState.question}
                onChange={handleModifyQuestion}
            />
            <Textarea
                label="Réponse"
                placeholder="La réponse à votre question"
                value={dataState.answer}
                onChange={handleModifyAnswer}
            />
            <div className={styles.btn_container}>
                <Button type="submit">Sauvegarder</Button>
                <Button
                    type="button"
                    onClick={handleVisualize}
                >
                    {!visualize ? "Visualiser" : "Masquer"}
                </Button>
            </div>
        </form>
    </>
}