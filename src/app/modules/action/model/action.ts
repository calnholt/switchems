import { Monster, Card } from 'src/app/modules/monster/model/monster';
export class Action extends Card {
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
