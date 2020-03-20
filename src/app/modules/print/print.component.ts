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

  print() {
    localStorage.setItem('allMonsters', JSON.stringify({ token: this.allMonsters, name: 'PRINT' }));
    this.router.navigate(['/pnp']);
  }

}
