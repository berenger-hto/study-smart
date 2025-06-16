import type {SearchBarProps} from "../../types/types.ts";
import styles from "../../styles/modules/Navbar.module.css";
import {useEffect, useRef} from "react";

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

    return <div className={styles.search_bar} onClick={onClick}>
        <i className="bx bx-search"></i>
        <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={e => onChange?.(e.currentTarget.value)}
            placeholder={placeholder}
        />
        <p>
            <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd>
        </p>
    </div>
}