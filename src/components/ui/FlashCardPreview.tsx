import styles from "../../styles/modules/FlashCard.module.css";
import {FlashCard} from "./FlashCard.tsx";
import {uniqueRandomBackground} from "../../utils/backgroundsCard.ts";
import type {FlashCardPreviewProps} from "../../types/types.ts";

export function FlashCardPreview({data}: FlashCardPreviewProps) {
    return <div className={styles.card_container}>
        <FlashCard background={uniqueRandomBackground} data={data} />
    </div>
}