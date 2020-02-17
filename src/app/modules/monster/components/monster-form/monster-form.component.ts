import { FormControl } from '@angular/forms';
import { MonsterComplete } from 'src/app/modules/monster/model/monster';
import { MatSelectChange } from '@angular/material/select';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'monster-form',
  templateUrl: './monster-form.component.html',
  styleUrls: ['./monster-form.component.scss'],
  // needed to render [innerHTML] class styling
  encapsulation: ViewEncapsulation.None,
})
export class MonsterFormComponent implements OnInit {
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  monster: MonsterComplete;
  elements: FormControl;
  elementList: string[] = ['Fire', 'Water', 'Rock', 'Leaf', 'Electric', 'Skull'];
  roleList: string[] = ['Warrior', 'Assassin', 'Technical', 'Tank', 'Support', 'Tricky'];
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

  constructor() {
    this.populateMonster();
    Object.keys(this.TERMS_MAP).forEach(term => this.TERMS_ARRAY.push(term));
    Object.keys(this.IMG_MAP).forEach(img => this.IMG_ARRAY.push(img));
  }

  ngOnInit() {}

  populateMonster() {
    this.monster = new MonsterComplete();
    this.monster.monsterId = 1;
    this.monster.monsterName = 'Cleansitoad';
    this.monster.elementLks = ['Water'];
    this.monster.abilityName = 'Clear Mind';
    this.monster.abilityText = 'When this monster enters the battlefield, '
    + 'you may shuffle your discard pile into your deck. Then, look at the top three cards of your deck. '
    + 'You may put any number back on top or on the bottom in any order.';
    this.monster.hp = 12;
    this.monster.roleLk = 'Technical';
    this.elements = new FormControl();
    this.elements.setValue(this.monster.elementLks);
    console.log(this.monster);
  }

  // restrict number of elements a monster can have to 2
  // this could change
  elementChanged(event: MatSelectChange) {
    if (event.value.length < 3) {
      this.monster.elementLks = event.value;
    } else if (event.value.length > 2) {
      this.elements.setValue(this.monster.elementLks);
    }
  }

  // will need to abstract this for all cards
  convertText(text: string) {
    this.TERMS_ARRAY.forEach((term: string) => {
      while (text.includes(term)){
          const html = `<br><span class="${this.TERM_CSS}?>(${this.TERMS_MAP[term]})</span>`;
          text = text.replace(term, html);
      }
    });
    this.IMG_ARRAY.forEach((img: string) => {
      while (text.includes(img)){
          const html = `<img src="${this.IMG_MAP[img]}" class="${this.ABILITY_IMG_CSS}">`;
          text = text.replace(img, html);
      }
    });
    this.monster.abilityText = text;
  }

}
