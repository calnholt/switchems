import { Monster } from './monster';
import { MatSelectChange } from '@angular/material/select';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {Component, ViewChild, OnInit} from '@angular/core';
import {take} from 'rxjs/operators';

@Component({
  selector: 'monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss']
})
export class MonsterComponent implements OnInit {
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  monster: Monster;
  prevElements: string[];
  elementList: string[] = ['Water', 'Fire', 'Leaf', 'Rock', 'Electricity', 'Death'];
  roleList: string[] = ['Warrior', 'Assassin', 'Technical', 'Tank', 'Support', 'Tricky'];

  constructor() {
    this.populateMonster();
  }

  ngOnInit() {

  }

  populateMonster() {
    this.monster = new Monster();
    this.monster.monsterId = 1;
    this.monster.monsterName = 'Cleansitoad';
    this.monster.elementLks = ['Water'];
    this.monster.abilityName = 'Clear Mind';
    this.monster.abilityText = 'When this monster enters the battlefield, '
    + 'you may shuffle your discard pile into your deck. Then, look at the top three cards of your deck. '
    + 'You may put any number back on top or on the bottom in any order.';
    this.monster.hp = 12;
    this.monster.roleLk = 'Technical';
    this.prevElements = this.monster.elementLks;
    console.log(this.monster);
  }

  elementChanged(event: MatSelectChange) {
    if (this.prevElements.length < 2) {
      this.monster.elementLks = event.value;
      this.prevElements = this.monster.elementLks;
    } else {
      this.monster.elementLks = this.prevElements;
    }
  }

}
