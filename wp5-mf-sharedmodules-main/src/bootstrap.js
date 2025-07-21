import React from "react";
import { createRoot } from "react-dom/client";
import { StoreProvider } from "Shell/store"; // Assuming Module Federation exposes it

import App from "./App";

const RootApp = () => (
  <StoreProvider>
    <App />
  </StoreProvider>
);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<RootApp />);
