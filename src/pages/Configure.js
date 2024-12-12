import {Button, Divider, Label, SpinButton, Title1} from "@fluentui/react-components";
import React from "react";
import Core from "../Core";
import {makeStyle, Space} from "../Utils";

function Character({name, character}) {
    const labelStyle = makeStyle({display: "inline-block", minWidth: "75px"});
    const spinButtonStyle = makeStyle({marginLeft: "15px", width: "75px"});
    const [value, setValue] = React.useState(character.number);
    const onChange = React.useCallback((_, data) => {
        if (data.value !== undefined) {
            setValue(data.value);
            character.setNumber(data.value);
        } else if (data.displayValue !== undefined) {
            const v = parseFloat(data.displayValue);
            if (!Number.isNaN(v)) {
                setValue(v);
            }
        }
    }, [character]);

    return (<div>
        <Label className={labelStyle}>{name}</Label>
        <Label>
            <SpinButton className={spinButtonStyle} name={name} value={value} min={0} onChange={onChange}/>
        </Label>
    </div>);
}

function Configure() {
    const good = [];
    const werewolf = [];
    const third = [];
    Core.characters.forEach((character, name) => {
        if (character.camp === Core.CAMP.COMMONER || character.camp === Core.CAMP.GOOD) {
            good.push(<Character key={name} name={name} character={character}/>);
        }
        if (character.camp === Core.CAMP.WEREWOLF) {
            werewolf.push(<Character key={name} name={name} character={character}/>);
        }
        if (character.camp >= Core.CAMP.THIRD) {
            third.push(<Character key={name} name={name} character={character}/>);
        }
    });

    const confirm = () => {
        Core.players = [];
        Core.characters.forEach((character, name) => {
            for (let i = 1; i <= character.number; i++) {
                let displayName = name;
                let priority = 0;
                if (character.number > 1 && !character.multiple) {
                    displayName = displayName + " " + i;
                    priority = i;
                }
                Core.addPlayer(displayName, character, priority);
            }
        });
        Core.shufflePlayers();
        console.log(Core.characters);
        console.log(Core.players); //debug
        if (Core.players.length > 1) {
            Core.setState(Core.STATE.ASSIGN);
        }
    };

    const center = makeStyle({display: "grid", margin: "auto"});

    return (<>
        <Title1 className={center} align={"center"}>好人阵营</Title1>
        {good}
        <Divider appearance={"subtle"}/>
        <Title1 className={center} align={"center"}>狼人阵营</Title1>
        {werewolf}
        <Divider appearance={"subtle"}/>
        <Title1 className={center} align={"center"}>第三方阵营</Title1>
        {third}
        <Divider appearance={"subtle"}/>
        <Space height="10px"/>
        <Button className={center} appearance={"primary"} onClick={confirm}>确定</Button>
    </>);
}

export default Configure;