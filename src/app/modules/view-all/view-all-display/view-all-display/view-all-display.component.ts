import { Buff, Action } from './../../../monster/model/monster';
import { loadMonsters } from './../../../import/json-to-obj';
import { MonsterComplete } from 'src/app/modules/monster/model/monster';
import { Component, OnInit } from '@angular/core';

class SelectedCard {
  monsterId?: number;
  buff?: Buff;
  action?: Action;
  index?: number;
}

@Component({
  selector: 'view-all-display',
  templateUrl: './view-all-display.component.html',
  styleUrls: ['./view-all-display.component.scss']
})

export class ViewAllDisplayComponent implements OnInit {
  monsters: Array<MonsterComplete>;
  selectedCard: SelectedCard;
  constructor() { }

  ngOnInit() {
    this.monsters = [loadMonsters(), loadMonsters(), loadMonsters()];
    this.monsters[1].monsterId = 2;
    this.monsters[2].monsterId = 3;
    this.selectedCard = new SelectedCard();
    this.selectedCard.monsterId = null;
    this.selectedCard.action = null;
    this.selectedCard.buff = null;
  }

  mouseoverCard(monster: MonsterComplete, index: number, isAction: boolean) {
    this.selectedCard.monsterId = monster.monsterId;
    this.selectedCard.index = index;
    if (isAction) {
      this.selectedCard.action = monster.actions[index];
    } else {
      this.selectedCard.buff = monster.buffs[index];
    }
  }

  mouseoutCard() {
    this.selectedCard.action = null;
    this.selectedCard.buff = null;
    this.selectedCard.monsterId = null;
  }

  isShowMonster(monster: MonsterComplete) {
    if (this.selectedCard.monsterId === null) {
      return true;
    }
    return (this.selectedCard.monsterId !== null && this.selectedCard.monsterId !== monster.monsterId);
  }

}
