import type {BackgroundCard} from "../types/types.ts";

/**
 * Liste des backgrounds disponibles
 */
export const backgroundsCard: BackgroundCard[] = [
    "ocean_breeze",
    "purple_sky",
    "sunset_peach",
    "mint_fresh",
    "instagram_ish",
    "futur_dark_glow",
    "cold_steel",
    "creamy_mango",
    "deep_space",
]

/**
 * Générer aléatoirement un background pour une flashcard
 */
export const randomBackground: () => BackgroundCard = () => {
    const backgroundId = Math.floor(Math.random() * backgroundsCard.length)
    return backgroundsCard[backgroundId]
}

export const uniqueRandomBackground = randomBackground()
