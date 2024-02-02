import React from "react";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

// i18n language support
import './i18n.js';
import i18next from "i18next";
import {I18nextProvider} from "react-i18next";

// CSS
import "./App.css";

// Components
import Index from "./routes/index.jsx";
import WIP from "./components/wip/WIP.jsx";

// Router
const router = createBrowserRouter([
    {
        path: "/",
        element: <Index/>,
        children: [
            {
                path: "*",
                element: <WIP title="WIP"/>
            }
        ]
    },
]);

createRoot(document.getElementById("root")).render(
    <I18nextProvider i18n={i18next}>
        <RouterProvider router={router}/>
    </I18nextProvider>
);
