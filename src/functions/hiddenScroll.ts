/**
 * Masquer ou affiche la scrollbar d'un élément HTML
 */
export function hiddenScroll(element: HTMLElement, action: "hidden" | "visible" = "hidden") {
    if (action === "hidden") {
        element.classList.add("scrollHidden")
    } else {
        element.classList.remove("scrollHidden")
    }
}