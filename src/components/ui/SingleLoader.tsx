import styles from "../../styles/modules/SingleLoader.module.css"
import {useEffect, useState} from "react";

/**
 * SingleLoader component
 * Loader au chargement de l'app
 */
export function SingleLoader() {
    const [visible, setVisible] = useState<boolean>(true)

    useEffect(() => {
        const html = document.documentElement
        html.classList.add("scrollHidden")
        const handleLoad = () => {
            setVisible(false)
            html.classList.remove("scrollHidden")
        }

        if (document.readyState === "complete") {
            handleLoad()
        } else {
            window.addEventListener("load", handleLoad)
            return () => {
                window.removeEventListener("load", handleLoad)
                html.classList.remove("scrollHidden")
            }
        }
    }, []);

    if (!visible) return

    return <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
    </div>
}