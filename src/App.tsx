import {RouterProvider} from "react-router";
import {routes} from "./hooks/useRoutes.tsx";
import {SingleLoader} from "./components/ui/SingleLoader.tsx";
import {Toaster} from "react-hot-toast";

function App() {
    return <>
        <Toaster
            position="bottom-left"
            reverseOrder={true}
            toastOptions={{
                duration: 4000
            }}
        />
        <SingleLoader />
        <RouterProvider router={routes} />
    </>
}

export default App;