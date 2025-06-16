import {useEffect} from "react";

/**
 * Hook useDocumentTitle.
 * Change title of document
 */
export function useDocumentTitle(title: string): void {
    useEffect(() => {
        document.title = title
    }, [title]);
}