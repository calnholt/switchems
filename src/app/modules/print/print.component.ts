import { MonsterService } from './../monster/monster.service';
import { MonsterComplete } from './../monster/model/monster';
import { Component, OnInit } from '@angular/core';
import { loadMonsters } from '../import/json-to-obj';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {
  allMonsters = Array<MonsterComplete>();
  extraCardFlg: boolean = false;
  isAllToggle: boolean = true;
  date = new FormControl(new Date());
  constructor(
    private router: Router,
    private monsterService: MonsterService,
    ) { }

  ngOnInit() {
    const allMonsters: MonsterComplete[] = this.monsterService.getMonsters();
    this.toggleAll(allMonsters);
    this.allMonsters = allMonsters;
  }

  toggleAll(allMonsters: MonsterComplete[]) {
    allMonsters.forEach(m => {
      m.isSelected = this.isAllToggle;
      m.referenceFlg = this.isAllToggle;
      m.actions.forEach(a => a.isSelected = this.isAllToggle);
      m.buffs.forEach(b => b.isSelected = this.isAllToggle);
    });
  }

  loadPrevious() {
    const cache = localStorage.getItem('allMonsters');
    if (!cache) {
      return;
    }
    const json = JSON.parse(localStorage.getItem('allMonsters'));
    const token = json.token;
    const allMonsters: MonsterComplete[] = loadMonsters();
    const tokenMap: any = {};
    if (token.length < allMonsters.length) {
      token.forEach(t => tokenMap[t.monsterName] = t);
      allMonsters.forEach(m => {
        if (!tokenMap[m.monsterName]) {
          token.push(m);
        }
      });
    }
    this.allMonsters = token;
  }

  print() {
    let name = 'PRINT';
    if (this.extraCardFlg) {
      name = 'PRINT_EXTRA';
    }
    localStorage.setItem('allMonsters', JSON.stringify({ token: this.allMonsters, name: name }));
    this.router.navigate(['/pnp']);
  }

  printByDate() {
    const printDate = new Date(this.date.value);
    this.allMonsters.forEach(monster => {
      if (monster.lastUpdated) {
        const lastUpdated = new Date(monster.lastUpdated);
        monster.isSelected = lastUpdated > printDate;
        monster.referenceFlg = lastUpdated > printDate;
      } else {
        monster.isSelected = false;
        monster.referenceFlg = false;
      }
      monster.actions.forEach(action => {
        if (action.lastUpdated) {
          const lastUpdated = new Date(action.lastUpdated);
          action.isSelected = lastUpdated > printDate;
        } else {
          action.isSelected = false;
        }
      });
      monster.buffs.forEach(buffs => {
        if (buffs.lastUpdated) {
          const lastUpdated = new Date(buffs.lastUpdated);
          buffs.isSelected = lastUpdated > printDate;
        } else {
          buffs.isSelected = false;
        }
      });
    });
  }

}
