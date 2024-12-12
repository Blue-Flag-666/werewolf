import {Title1} from "@fluentui/react-components";
import React from "react";
import Core from "./Core";
import Assign from "./pages/Assign";
import Configure from "./pages/Configure";

function App() {
    [Core.state, Core.setState] = React.useState(Core.STATE.CONFIGURE);
    if (Core.state === Core.STATE.CONFIGURE) {
        return <Configure/>;
    } else if (Core.state === Core.STATE.ASSIGN) {
        return <Assign/>;
    } else if (Core.state === Core.STATE.CHECK) {
        return <Title1>123</Title1>;
    }
}

export default App;
