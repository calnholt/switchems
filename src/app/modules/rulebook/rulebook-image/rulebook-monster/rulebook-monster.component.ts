import { MonsterComplete } from './../../../monster/model/monster';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rulebook-monster',
  templateUrl: './rulebook-monster.component.html',
  styleUrls: ['./rulebook-monster.component.scss']
})
export class RulebookMonsterComponent implements OnInit {
  @Input() monster: MonsterComplete;
  numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  constructor() { }

  ngOnInit() {
  }

}
