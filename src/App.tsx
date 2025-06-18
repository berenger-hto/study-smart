import {RouterProvider} from "react-router";
import {routes} from "./hooks/useRoutes.tsx";
import {SingleLoader} from "./components/ui/SingleLoader.tsx";

function App() {
    return <>
        <SingleLoader />
        <RouterProvider router={routes} />
    </>
}

export default App;