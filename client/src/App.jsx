import React from "react";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

// Provider
import {CharacterDataProvider} from "./context/DataContext.jsx";

// i18n language support
import './i18n.js';
import i18next from "i18next";
import {I18nextProvider} from "react-i18next";

// CSS
import "./App.css";

// Components
import Index from "./routes/Index.jsx";
import WIP from "./components/wip/WIP.jsx";
import Character from "./routes/character/Character.jsx";
import CharacterInformation from "./routes/character/subRoutes/CharacterInformation.jsx";
import Timeline from "./routes/timeline/Timeline.jsx";

// Router
const router = createBrowserRouter([
    {
        path: "/",
        element: <Index/>,
        children: [
            {
                path: "/characters",
                element: <Character/>
            },
            {
                path: "characters/:character",
                element: <CharacterInformation />,
            },
            {
                path: "timeline",
                element: <Timeline />,
            },
            {
                path: "*",
                element: <WIP title="WIP"/>
            }
        ]
    },
]);

// Register the Service Worker
/*if ('serviceWorker' in navigator && import.meta.env.PROD) {
    navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
            console.error('Service Worker registration failed:', error);
        });
}*/

createRoot(document.getElementById("root")).render(
    <I18nextProvider i18n={i18next}>
        <CharacterDataProvider>
            <RouterProvider router={router}/>
        </CharacterDataProvider>
    </I18nextProvider>
);
