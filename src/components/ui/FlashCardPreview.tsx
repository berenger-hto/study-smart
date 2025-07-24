import styles from "../../styles/modules/FlashCard.module.css";
import {FlashCard} from "./FlashCard.tsx";
import type {FlashCardPreviewProps} from "../../types/types.ts";

export function FlashCardPreview({data}: FlashCardPreviewProps) {
    return <div className={styles.card_container}>
        <FlashCard data={data} />
    </div>
}