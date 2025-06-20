import styles from "../styles/modules/PageError.module.css"
import {Link} from "react-router";
import {useDocumentTitle} from "../hooks/useDocumentTitle.ts";
import type {PageErrorProps} from "../types/types.ts";

/**
 * PageError component
 */
export function PageError({pageTitle = "Error 404 ! Page Introuvable"}: PageErrorProps) {
    useDocumentTitle(pageTitle)

    return <>
        <div className={styles.face}>
            <div className={styles.band}>
                <div className={styles.red}></div>
                <div className={styles.white}></div>
                <div className={styles.blue}></div>
            </div>
            <div className={styles.eyes}></div>
            <div className={styles.dimples}></div>
            <div className={styles.mouth}></div>
        </div>

        <h1>Oops! Page introuvable ou quelque chose s'est mal passé</h1>
        <Link to="/">
            <div className={styles.btn} role="Retourner à l'acceuil" aria-label="Retourner à l'acceuil">
                Accueil
            </div>
        </Link>

    </>
}