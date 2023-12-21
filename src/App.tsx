import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import NavBar from "./components/NavBar";
import Projects from "./pages/Projects/Projects";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeScreen />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
]);

const App = () => {
    return (
        <div className="bg-gray-800 text-white font-inconsolata">
            <NavBar />
            <>
                <RouterProvider router={router} />
            </>
        </div>
    );
};

export default App;
