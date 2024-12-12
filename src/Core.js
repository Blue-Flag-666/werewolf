import {shuffle} from "./Utils";

class Player {
    constructor(id, name, character, priority) {
        this.id = id;
        this.name = name;
        this.character = character;
        this.priority = priority;
        this.alive = true;
    }
}

class Character {
    constructor(number, priority, camp, multiple = false) {
        this.number = number;
        this.priority = priority;
        this.camp = camp;
        this.multiple = multiple;
    }

    setNumber(number) {
        this.number = number;
    }

    setCamp(camp) {
        this.camp = camp;
    }
}

class Core {
    static STATE = {
        CONFIGURE: 0, ASSIGN: 1, CHECK: 2
    };

    static state = null;
    static setState = null;

    static CAMP = {
        COMMONER: 0, GOOD: 1, WEREWOLF: 2, THIRD: 3, CUPID: 3
    };

    static PRIORITY = {
        NO: 0, CUPID: -1, GUARD: 2, WEREWOLF: 3, SEER: 4, WITCH: 5, HUNTER: 6, KNIGHT: -7, IDIOT: -8
    };

    static characters = new Map()
        .set("平民", new Character(4, Core.PRIORITY.NO, Core.CAMP.COMMONER, true))
        .set("预言家", new Character(1, Core.PRIORITY.SEER, Core.CAMP.GOOD))
        .set("女巫", new Character(1, Core.PRIORITY.WITCH, Core.CAMP.GOOD))
        .set("猎人", new Character(1, Core.PRIORITY.HUNTER, Core.CAMP.GOOD))
        .set("守卫", new Character(0, Core.PRIORITY.GUARD, Core.CAMP.GOOD))
        .set("白痴", new Character(1, Core.PRIORITY.IDIOT, Core.CAMP.GOOD))
        .set("骑士", new Character(0, Core.PRIORITY.KNIGHT, Core.CAMP.GOOD))
        .set("狼人", new Character(4, Core.PRIORITY.WEREWOLF, Core.CAMP.WEREWOLF, true))
        .set("狼王", new Character(0, Core.PRIORITY.WEREWOLF, Core.CAMP.WEREWOLF, true))
        .set("白狼王", new Character(0, Core.PRIORITY.WEREWOLF, Core.CAMP.WEREWOLF, true))
        .set("丘比特", new Character(0, Core.PRIORITY.CUPID, Core.CAMP.CUPID));

    static players = [];

    static addPlayer(name, character, priority) {
        Core.players.push(new Player(Core.players.length, name, character, priority));
    }

    static shufflePlayers() {
        shuffle(Core.players);
        Core.players.splice(0, 0, null);
        Core.players.forEach((player, index) => {
            if (player !== null) {
                player.id = index;
            }
        });
    }
}

export default Core;