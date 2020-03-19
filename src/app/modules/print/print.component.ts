import { MonsterComplete } from './../monster/model/monster';
import { Component, OnInit } from '@angular/core';
import { loadMonsters } from '../import/json-to-obj';

@Component({
  selector: 'print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {
  allMonsters = Array<MonsterComplete>();
  constructor() { }

  ngOnInit() {
    this.allMonsters = loadMonsters();
  }

}
