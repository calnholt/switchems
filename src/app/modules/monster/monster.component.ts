import { element } from 'protractor';
import { Monster, MonsterHeader } from './monster';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css']
})
export class MonsterComponent implements OnInit {
  monster: Monster;

  constructor() {
    this.populateMonster();
  }

  ngOnInit() {

  }

  populateMonster() {
    this.monster = new Monster();
    this.monster.monsterId = 1;
    this.monster.monsterName = 'Cleansitoad';
    this.monster.elementLks = ['W'];
    this.monster.abilityName = 'Clear Mind';
    this.monster.abilityText = 'When this monster enters the battlefield, '
    + 'you may shuffle your discard pile into your deck. Then, look at the top three cards of your deck.'
    + 'You may put any number back on top or on the bottom in any order.';
    this.monster.hp = 12;
    this.monster.roleLk = 'TECHNICAL';
    console.log(this.monster);
  }

}
