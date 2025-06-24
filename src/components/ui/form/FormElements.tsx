import styles from "../../../styles/modules/FlashCard.module.css";
import {Input} from "../../forms/Input.tsx";
import {Textarea} from "../../forms/Textarea.tsx";
import {Button} from "../../forms/Button.tsx";
import type {FormElementsProps} from "../../../types/types.ts";
import {type FormEventHandler, type SyntheticEvent, useState} from "react";
import {useDatas} from "../../../hooks/useDatas.ts";
import {useParams} from "react-router";

/**
 * FormElements Component
 */
export function FormElements(
    {
        handleVisualize,
        dataState,
        handleModifyAnswer,
        handleModifyQuestion,
        visualize,
        action
    }: FormElementsProps
) {

    /**
     * Id de la flashcard à modifier
     */
    const params = useParams()
    const id = params.id ?? undefined

    /**
     * Disabled button
     */
    const [disabled, setDisabled] = useState(false)

    /**
     * Récupérer les fonctions necessaires à la modification de data
     */
    const {save: saveData, remove: removeData} = useDatas(setDisabled)

    /**
     * Submit handler
     */
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e: SyntheticEvent) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget as HTMLFormElement)
        const question = data.get("question")?.toString()
        const answer = data.get("answer")?.toString()
        saveData(action, question, answer, id)
    }

    const removeFlashCard = () => {
        console.log("remove")
        removeData(id)
    }

    return <>
        <form autoComplete="off" className={styles.form} onSubmit={handleSubmit}>
            <Input
                type="text"
                label="Question"
                placeholder="Quelle est votre question"
                name="question"
                value={dataState.question}
                onChange={handleModifyQuestion}
            />
            <Textarea
                label="Réponse"
                placeholder="La réponse à votre question"
                name="answer"
                value={dataState.answer}
                onChange={handleModifyAnswer}
            />
            <div className={styles.btn_container}>
                <Button type="submit" disabled={disabled}>
                    Sauvegarder
                </Button>
                <Button type="button" onClick={handleVisualize}>
                    {!visualize ? "Visualiser" : "Masquer"}
                </Button>
                {
                    id && <Button
                        type="button"
                        action="delete"
                        onClick={removeFlashCard}
                    >
                        Supprimer
                    </Button>
                }
            </div>
        </form>
    </>
}