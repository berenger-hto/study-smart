import { v4 as uuidv4 } from 'uuid';
import type {FlashCardData, FormElementsProps} from "../types/types.ts";
import {useToast} from "./useToast.ts";
import {useNavigateTo} from "./useNavigateTo.ts";
import type {Dispatch, SetStateAction} from "react";

type ParamType = string | undefined

/**
 * Hook useData
 * Ajouter ou récupérer des datas
 */
export function useDatas(
    setButtonDisabled?: Dispatch<SetStateAction<boolean>>,
    key:string = "data"
) {

    /**
     * Utiliser une toast
     */
    const {pendingToast: success, error} = useToast()

    /**
     * Naviguez vers une URL
     */
    const {handleNavigate} = useNavigateTo()

    /**
     * Définir une erreur
     */
    const handleError = (message: string, e?: unknown) => {
        error(message)
        console.error(`Error: ${e ? e : message}`)
    }
    
    /**
     * Handle Success
     * Appelez quand une opération a réussie
     */
    const handleSuccess = (message: string, navTo: string = "../") => {
        setButtonDisabled?.(true)
        success(message)
        setTimeout(() => handleNavigate(navTo), 2000)
    }

    /**
     * Récupération des datas
     */
    const get = (): FlashCardData[] | [] => {
        try {
            const data = localStorage.getItem(key)
            return data ? JSON.parse(data) as FlashCardData[] : []
        } catch (e) {
            handleError("Une erreur s'est produite", e)
            return []
        }
    }

    /**
     * Ajout et modification des datas
     */
    const save = (
        action: FormElementsProps["action"],
        question: ParamType,
        answer: ParamType,
        flashCardId?: ParamType
    ): void => {
        if (!action) throw new Error("Une erreur interne s'est produite")

        if (!question || !answer) {
            handleError("Renseignez les champs", "Aucune donnée entrée")
            return
        }

        const newData: FlashCardData = {
            id: uuidv4(),
            question: question,
            answer: answer
        }

        const datas = get()
        const isExisting = datas.some(data =>
            data.question.toLowerCase() === newData.question.toLowerCase()
            && data.answer.toLowerCase() === newData.answer.toLowerCase()
        )

        if (isExisting) {
            handleError("Flashcard existante")
            return
        }

        if (action === "add") {
            try {
                localStorage.setItem(key, JSON.stringify([...datas, newData]))
                handleSuccess("Flashcard créée !")
                return
            } catch (e) {
                handleError("Une erreur s'est produite", e)
                return
            }
        } else {
            if (!flashCardId) throw new Error("Une erreur interne s'est produite")

            const flashCard = datas.find(data => data.id === flashCardId)
            const prevFlashCards = datas.filter(data => data.id !== flashCardId)
            if (!flashCard) {
                handleError("Flashcard inexistante")
                return
            }

            try {
                localStorage.setItem(key, JSON.stringify([...prevFlashCards, {...newData, id: flashCardId}]))
                handleSuccess("Flashcard modifiée !")
            } catch (e) {
                handleError("Une erreur s'est produite", e)
                return
            }
        }
    }

    /**
     * Supprimer une flashcard
     */
    const remove = (flashCardId: ParamType) => {
        if (!flashCardId) throw new Error("Une erreur interne s'est produite")
        const datas = get()
        const flashCard = datas.find(data => data.id === flashCardId)
        if (!flashCard) {
            handleError("Flashcard inexistante")
            return
        }

        const newDatas = datas.filter(data => data.id !== flashCardId)
        try {
            localStorage.setItem(key, JSON.stringify(newDatas))
            handleSuccess("Flashcard supprimée !")
        } catch (e) {
            handleError("Une erreur s'est produite", e)
            return
        }
    }

    return {
        get, save, remove, hasFlashcards: get().length > 0
    }
}