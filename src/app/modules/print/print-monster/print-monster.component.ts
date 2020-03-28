import { MonsterComplete } from './../../monster/model/monster';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'print-monster',
  templateUrl: './print-monster.component.html',
  styleUrls: ['./print-monster.component.scss']
})
export class PrintMonsterComponent implements OnInit, OnChanges {
  @Input() monster: MonsterComplete;
  @Input() isParentToggle: boolean;
  isToggleAll: boolean;
  constructor() { }
  
  ngOnInit() {
    this.isToggleAll = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.isToggleAll = this.isParentToggle;
  }

  toggleAll() {
    this.monster.isSelected = this.isToggleAll;
    this.monster.referenceFlg = this.isToggleAll;
    this.monster.actions.forEach(a => a.isSelected = this.isToggleAll);
    this.monster.buffs.forEach(b => b.isSelected = this.isToggleAll);
  }

}
