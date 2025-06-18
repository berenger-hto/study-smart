import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./styles/main.css"
import {ThemeContextProvider} from "./components/context/ThemeContextProvider.tsx";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
  </StrictMode>,
)
