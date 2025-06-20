import {Navbar} from "./ui/Navbar.tsx";
import {Outlet} from "react-router";
import {BackToTopButton} from "./ui/BackToTopButton.tsx";

/**
 * Root component
 */
export function Root() {
    return <>
        <Navbar />
        <main>
            <Outlet />
        </main>
        <BackToTopButton />
    </>
}