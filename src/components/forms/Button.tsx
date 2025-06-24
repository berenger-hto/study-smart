import type {ButtonProps} from "../../types/types.ts";
import styles from "../../styles/modules/forms/Button.module.css"

/**
 * Button component
 */
export function Button({children, action, ...props}: ButtonProps) {
    return <div className={styles.button}>
        <button className={action && styles.delete} {...props}>
            {children}
        </button>
    </div>
}