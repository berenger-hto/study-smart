import {RouterProvider} from "react-router";
import {routes} from "./hooks/useRoutes.tsx";

function App() {
    return <>
        <RouterProvider router={routes} />
    </>
}

export default App;