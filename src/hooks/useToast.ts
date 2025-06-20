import toast from "react-hot-toast";
import {useCallback, useMemo} from "react";
import {useTheme} from "./useTheme.ts";

/**
 * Créer une toast
 */
export function useToast() {
    const {theme} = useTheme()
    const toastStyle = useMemo(() =>
        theme === "dark" ? {
            background: "#222",
            color: "#eee"
        } : {
            background: "#fff",
            color: "#000"
        }
    ,[theme])

    /**
     * Success toast
     */
    const success = useCallback((message: string) => {
        toast.success(message, {
            style: toastStyle
        })
    }, [toastStyle])

    /**
     * Error toast
     */
    const error = useCallback((message: string) => {
        toast.error(message, {
            style: toastStyle
        })
    }, [toastStyle])

    /**
     * Promise simulation
     */
    const promise = (duration: number): Promise<"Resolved"> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Resolved")
            }, duration)
        })
    }

    /**
     * Pending toast
     */
    const pendingToast = useCallback((
        successMessage: string,
        loadingMessage: string | undefined = "En cours",
        duration: number | undefined = 2000
        ) =>
        toast.promise(promise(duration), {
        loading: loadingMessage,
        success: successMessage,
    }, {style: toastStyle}), [toastStyle])

    return {
        success, error, pendingToast
    }
}