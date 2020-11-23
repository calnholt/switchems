import { STANDARD_BUFFS } from 'src/app/types/dataTypes';
import { Buff } from 'src/app/modules/monster/model/monster';
import { MonsterComplete, Action } from './../../monster/model/monster';
import { RulebookImageType } from './../rulebook.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rulebook-image',
  templateUrl: './rulebook-image.component.html',
  styleUrls: ['./rulebook-image.component.scss']
})
export class RulebookImageComponent implements OnInit {
  @Input() type: RulebookImageType;
  @Input() monster?: MonsterComplete;
  action: Action;
  buff: Buff;
  cantEscape: Buff = STANDARD_BUFFS[0];

  constructor() {
  }

  ngOnInit() {
    this.setAttackAction();
    this.setBuff();
  }

  setAttackAction(): void {
    if (this.monster) {
      const attacks = this.monster.actions.filter(a => a.attack && (a.discard || a.buff || a.draw) && a.abilityText);
      this.action = attacks[this.getRandomIndex(attacks.length)];
    }
  }

  setBuff(): void {
    if (this.monster) {
      this.buff = this.monster.buffs[this.getRandomIndex(this.monster.buffs.length)];
    }
  }

  getRandomIndex(length: number): number {
    return Math.floor(Math.random() * length);
  }

}
