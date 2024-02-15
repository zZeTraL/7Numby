import React from "react";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, redirect, RouterProvider} from "react-router-dom";

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
import Database from "./routes/database/Database.jsx";
import Settings from "./routes/settings/Settings.jsx";
import Calculator from "./routes/calculator/Calculator.jsx";
import Counter from "./routes/warp/Counter.jsx";
import Home from "./routes/home/Home.jsx";
import {getAllCharactersTag} from "./data/utils.js";
import {fetchData, fetchMultipleData} from "./data/request.js";

// Data
const tags = getAllCharactersTag();

// Router
const router = createBrowserRouter([
    {
        path: "/",
        element: <Index/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/characters",
                element: <Character/>,
                loader: async () => {
                    return await fetchData("characters");
                }
            },
            {
                path: "characters/:character",
                element: <CharacterInformation/>,
                loader: async ({params}) => {
                    if(!tags.includes(params.character)) return redirect("/");
                    // Load character related data
                    const result = await fetchMultipleData(["characters", "character_skills", "character_ranks"]);
                    return {
                        characters: result[0],
                        characterSkills: result[1],
                        characterRanks: result[2],
                    };
                }
            },
            {
                path: "warp",
                element: <Counter/>,
            },
            {
                path: "calculator",
                element: <Calculator/>,
            },
            {
                path: "timeline",
                element: <Timeline/>,
            },
            {
                path: "database",
                element: <Database/>
            },
            {
                path: "settings",
                element: <Settings/>
            },
            {
                path: "*",
                element: <WIP title="WIP"/>
            }
        ]
    },
]);

if ('serviceWorker' in navigator && import.meta.env.PROD) {
    navigator.serviceWorker.register("/service-worker.js", {scope: '/'})
        .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
            console.error('Service Worker registration failed:', error);
        });
}

createRoot(document.getElementById("root")).render(
    <I18nextProvider i18n={i18next}>
        <RouterProvider router={router}/>
    </I18nextProvider>
);
