import Core from "@/Core";
import {makeStyle, Space} from "@/Utils";
import {
    Button,
    Dialog,
    DialogActions,
    DialogBody,
    DialogContent,
    DialogSurface,
    DialogTitle,
    DialogTrigger,
    Title1,
    Title2
} from "@fluentui/react-components";
import React from "react";

function Assign() {
    const [open, setOpen] = React.useState(false);
    const [playerId, setPlayerId] = React.useState(1);

    function nextPlayer() {
        setOpen(false);
        if (playerId === Core.players.length - 1) {
            Core.setState(Core.STATE.CHECK);
        } else {
            setPlayerId(playerId + 1);
        }
    }

    const center = makeStyle({display: "grid", margin: "auto"});

    return (<>
        <Title1 className={center} align="center">分配角色</Title1>
        <Space height="20px"/>
        <Title2 className={center} align="center">{playerId + " 号玩家"}</Title2>
        <Space height="20px"/>
        <Dialog modalType={"alert"} surfaceMotion={null} open={open} onOpenChange={(event, data) => setOpen(data.open)}>
            <DialogTrigger disableButtonEnhancement>
                <Button className={center} appearance={"primary"}>查看</Button>
            </DialogTrigger>
            <DialogSurface>
                <DialogBody>
                    <DialogTitle className={center}>{playerId + " 号玩家"}</DialogTitle>
                    <DialogContent>
                        <Title2 className={center}
                                align="center">{"你的身份是: " + Core.players.at(playerId).name}</Title2>
                    </DialogContent>
                    <DialogActions>
                        <Button appearance={"primary"} onClick={nextPlayer}>确定</Button>
                    </DialogActions>
                </DialogBody>
            </DialogSurface>
        </Dialog>
    </>);
}

export default Assign;