import { Role, ElemType, BuffTiming, getAdvantages } from './../../../types/dataTypes';

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

    hasElement(elemType: ElemType): boolean {
        return this.elements.includes(elemType);
    }

    getSwitchDefenseValue(): number {
        const effectivenessArray = this.getEffectivenessArray();
        return effectivenessArray.includes(2) ? 6 : 3;
      }

    getEffectivenessArray(): number[] {
        const arrs = [].concat(this.elements.map((el: ElemType) => getAdvantages(el)));
        let totals = [0, 0, 0, 0, 0, 0];
        // arrs.forEach(arr => {arr.forEach((num: number, i: number) => {totals[i] += num; }); });
        if (this.elements.length === 1) {
          totals = arrs[0];
        } else {
          for (let i = 0; i < 6; i++) {
            const elemArr = [];
            for (let j = 0; j < arrs.length; j++) {
              elemArr.push(arrs[j][i]);
            }
            const containsNegative = elemArr.some(e => e < 0);
            const positives = elemArr.filter(e => e > 0);
            if (containsNegative) {
              totals[i] = -1;
            } else if (positives) {
              totals[i] = positives.length;
            } else {
              totals[i] = 0;
            }
          }
        }
        return totals;
      }
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
