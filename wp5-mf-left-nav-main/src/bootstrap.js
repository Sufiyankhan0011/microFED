import React from "react";
import {createRoot} from "react-dom/client";
import { StoreProvider } from 'Shell/store'

import Main from "./App";

const App = () => {
    return (
        <StoreProvider>
            <Main />
        </StoreProvider>
    )
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />, );
