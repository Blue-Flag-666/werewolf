import {makeStyles} from "@fluentui/react-components";

export function Space({height}) {
    const style = makeStyle({height: height});
    return <div className={style}/>;
}

export function makeStyle(style) {
    return makeStyles({style})().style;
}

function random(lower, upper) {
    return lower + Math.floor(Math.random() * (upper - lower + 1));
}

export function shuffle(array) {
    let index = -1, lastIndex = array.length - 1;
    while (++index < array.length) {
        const rand = random(index, lastIndex), value = array[rand];
        array[rand] = array[index];
        array[index] = value;
    }
}