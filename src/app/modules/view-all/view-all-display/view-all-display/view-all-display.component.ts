import { Buff, Action } from './../../../monster/model/monster';
import { loadMonsters } from './../../../import/json-to-obj';
import { MonsterComplete } from 'src/app/modules/monster/model/monster';
import { Component, OnInit } from '@angular/core';

class SelectedCard {
  monsterId?: number;
  buff?: Buff;
  action?: Action;
  index?: number;
  isLocked?: boolean;
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
    this.monsters = loadMonsters();
    this.selectedCard = new SelectedCard();
    this.selectedCard.monsterId = null;
    this.selectedCard.action = null;
    this.selectedCard.buff = null;
  }

  lockSelectedCard(action: Action, buff: Buff) {
    if (action) {
      if (this.selectedCard.isLocked) {
        this.selectedCard.action = action;
      }
    }
    this.selectedCard.isLocked = !this.selectedCard.isLocked;
  }

  mouseoverAction(action: Action) {
    action.isSelected = true;
  }

  mouseoverCard(monster: MonsterComplete, index: number, isAction: boolean) {
    if (this.selectedCard.isLocked) {
      return;
    }
    this.selectedCard.monsterId = monster.monsterId;
    this.selectedCard.index = index;
    if (isAction) {
      this.selectedCard.action = monster.actions[index];
    } else {
      this.selectedCard.buff = monster.buffs[index];
    }
  }

  mouseoutCard() {
    if (!this.selectedCard.isLocked) {
      this.selectedCard.action = null;
      this.selectedCard.buff = null;
      this.selectedCard.monsterId = null;
    }
  }

  isShowMonster(monster: MonsterComplete) {
    const isActionSelected = monster.actions.some(a => a.isSelected);
    const isBuffSelected = monster.buffs.some(b => b.isSelected);
    return !isActionSelected && !isBuffSelected;
  }

}
