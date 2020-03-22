import { MonsterComplete } from './../monster/model/monster';
import { Component, OnInit } from '@angular/core';
import { loadMonsters } from '../import/json-to-obj';
import { Router } from '@angular/router';

@Component({
  selector: 'print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {
  allMonsters = Array<MonsterComplete>();
  extraCardFlg: boolean = false;
  isAllToggle: boolean = true;
  constructor(private router: Router) { }

  ngOnInit() {
    const allMonsters: MonsterComplete[] = loadMonsters();
    this.toggleAll(allMonsters);
    this.allMonsters = allMonsters;
  }

  toggleAll(allMonsters: MonsterComplete[]) {
    allMonsters.forEach(m => {
      m.isSelected = this.isAllToggle;
      m.actions.forEach(a => a.isSelected = this.isAllToggle);
      m.buffs.forEach(b => b.isSelected = this.isAllToggle);
    });
  }

  loadPrevious() {
    const cache = localStorage.getItem('allMonsters');
    if (cache) {
      const json = JSON.parse(localStorage.getItem('allMonsters'));
      this.allMonsters = json.token;
    }
  }

  print() {
    let name = 'PRINT';
    if (this.extraCardFlg) {
      name = 'PRINT_EXTRA';
    }
    localStorage.setItem('allMonsters', JSON.stringify({ token: this.allMonsters, name: name }));
    this.router.navigate(['/pnp']);
  }

}
