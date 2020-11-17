import { Role, ElemType, BuffTiming } from './../../../types/dataTypes';

export class GUI {
    isSelected?: boolean;
    isHighlighted?: boolean;
    isHovered?: boolean;
    isExtraBoardHovered?: boolean;
}

export class Card extends GUI {
    monsterId?: number;
    monsterName?: string;
    description?: string;
    comments?: string;
    playtestNotes?: string;
    unityFlg?: boolean;
    lastUpdated?: string;
}

export class Monster extends Card {
    elements: Array<ElemType> = new Array<ElemType>();
    abilityName: string;
    abilityText?: string;
    hp: number;
    role: Role;
    referenceFlg?: boolean = true;
    complexity: number;
    promiseDescription?: string;
    extraBoard?: string;
    initiative: number;
    savedFlg?: boolean;
}

export class MonsterComplete extends Monster {
    actions: Action[] = [];
    buffs: Buff[] = [];
}

export class Buff extends Card {
    monsterName?: string;
    buffName?: string = null;
    timing: BuffTiming = null;
    buffText: string = null;
    flipEventText?: string = null;
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
    number: number;
    modifier?: number;
    auraDuration?: number = 0;
    statusFlg?: boolean = false;
}
