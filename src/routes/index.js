import Home from "../components/home/Home";
import Business from "../components/Business";
import General from "../components/General";
import Health from "../components/Health";
import Science from "../components/Science";
import Sports from "../components/Sports";
import Techology from "../components/Techology";
import Entertainment from "../components/Entertainment";


const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/Business",
        element: <Business />
    },
    {
        path: "/Entertainment",
        element: <Entertainment />
    },
    {
        path: "/General",
        element: <General />
    },
    {
        path: "/Health",
        element: <Health />
    },
    {
        path: "/Science",
        element: <Science />
    },
    {
        path: "/Sports",
        element: <Sports />
    },
    {
        path: "/Technology",
        element: <Techology />
    }
];


export default routes