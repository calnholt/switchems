import { Action } from 'src/app/modules/monster/model/monster';
import { PLAYER_BOARD_TEXT } from './../../../types/dataTypes';
import { MonsterComplete, Buff, Monster } from './../../monster/model/monster';
import { ToolbarService } from './../../common/components/toolbar/toolbar.service';
import { Component, OnInit } from '@angular/core';
import { convertFromJSON } from '../../import/json-to-obj';

@Component({
  selector: 'app-pnp',
  templateUrl: './pnp.component.html',
  styleUrls: ['./pnp.component.scss']
})
export class PnpComponent implements OnInit {
  CARDS_PER_PAGE: number = 8;
  allCards: (MonsterComplete | Action | Buff)[];
  extraFlg: boolean = false;
  count: number;

  constructor(private toolbarService: ToolbarService) {

  }

  ngOnInit() {
    this.toolbarService.hide();
    this.count = 0;
    const cache = JSON.parse(localStorage.getItem('allMonsters'));
    this.extraFlg = (cache.name === 'PRINT_EXTRA');
    const allMonsters: Array<MonsterComplete> = convertFromJSON(cache.token, true);
    const allCards = [];
    allMonsters.forEach(m => {
      let isReference = m.referenceFlg;
      if (m.isSelected) {
        //let monster: Monster = Object.assign({}, m);
        m['isMonster'] = true;
        m.referenceFlg = false;
        allCards.push(m);
      }
      if (isReference) {
        const ref: Monster = Object.assign({}, m);
        ref.referenceFlg = true;
        allCards.push(ref);
      }
      m.actions.forEach(a => {
        if (a.isSelected) {
          a['isAction'] = true;
          allCards.push(a);
        }
      });
      m.buffs.forEach(b => {
        if (b.isSelected) {
          b['isBuff'] = true;
          allCards.push(b);
        }
      });
    });
    // if (this.extraFlg) {
    //   // adds player boards
    //   for (let i = 0; i < 2; i++) {
    //     PLAYER_BOARD_TEXT.forEach(txt => allCards.push({isPlayerBoard: true, text: txt}));
    //   }
    // }
    this.allCards = allCards;
    this.count = 0;
  }

  isPageBreak() {
    this.count++;
    if ([10,12,14,16].includes(this.count)) {
      if (this.count === 16) {
        this.count = 0;
      }
      return true;
    }
    return false;
  }



}
