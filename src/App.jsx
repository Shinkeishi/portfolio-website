import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen.jsx";
import NavBar from "./components/NavBar.jsx";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <HomeScreen />,
//     },
// ]);

const App = () => {
    return (
        <div className="bg-gray-800 text-white font-inconsolata">
            <NavBar />
            {/* <>
                <RouterProvider router={router} />
            </> */}
            <>
                <HomeScreen />
            </>
        </div>
    );
};

export default App;
