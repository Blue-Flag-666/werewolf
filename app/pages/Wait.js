import Core from "@/Core";
import {makeStyle, Space} from "@/Utils";
import {Body2, Button, Divider, Title1, Title2} from "@fluentui/react-components";
import React from "react";

function Character({name, number}) {
    const center = makeStyle({display: "grid", margin: "auto"});
    if (name === undefined) {
        return <Body2 className={center} align={"center"}>无</Body2>;
    }
    return <Body2 className={center} align={"center"}>{number} × {name}</Body2>;
}

function CharacterList() {
    const good = [];
    const werewolf = [];
    const third = [];
    Core.characters.forEach((character, name) => {
        if (character.number > 0) {
            if (character.camp === Core.CAMP.COMMONER || character.camp === Core.CAMP.GOOD) {
                good.push(<Character key={name} name={name} number={character.number}/>);
            } else if (character.camp === Core.CAMP.WEREWOLF) {
                werewolf.push(<Character key={name} name={name} number={character.number}/>);
            } else {
                third.push(<Character key={name} name={name} number={character.number}/>);
            }
        }
    });
    if (good.length === 0) {
        good.push(<Character key={"无"}/>);
    }
    if (werewolf.length === 0) {
        werewolf.push(<Character key={"无"}/>);
    }
    if (third.length === 0) {
        third.push(<Character key={"无"}/>);
    }
    const center = makeStyle({display: "grid", margin: "auto"});

    return <>
        <Title2 className={center} align={"center"}>好人阵营</Title2>
        <Space height="10px"/>
        {good}
        <Space height="20px"/>
        <Divider appearance={"subtle"}/>
        <Title2 className={center} align={"center"}>狼人阵营</Title2>
        <Space height="10px"/>
        {werewolf}
        <Space height="10px"/>
        <Divider appearance={"subtle"}/>
        <Space height="10px"/>
        <Title2 className={center} align={"center"}>第三方阵营</Title2>
        <Space height="10px"/>
        {third}
        <Space height="10px"/>
        <Divider appearance={"subtle"}/>
    </>;
}

function Wait() {
    function start() {
        Core.setState(Core.STATE.GAME);
    }

    const center = makeStyle({display: "grid", margin: "auto"});

    return (<>
        <Title1 className={center} align="center">等待开始</Title1>
        <Space height="10px"/>
        <CharacterList/>
        <Space height="10px"/>
        <Button className={center} appearance={"primary"} onClick={start}>开始游戏</Button>
    </>);
}

export default Wait;