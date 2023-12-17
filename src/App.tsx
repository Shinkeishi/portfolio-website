import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen/HomeScreen";

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeScreen />,
    },
]);

export default App;
