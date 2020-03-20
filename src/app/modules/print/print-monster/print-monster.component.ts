import { MonsterComplete } from './../../monster/model/monster';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'print-monster',
  templateUrl: './print-monster.component.html',
  styleUrls: ['./print-monster.component.scss']
})
export class PrintMonsterComponent implements OnInit {
  @Input() monster: MonsterComplete;
  isToggleAll: boolean;
  constructor() { }

  ngOnInit() {
    this.isToggleAll = true;
  }

  toggleAll() {
    this.monster.isSelected = this.isToggleAll;
    this.monster.actions.forEach(a => a.isSelected = this.isToggleAll);
    this.monster.buffs.forEach(b => b.isSelected = this.isToggleAll);
  }

}
