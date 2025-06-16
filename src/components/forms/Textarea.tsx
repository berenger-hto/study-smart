import {type CSSProperties, useId} from "react"
import styles from "../../styles/modules/forms/Textarea.module.css"
import type {TextareaProps} from "../../types/types.ts"

/**
 * Textarea component
 */
export function Textarea({label, height, ...props}: TextareaProps) {
    const generateId = useId()
    const id = props.id ? props.id : generateId
    const style: CSSProperties = {
        height: height ? `${height}px` : "200px"
    }

    return <div className={styles.textarea}>
        {
            label &&
            <label htmlFor={id}>
                {label}
            </label>
        }
        <textarea id={id} style={style} {...props} />
    </div>
}