import type {FlashCardData, FlashCardFormProps} from "../../types/types.ts";
import {type ChangeEvent, useState} from "react";
import {FlashCardPreview} from "./FlashCardPreview.tsx";
import {FormElements} from "./form/FormElements.tsx";

/**
 * FlashCardForm component
 * Formulaire pour ajouter ou modifier des flashcards
 */
export function FlashCardForm({data, action}: FlashCardFormProps) {

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

    /**
     * Modifier en temps réel les données saisies au niveau de la Flashcard
     */
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
     * FormElements Component props
     */
    const formElementsProps = {
        dataState,
        visualize,
        handleModifyQuestion,
        handleModifyAnswer,
        handleVisualize,
        setDataState,
        action
    }


    return <>
        {
            visualize && <FlashCardPreview data={dataState} />
        }

        <FormElements {...formElementsProps} />

    </>
}