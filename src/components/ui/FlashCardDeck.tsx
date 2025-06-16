import styles from "../../styles/modules/FlashCard.module.css";
import {FlashCard} from "./FlashCard.tsx";
import {flashcards} from "../../datas/fakeData.ts";
import {randomBackground} from "../../utils/backgroundsCard.ts";
import {Outlet, useLocation, useNavigate} from "react-router";
import {useDocumentTitle} from "../../hooks/useDocumentTitle.ts";

/**
 * FlashCardDeck component
 */
export function FlashCardDeck() {
    useDocumentTitle("Mes flashcards")

    /**
     * Rediriger vers /{cardId} si on clique sur la carte
     * et gestion de l'affiche suivant la pathname dans l'URL
     */
    const navigate = useNavigate()
    const location = useLocation()
    const isFlashCardDeck = location.pathname === "/flashcards"
    const handleClick: (id: string) => void = (id) => {
        navigate(`card/${id}`)
    }

    return <>
        {
            isFlashCardDeck && <div className={`container ${styles.decks}`}>
            <p className={styles.type}>Mes cartes</p>
            <div className={styles.card_container}>
                {
                    flashcards.map(data => (
                        <FlashCard
                            key={data.id}
                            data={data}
                            background={randomBackground()}
                            onClick={() => handleClick(data.id)}
                            notFlipped={true}
                        />
                    ))
                }
            </div>
        </div>
        }
        <Outlet />
        {/* Rendre le composant EditFlashCard */}
    </>
}