import {useEffect, useState} from "react";
import type {FlashCardData} from "../types/types.ts";
import {useDatas} from "./useDatas.ts";

/**
 * Gérer la recherche des flashcards
 */
export function useSearch() {
    const [searchValue, setSearchValue] = useState<string | null>(null)
    const [result, setResult] = useState<FlashCardData[] | null>(null)

    /**
     * Récupérer les flashcards existantes
     */
    const {get} = useDatas()
    const flashCards = get()

    useEffect(() => {
        if (!flashCards) return

        /**
         * Effectuer la recherche à partir de la valeur renvoyée par l'évènement "search"
         */
        const handleSearch = (e: Event) => {
            const {detail: searchValue} = e as CustomEvent<string>
            setSearchValue(searchValue)
            setResult(flashCards.filter(data =>
                data.question.toLowerCase().includes(searchValue.toLowerCase()) ||
                data.answer.toLowerCase().includes(searchValue.toLowerCase())
            ))
            if (!searchValue) setResult(null)
        }

        window.addEventListener("search", handleSearch)
        return () => window.removeEventListener("search", handleSearch)
    }, [flashCards]);

    return {
        result, searchValue
    }
}