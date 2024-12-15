import Core from "@/Core";
import {makeStyle} from "@/Utils";
import {Button, Title1} from "@fluentui/react-components";

function Check() {
    function confirm() {
        Core.setState(Core.STATE.WAIT);
    }

    const center = makeStyle({display: "grid", margin: "auto"});

    return (<>
        <Title1 className={center} align="center">法官确认</Title1>
        <Button className={center} appearance={"primary"} onClick={confirm}>确定</Button>
    </>);
}

export default Check;