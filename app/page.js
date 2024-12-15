"use client";
import App from "@/App";
import {FluentProvider, webLightTheme} from "@fluentui/react-components";

function Page() {
    return <FluentProvider theme={webLightTheme}>
        <App/>
    </FluentProvider>;
}

export default Page;
