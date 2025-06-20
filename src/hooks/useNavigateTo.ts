import {useNavigate} from "react-router";

/**
 * Naviguez vers une url en utlisant React Router
 */
export function useNavigateTo() {
    const navigate = useNavigate()
    const handleNavigate = (navigateTo: string) => {
        navigate(navigateTo)
    }

    return {
        handleNavigate
    }
}