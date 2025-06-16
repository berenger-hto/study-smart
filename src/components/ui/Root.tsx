import {Navbar} from "./Navbar.tsx";
import {Outlet} from "react-router";
import {BackToTopButton} from "./BackToTopButton.tsx";

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