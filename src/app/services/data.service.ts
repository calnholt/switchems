import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

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
    '[E]': this.ELEMENT_ICON_DIRECTORY + 'electric.png',
    '[S]': this.ELEMENT_ICON_DIRECTORY + 'death.png',
    '[ST]': this.VARIOUS_ICON_DIRECTORY + 'status.png',
    '[REAC]': this.VARIOUS_ICON_DIRECTORY + 'reaction.png',
    '[HP]': this.VARIOUS_ICON_DIRECTORY + 'heart.png',
  };

  ADVANTAGES: any = {
    Fire: {
      advantages: [0, -1, -1, 1, 1, 0],
    },
    Water: {
        advantages: [1, 0, 0, -1, -1, 1],
    },
    Rock: {
        advantages: [1, 0, 0, -1, 1, -1],
    },
    Leaf: {
        advantages: [-1, 1, 1, 0, 0, -1],
    },
    Electric: {
        advantages: [-1, 1, -1, 0, 0, 1],
    },
    Death: {
        advantages: [0, -1, 1, 1, -1, 0],
    },
  };

  getTermsMap() {
    return this.TERMS_MAP;
  }

  getImgMap() {
    return this.IMG_MAP;
  }

  getAdvantages() {
    return this.ADVANTAGES;
  }

  // not currently being used
  parseTextForImages(text: string, css: string) {
    let innerHtml = text;
    const termsArr: string[] = [];
    Object.keys(this.TERMS_MAP).forEach(term => termsArr.push(term));
    this.TERMS_MAP.forEach((term: string) => {
      while (innerHtml.includes(term)) {
          const html = `<br><span class="${css}">(${this.TERMS_MAP[term]})</span>`;
          innerHtml = innerHtml.replace(term, html);
      }
    });
    return innerHtml;
  }

constructor() { }

}
