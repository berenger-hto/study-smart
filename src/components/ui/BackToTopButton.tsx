import styles from "../../styles/modules/BackToTopButton.module.css"
import {useEffect, useRef} from "react";
import {throttle} from "lodash";

/**
 * BackToTopButton component
 */
export function BackToTopButton() {
    /**
     * Hide and show button
     */
    const buttonRef = useRef<HTMLButtonElement | null>(null)
    useEffect(() => {
        const handleScroll = throttle(() => {
            if (buttonRef.current) {
                if (window.scrollY > 500)
                    buttonRef.current.classList.add(styles.active)
                else
                    buttonRef.current.classList.remove(styles.active)
            }
        }, 200)

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    /**
     * Click to scroll top
     */
    const onScrollTop = () => {
        scrollTo({
            top: 0,
            left: 0
        })
    }

    return <button
        className={styles.button}
        onClick={onScrollTop}
        ref={buttonRef}
        aria-label="Retour en haut"
    >
        <i className="bx bxs-chevron-up"></i>
    </button>
}