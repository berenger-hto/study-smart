import type {FlashCardData} from "../types/types.ts";

/**
 * Fake data
 */
export const flashcards: FlashCardData[] = [
    {
        id: "1",
        question: "Qu'est-ce qu'un composant fonctionnel en React ?",
        answer: "C’est une fonction JavaScript qui retourne du JSX pour afficher de l’interface utilisateur."
    },
    {
        id: "2",
        question: "À quoi sert le hook useState ?",
        answer: "Il permet de gérer l’état local d’un composant fonctionnel en React."
    },
    {
        id: "3",
        question: "Quelle est la différence entre == et === en JavaScript ?",
        answer: "`==` compare les valeurs après conversion de type, `===` compare valeur et type strictement."
    },
    {
        id: "4",
        question: "C’est quoi le Virtual DOM ?",
        answer: "Une représentation en mémoire du vrai DOM, utilisée par React pour optimiser les mises à jour."
    },
    {
        id: "5",
        question: "À quoi sert useEffect ?",
        answer: "Il permet d'exécuter du code après le rendu d'un composant, comme des appels API ou du DOM direct."
    },
    {
        id: "6",
        question: "C’est quoi un prop en React ?",
        answer: "Un prop (propriété) est une valeur passée d’un composant parent à un composant enfant."
    },
    {
        id: "7",
        question: "Quelle est la différence entre flexbox et grid ?",
        answer: "Flexbox gère l’alignement dans un axe (horizontal ou vertical), Grid permet un agencement en 2D."
    },
    {
        id: "8",
        question: "À quoi sert TypeScript ?",
        answer: "C’est un sur-ensemble de JavaScript qui ajoute le typage statique pour sécuriser le code."
    },
    {
        id: "9",
        question: "C’est quoi une promesse (Promise) ?",
        answer: "Un objet qui représente la complétion ou l’échec d’une opération asynchrone."
    },
    {
        id: "10",
        question: "À quoi sert JSON.stringify ?",
        answer: "À convertir un objet JavaScript en chaîne JSON."
    },
    {
        id: "11",
        question: "Quelle est la différence entre padding et margin ?",
        answer: "`padding` est l’espace intérieur d’un élément, `margin` est l’espace extérieur autour de l’élément."
    },
    {
        id: "12",
        question: "À quoi sert `key` dans un `map()` React ?",
        answer: "À aider React à identifier chaque élément et à optimiser le rendu."
    },
    {
        id: "13",
        question: "Que retourne un composant React ?",
        answer: "Il retourne du JSX, qui est ensuite transformé en appels JavaScript vers le DOM."
    },
    {
        id: "14",
        question: "Qu’est-ce qu’un middleware dans Express.js ?",
        answer: "Une fonction qui intercepte les requêtes HTTP avant d'atteindre le contrôleur."
    },
    {
        id: "15",
        question: "À quoi sert le useRef ?",
        answer: "À accéder directement à un élément DOM ou à garder une valeur persistante sans re-render."
    },
    {
        id: "16",
        question: "Comment on déclare une variable constante en JS ?",
        answer: "Avec `const`, ce qui signifie que la variable ne pourra pas être réassignée."
    },
    {
        id: "17",
        question: "C’est quoi un hook personnalisé (custom hook) ?",
        answer: "Une fonction qui commence par `use` et qui permet de réutiliser de la logique React."
    },
    {
        id: "18",
        question: "Quelle est la différence entre GET et POST ?",
        answer: "`GET` récupère des données, `POST` envoie des données au serveur pour traitement ou enregistrement."
    },
    {
        id: "19",
        question: "À quoi sert `className` en React ?",
        answer: "C’est l’équivalent de l’attribut `class` en HTML, mais adapté à JSX."
    },
    {
        id: "20",
        question: "Comment faire une redirection en React Router ?",
        answer: "Avec `useNavigate()` pour naviguer de manière programmatique vers une autre route."
    }
]
