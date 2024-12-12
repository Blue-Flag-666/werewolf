import {FluentProvider, webLightTheme} from "@fluentui/react-components";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FluentProvider theme={webLightTheme}>
    <App/>
</FluentProvider>);