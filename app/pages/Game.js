import {makeStyle} from "@/Utils";
import {Title1} from "@fluentui/react-components";

function Game() {
    const center = makeStyle({display: "grid", margin: "auto"});

    return (<>
        <Title1 className={center} align="center">游戏</Title1>
    </>);
}

export default Game;