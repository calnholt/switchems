import { Buff, Action } from './../../../monster/model/monster';
import { loadMonsters } from './../../../import/json-to-obj';
import { MonsterComplete } from 'src/app/modules/monster/model/monster';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-all-display',
  templateUrl: './view-all-display.component.html',
  styleUrls: ['./view-all-display.component.scss']
})

export class ViewAllDisplayComponent implements OnInit {
  monsters: Array<MonsterComplete>;
  constructor() { }

  ngOnInit() {
    this.monsters = loadMonsters();
  }

  mouseoverAction(action: Action) {
    action.isSelected = true;
  }

  isShowMonster(monster: MonsterComplete) {
    const isActionSelected = monster.actions.some(a => a.isSelected);
    const isBuffSelected = monster.buffs.some(b => b.isSelected);
    return !isActionSelected && !isBuffSelected;
  }

}
