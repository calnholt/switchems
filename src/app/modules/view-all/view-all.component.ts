import { Component, OnInit } from '@angular/core';
import { MonsterComplete } from '../monster/model/monster';
import { loadMonsters } from '../import/json-to-obj';

@Component({
  selector: 'view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss']
})
export class ViewAllComponent implements OnInit {

  allMonsters = Array<MonsterComplete>();

  constructor() { }

  ngOnInit() {
    this.allMonsters = loadMonsters();
  }

  getFilteredMonsters(): Array<MonsterComplete> {
    return this.allMonsters;
  }

}
