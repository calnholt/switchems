import { MonsterService } from './../monster/monster.service';
import { MonsterComplete } from './../monster/model/monster';
import { Component, OnInit } from '@angular/core';
import { loadMonsters } from '../import/json-to-obj';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { TERM_KEYS } from 'src/app/types/dataTypes';

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
  selectedTerms = {terms: Array<string>()};
  termOptions = Array<string>();
  constructor(
    private router: Router,
    private monsterService: MonsterService,
    ) { }

  ngOnInit() {
    const allMonsters: MonsterComplete[] = this.monsterService.getMonsters();
    this.toggleAll(allMonsters);
    this.allMonsters = allMonsters;
    TERM_KEYS.forEach(term => {
      this.termOptions.push(`${term.substring(1, 2).toUpperCase()}${term.substring(2, term.length - 1).toLowerCase()}`);
    });
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
          monster.referenceFlg = action.isSelected || monster.referenceFlg;
        } else {
          action.isSelected = false;
        }
      });
      monster.buffs.forEach(buff => {
        if (buff.lastUpdated) {
          const lastUpdated = new Date(buff.lastUpdated);
          buff.isSelected = lastUpdated > printDate;
        } else {
          buff.isSelected = false;
        }
      });
    });
  }

  onTermSelect() {
    this.allMonsters.forEach(monster => {
      this.selectedTerms.terms.forEach(term => {
        const formattedTerm = `~${term.toUpperCase()}~`;
        monster.isSelected = monster.abilityText.includes(formattedTerm) || monster.isSelected;
        monster.actions.forEach(a => a.isSelected = a.abilityText.includes(formattedTerm) || a.isSelected);
        monster.buffs.forEach(b => {
          return b.isSelected = b.buffText.includes(formattedTerm) || b.flipEventText.includes(formattedTerm) || b.isSelected;
        });
      });
    });
  }

}
