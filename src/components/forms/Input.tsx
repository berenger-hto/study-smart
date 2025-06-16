import {useId} from "react";
import styles from "../../styles/modules/forms/Input.module.css"
import type {InputProps} from "../../types/types.ts";

/**
 * Input component
 */
export function Input({label, ...props}: InputProps) {
    const generateId = useId()
    const id = props.id ? props.id : generateId

    return <div className={styles.input}>
        {
            label &&
            <label htmlFor={id}>
                {label}
            </label>
        }
        <input id={id} {...props} />
    </div>
}