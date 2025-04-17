import { MonsterComplete, Action } from './../../monster/model/monster';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'view-all-display',
  templateUrl: './view-all-display.component.html',
  styleUrls: ['./view-all-display.component.scss']
})

export class ViewAllDisplayComponent implements OnInit {
  @Input() monsters: Array<MonsterComplete>;
  constructor() { }

  ngOnInit() { }

  mouseoverAction(action: Action) {
    action.isSelected = true;
  }

  isShowMonster(monster: MonsterComplete) {
    const isActionHovered = monster.actions.some(a => a.isHovered);
    const isBuffHovered = monster.buffs.some(b => b.isHovered);
    const isExtraBoardHovered = monster.extraBoard && monster.isExtraBoardHovered;
    const isTeamAuraHovered = monster.teamAura && monster.isTeamAuraHovered;
    return !isActionHovered && !isBuffHovered && !isExtraBoardHovered && !isTeamAuraHovered;
  }

}
