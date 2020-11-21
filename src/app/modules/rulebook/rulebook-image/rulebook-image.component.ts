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

  constructor() {
  }

  ngOnInit() {
    this.setAttackAction();
  }

  setAttackAction(): void {
    if (this.monster) {
      const attacks = this.monster.actions.filter(a => a.attack && (a.discard || a.buff || a.draw) && a.abilityText);
      this.action = attacks[Math.floor(Math.random() * attacks.length)];
    }
  }

}
