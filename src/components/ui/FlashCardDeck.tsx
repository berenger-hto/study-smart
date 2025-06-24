import styles from "../../styles/modules/FlashCard.module.css";
import {FlashCard} from "./FlashCard.tsx";
import {randomBackground} from "../../utils/backgroundsCard.ts";
import {Outlet, useLocation} from "react-router";
import {useDocumentTitle} from "../../hooks/useDocumentTitle.ts";
import {useDatas} from "../../hooks/useDatas.ts";
import {NoFlashCard} from "./NoFlashCard.tsx";
import {useNavigateTo} from "../../hooks/useNavigateTo.ts";

/**
 * FlashCardDeck component
 */
export function FlashCardDeck() {
    useDocumentTitle("Mes flashcards")

    /**
     * Rediriger vers /{cardId} si on clique sur une carte
     * et gestion de l'affichage suivant le pathname dans l'URL
     */
    const location = useLocation()
    const isFlashCardDeck = location.pathname === "/flashcards" || location.pathname === "/flashcards/"

    const {handleNavigate} = useNavigateTo()
    const handleClick: (id: string) => void = (id) => {
        handleNavigate(`card/${id}`)
    }
    const {get: getFlashCard, hasFlashcards} = useDatas()
    const flashcards = getFlashCard()


    return <>
        {
            isFlashCardDeck && <div className={`container ${styles.decks}`}>
            {hasFlashcards && <p className={styles.type}>Mes cartes</p>}
            <div className={styles.card_container}>
                {
                    hasFlashcards ? flashcards.map(data => (
                        <FlashCard
                            key={data.id}
                            data={data}
                            background={randomBackground()}
                            onClick={() => handleClick(data.id)}
                            notFlipped={true}
                        />
                    )) : <NoFlashCard />
                }
            </div>
        </div>
        }
        <Outlet />
        {/* Rendre le composant EditFlashCard */}
    </>
}