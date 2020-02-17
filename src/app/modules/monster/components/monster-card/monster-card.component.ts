import { MonsterComplete } from 'src/app/modules/monster/model/monster';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.scss']
})
export class MonsterCardComponent implements OnInit {
  @Input() monster: MonsterComplete;
  monsterAbilityHtml: string;
  ELEMENT_LIST: string[] = ['Fire', 'Water', 'Rock', 'Leaf', 'Electric', 'Skull'];
  ICON_PATH: string = './assets/images';
  ROLE_PATH: string = this.ICON_PATH + '/roles';
  ELEMENT_COLOR_PATH: string = this.ICON_PATH + '/elements/color';
  ELEMENT_GRAY_PATH: string = this.ICON_PATH + '/elements/gray';
  CONVERSION_MAP: any = {
    '-2': '--',
    '-1': '-',
    '0': '',
    '1': '+',
    '2': '++',
};
  ELEMENT_MAP: any = {
    Fire: {
      name: 'fire',
      img: `${this.ELEMENT_COLOR_PATH}/fire.png`,
      grayImg: `${this.ELEMENT_GRAY_PATH}/fire.png`,
      advantages: [0, -1, -1, 1, 1, 0],
    },
    Water: {
        name: 'water',
        img: `${this.ELEMENT_COLOR_PATH}/water.png`,
        grayImg: `${this.ELEMENT_GRAY_PATH}/water.png`,
        advantages: [1, 0, 0, -1, -1, 1],
    },
    Rock: {
        name: 'rock',
        img: `${this.ELEMENT_COLOR_PATH}/rock.png`,
        grayImg: `${this.ELEMENT_GRAY_PATH}/rock.png`,
        advantages: [1, 0, 0, -1, 1, -1],
    },
    Leaf: {
        name: 'leaf',
        img: `${this.ELEMENT_COLOR_PATH}/leaf.png`,
        grayImg: `${this.ELEMENT_GRAY_PATH}/leaf.png`,
        advantages: [-1, 1, 1, 0, 0, -1],
    },
    Electric: {
        name: 'elec',
        img: `${this.ELEMENT_COLOR_PATH}/elec.png`,
        grayImg: `${this.ELEMENT_GRAY_PATH}/elec.png`,
        advantages: [-1, 1, -1, 0, 0, 1],
    },
    Skull: {
        name: 'skull',
        img: `${this.ELEMENT_COLOR_PATH}/skull.png`,
        grayImg: `${this.ELEMENT_GRAY_PATH}/skull.png`,
        advantages: [0, -1, 1, 1, -1, 0],
    }
  };

  VARIOUS_ICON_DIRECTORY: string = './assets/images/symbols/';
  ELEMENT_ICON_DIRECTORY: string = './assets/images/elements/color/';

  TERMS_MAP: any = {
    '~BURN~': 'Burned monsters gain -1[ATK]. Burned [L] [R] [S] monsters gain -2[ATK] instead.',
    '~SUCCESS~': 'Unsuccessful attacks do nothing.',
    '~FLINCH~':	'Prevent the targeted monster\'s attack if this attack is faster speed.',
    '~PARALYZE~': 'Paralyzed monsters have -2[SPD] and all of their attacks have [2]: This attack is successful.',
    '~LEECH~': 'At the end of each turn, deal 1[ATK] to the leeched monster. If your active monster '
      + 'is [L], heal 1[HP]. Stacks up to three. Remove on switch.',
    '~FATIGUE~': 'Fatigued monsters gain -1[DEF]. Fatigued [W] [E] [F] monsters can\'t use buff cards.',
    '~PREVENT ESC~': 'Cannot be prevented with Can\'t Escape!',
    '~STATUS~': 'Paralyze, burn, leech, etc.',
    '~SINGLE~':	'Recharges on switch.',
    '~CONSECUTIVE~': 'Cannot be used consecutively.',
    '~STUN~': 'Stunned monsters cannot switch.',
    '~RECOIL~': 'Recoil damage cannot be prevented and still occurs if the targeted monster protects.',
    '~CURSE~': 'If this card is flipped for a [X] effect, that monster is dealt 1[ATK].'
  };

  IMG_MAP = {
    '[ATK]': this.VARIOUS_ICON_DIRECTORY + 'attack.png',
    '[PH]': this.VARIOUS_ICON_DIRECTORY + 'physical.png',
    '[SP]': this.VARIOUS_ICON_DIRECTORY + 'special.png',
    '[+]': this.VARIOUS_ICON_DIRECTORY + 'draw.png',
    '[B]': this.VARIOUS_ICON_DIRECTORY + 'buff.png',
    '[-]': this.VARIOUS_ICON_DIRECTORY + 'pay.png',
    '[1]': this.VARIOUS_ICON_DIRECTORY + '1.png',
    '[2]': this.VARIOUS_ICON_DIRECTORY + '2.png',
    '[3]': this.VARIOUS_ICON_DIRECTORY + '3.png',
    '[DEF]': this.VARIOUS_ICON_DIRECTORY + 'defense.png',
    '[TA]': this.VARIOUS_ICON_DIRECTORY + 'aura.png',
    '[X]': this.VARIOUS_ICON_DIRECTORY + 'x.png',
    '[SUCC]': this.VARIOUS_ICON_DIRECTORY + 'success.png',
    '[FAIL]': this.VARIOUS_ICON_DIRECTORY + 'fail.png',
    '[SPD]': this.VARIOUS_ICON_DIRECTORY + 'speed.png',
    '[F]': this.ELEMENT_ICON_DIRECTORY + 'fire.png',
    '[W]': this.ELEMENT_ICON_DIRECTORY + 'water.png',
    '[L]': this.ELEMENT_ICON_DIRECTORY + 'leaf.png',
    '[R]': this.ELEMENT_ICON_DIRECTORY + 'rock.png',
    '[E]': this.ELEMENT_ICON_DIRECTORY + 'elec.png',
    '[S]': this.ELEMENT_ICON_DIRECTORY + 'skull.png',
    '[ST]': this.VARIOUS_ICON_DIRECTORY + 'status.png',
    '[REAC]': this.VARIOUS_ICON_DIRECTORY + 'reaction.png',
    '[HP]': this.VARIOUS_ICON_DIRECTORY + 'heart.png',
  };

  TERMS_ARRAY: string[] = [];
  IMG_ARRAY: string[] = [];

  TERM_CSS: string = 'term';
  ABILITY_IMG_CSS: string = 'term-img';

  ngOnInit() {
    this.monsterAbilityHtml = this.monster.abilityText;
  }

  constructor() {
    Object.keys(this.TERMS_MAP).forEach(term => this.TERMS_ARRAY.push(term));
    Object.keys(this.IMG_MAP).forEach(img => this.IMG_ARRAY.push(img));
  }

  getEffectivenessArray(monster: MonsterComplete) {
    const arrs = [].concat(monster.elementLks.map((el: string) => this.ELEMENT_MAP[el].advantages));
    const totals = [0, 0, 0, 0, 0, 0];
    arrs.forEach(arr => {arr.forEach((num: number, i: number) => {totals[i] += num; }); });
    const values = totals.map(num => {
        if (num !== 0) {
            return num * -1;
        } else {
            return num;
        }
    });
    const out: string[] = [];
    values.forEach((num: number, i: number) => out.push(this.CONVERSION_MAP[num]));
    return out;
  }

  hasElement(element: string) {
    return this.monster.elementLks.includes(element);
  }

  getElementColorImg(element: string) {
    return `${this.ELEMENT_COLOR_PATH}/${element.toLocaleLowerCase()}.png`;
  }

  getElementGrayImg(element: string) {
    return `${this.ELEMENT_GRAY_PATH}/${element.toLocaleLowerCase()}.png`;
  }

  getRoleIcon() {
    return `${this.ROLE_PATH}/${this.monster.roleLk.toLocaleLowerCase()}.png`;
  }

  getHpIcon() {
    return `${this.ICON_PATH}/symbols/hp/${this.monster.hp}.png`;
  }

  getAbilityText() {
    let innerHtml = this.monster.abilityText;
    this.TERMS_ARRAY.forEach((term: string) => {
      while (innerHtml.includes(term)) {
          const html = `<br><span class="${this.TERM_CSS}">(${this.TERMS_MAP[term]})</span>`;
          innerHtml = innerHtml.replace(term, html);
      }
    });
    this.IMG_ARRAY.forEach((img: string) => {
      while (innerHtml.includes(img)) {
          const html = `<img src="${this.IMG_MAP[img]}" class="${this.ABILITY_IMG_CSS}">`;
          innerHtml = innerHtml.replace(img, html);
      }
    });
    return innerHtml;
  }

}
