import { Role, ElemType, BuffTiming } from './../../../types/dataTypes';

export class GUI {
    isSelected?: boolean;
    isHighlighted?: boolean;
    isHovered?: boolean;
}

export class Card extends GUI {
    monsterId?: number;
    monsterName?: string;
    description?: string;
    comments?: string;
    playtestNotes?: string;
}

export class Monster extends Card {
    elements: Array<ElemType> = new Array<ElemType>();
    abilityName: string;
    abilityText?: string;
    hp: number;
    role: Role;
    referenceFlg?: boolean = true;
}

export class MonsterComplete extends Monster {
    actions: Action[] = [];
    buffs: Buff[] = [];
}

export class Buff extends Card {
    monsterName?: string;
    timing: BuffTiming = null;
    buffText: string = null;
    flipEventText?: string = null;
    critFlg: boolean = false;
    flipEventFlg: boolean = false;
}

export class Action extends Card {
    monsterName?: string;
    abilityName: string = null;
    abilityText?: string = null;
    attack?: number;
    speed?: number;
    element?: ElemType = null;
    buff?: number;
    discard?: number;
    draw?: number;
    modifiers?: (number | string)[] = [0, 0, 0, 0, 0, 0];
    auraDuration?: number = 0;
    statusFlg?: boolean = false;
    reactionFlg?: boolean = false;
}
