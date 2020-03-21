import { MonsterComplete } from './../../monster/model/monster';
import { ToolbarService } from './../../common/components/toolbar/toolbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pnp',
  templateUrl: './pnp.component.html',
  styleUrls: ['./pnp.component.scss']
})
export class PnpComponent implements OnInit {
  CARDS_PER_PAGE: number = 8;
  allCards: Array<any> = new Array();
  allMonsters: MonsterComplete[];
  count: number;

  constructor(private toolbarService: ToolbarService) { }

  ngOnInit() {
    this.toolbarService.hide();
    this.count = 0;
    const cache = JSON.parse(localStorage.getItem('allMonsters'));
    this.allMonsters = cache.token;
    this.allMonsters.forEach(m => {
      if (m.isSelected) {
        m['isMonster'] = true;
        this.allCards.push(m);
      }
      m.actions.forEach(a => {
        if (a.isSelected) {
          a['isAction'] = true;
          a.monsterName = m.monsterName;
          this.allCards.push(a);
        }
      });
      m.buffs.forEach(b => {
        if (b.isSelected) {
          b['isBuff'] = true;
          b.monsterName = m.monsterName;
          this.allCards.push(b);
        }
      });
    });
  }

  isPageBreak(index) {
    this.count++;
    if ([5, 6, 7, 8].includes(this.count)) {
      if (this.count === 8) {
        this.count = 0;
      }
      return true;
    }
    return false;
  }



}
