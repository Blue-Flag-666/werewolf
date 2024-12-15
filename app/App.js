import Core from "@/Core";
import Assign from "@/pages/Assign";
import Check from "@/pages/Check";
import Configure from "@/pages/Configure";
import Game from "@/pages/Game";
import Wait from "@/pages/Wait";
import React from "react";

function App() {
    [Core.state, Core.setState] = React.useState(Core.STATE.CONFIGURE);
    if (Core.state === Core.STATE.CONFIGURE) {
        return <Configure/>;
    } else if (Core.state === Core.STATE.ASSIGN) {
        return <Assign/>;
    } else if (Core.state === Core.STATE.CHECK) {
        return <Check/>;
    } else if (Core.state === Core.STATE.WAIT) {
        return <Wait/>;
    } else if (Core.state === Core.STATE.GAME) {
        return <Game/>;
    }
}

export default App;
