import {createBrowserRouter} from "react-router";
import {Root} from "../components/ui/Root.tsx";
import {FlashCards} from "../components/ui/FlashCards.tsx";
import {PageError} from "../components/ui/PageError.tsx";
import {CreateFlashCard} from "../components/ui/CreateFlashCard.tsx";
import {FlashCardDeck} from "../components/ui/FlashCardDeck.tsx";
import {EditFlashCard} from "../components/ui/EditFlashCard.tsx";

/**
 * Route
 */
export const routes = createBrowserRouter([
    {
        path: "",
        element: <Root />,
        errorElement: <PageError />,
        children: [
            {
                path: "",
                element: <FlashCards />
            },
            {
                path: "create",
                element: <CreateFlashCard />
            },
            {
                path: "dev/:id",
                element: <div>Card Card id: 1</div>
            },
            {
                path: "flashcards",
                element: <FlashCardDeck />,
                children: [
                    {
                        path: "card/:id",
                        element: <EditFlashCard />
                    }
                ]
            }
        ]
    }
])