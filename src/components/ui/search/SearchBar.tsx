import type {SearchBarProps} from "../../../types/types.ts";
import styles from "../../../styles/modules/Navbar.module.css";
import {type FormEvent, useEffect, useRef} from "react";

/**
 * SearchBar Component
 */
export function SearchBar(
    {
        placeholder = "Rechercher",
        value,
        onChange,
        onClick
    }:
    SearchBarProps
) {

    /**
     * Vérifier si c'est la SearchBar sur la Navbar et ne pas le focus
     */
    const inputRef = useRef<HTMLInputElement | null>(null)
    useEffect(() => {
        if (inputRef.current) {
            const isNav = inputRef.current.parentElement?.parentElement?.className.search("col")
            if (isNav && isNav === -1) inputRef.current.focus()
        }
    }, []);

    /**
     * Créer l'évènement search en envoyant la valeur de la rechercher
     */
    const handleInput = (e: FormEvent<HTMLInputElement>) => {
        const value =  e.currentTarget.value
        const searchEvent = new CustomEvent("search", {
            detail: value
        })
        window.dispatchEvent(searchEvent)
    }

    return <div className={styles.search_bar} onClick={onClick}>
        <i className="bx bx-search"></i>
        <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={e => onChange?.(e.currentTarget.value)}
            placeholder={placeholder}
            onInput={handleInput}
        />
        <p>
            <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd>
        </p>
    </div>
}