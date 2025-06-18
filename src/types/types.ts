import type {ButtonHTMLAttributes, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes} from "react";

export interface LogoProps {
    width?: string
    height?: string
    color?: string
}

export interface SearchBarProps {
    placeholder?: string
    value?: string
    onChange?: (s: string) => void
    onClick?: () => void
}

export interface SearchProps {
    handleClose: () => void
}

export type MenuClickHandler = () => void
export type BackgroundCard =
    | "ocean_breeze"
    | "purple_sky"
    | "sunset_peach"
    | "mint_fresh"
    | "instagram_ish"
    | "futur_dark_glow"
    | "cold_steel"
    | "creamy_mango"
    | "deep_space"
    | "tech_vibes"

export interface FlashCardProps {
    background: BackgroundCard
    data: FlashCardData
    onClick?: () => void
    notFlipped?: boolean
}

export type NavLinksType = {
    link: string
    routes: string
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string
    height?: string
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export interface FlashCardFormProps {
    data?: FlashCardData
}

export type FlashCardData = {
    id: string
    question: string
    answer: string
}
export type ThemeType = | "light" | "dark"


export type ThemeContextType = {
    theme: ThemeType
    toggleTheme: () => void
}

export interface ThemeContextProviderProps {
    children: ReactNode
}

export interface NavLinksProps {
    ulActive: boolean
    onMenuClick: () => void
}

export interface NavbarStartProps extends NavLinksProps {
    handleOpenAndClose: () => void
}

export interface NavbarControlsProps extends NavbarStartProps{
    onMenuClick: () => void
}

export interface FlashCardPreviewProps {
    data: FlashCardData
}
