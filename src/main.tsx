import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Checkout from "./checkout/Checkout";
import MarketingPage from "./marketing-page/MarketingPage";
import RegalosPillita from "./regalos-pillita/RegalosPillita";
import SignIn from "./sign-in-side/SignInSide";
import SignUp from "./sign-up/SignUp";

import theme from "./theme";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MarketingPage />,
        },
        {
            path: "/checkout",
            element: <Checkout />,
        },
        {
            path: "/vite-default",
            element: <App />,
        },
        {
            path: "/sign-in",
            element: <SignIn />,
        },
        {
            path: "/sign-up",
            element: <SignUp />,
        },
        {
            path: "/regalos",
            element: <RegalosPillita />,
        },
    ],
    { basename: "/danielaktm" }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);
