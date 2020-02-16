import { Monster, MonsterHeader } from './../monster/monster';
export class Action extends MonsterHeader {
    abilityName: string;
    abilityText?: string;
    attack?: number;
    speed?: number;
    elementLk?: string;
    buff?: number;
    discard?: number;
    draw?: number;
    modifiers?: number[];
    auraDuration?: number;
    statusFlg?: boolean;
    reactionFlg: boolean;
}
