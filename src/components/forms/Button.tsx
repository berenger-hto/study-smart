import type {ButtonProps} from "../../types/types.ts";
import styles from "../../styles/modules/forms/Button.module.css"

/**
 * Button component
 */
export function Button({children, ...props}: ButtonProps) {
    return <div className={styles.button}>
        <button {...props}>
            {children}
        </button>
    </div>
}