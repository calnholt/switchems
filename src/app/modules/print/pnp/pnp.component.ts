import { STANDARD_BUFFS } from './../../../types/dataTypes';
import { MonsterComplete, Buff } from './../../monster/model/monster';
import { ToolbarService } from './../../common/components/toolbar/toolbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pnp',
  templateUrl: './pnp.component.html',
  styleUrls: ['./pnp.component.scss']
})
export class PnpComponent implements OnInit {
  CARDS_PER_PAGE: number = 8;
  allCards: Array<any>;
  allMonsters: MonsterComplete[];
  extraFlg: boolean = false;
  count: number;

  constructor(private toolbarService: ToolbarService) {

  }

  ngOnInit() {
    this.toolbarService.hide();
    this.count = 0;
    const cache = JSON.parse(localStorage.getItem('allMonsters'));
    this.extraFlg = (cache.name === 'PRINT_EXTRA');
    this.allMonsters = cache.token;
    const allCards = [];
    this.allMonsters.forEach(m => {
      if (m.isSelected) {
        m['isMonster'] = true;
        allCards.push(m);
      }
      m.actions.forEach(a => {
        if (a.isSelected) {
          a['isAction'] = true;
          a.monsterName = m.monsterName;
          allCards.push(a);
        }
      });
      m.buffs.forEach(b => {
        if (b.isSelected) {
          b['isBuff'] = true;
          b.monsterName = m.monsterName;
          allCards.push(b);
        }
      });
    });
    if (this.extraFlg) {
      STANDARD_BUFFS.forEach(b => {
        b['isBuff'] = true;
        allCards.push(b);
        allCards.push(b);
      });
    }
    this.allCards = allCards;
    this.count = 0;
  }

  isPageBreak() {
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
