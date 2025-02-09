import { Action } from 'src/app/modules/monster/model/monster';
import { PLAYER_BOARD_TEXT } from './../../../types/dataTypes';
import { MonsterComplete, Buff, Monster } from './../../monster/model/monster';
import { ToolbarService } from 'card-builder-framework';
import { Component, OnInit } from '@angular/core';
import { convertFromJSON } from '../../import/json-to-obj';
import { MonsterService } from '../../monster/monster.service';
import { GOOP } from '../../monster/extra-board/extra-board.component';

export interface PnpCard {
  card?: any;
  type: 'MONSTER' | 'ACTION' | 'BUFF' | 'REFERENCE' | 'AURA' | 'GOOP' | 'ACTION_BOARD' | 'STAT_CUBE_BOARD' | 'SPACER'
}

@Component({
  selector: 'app-pnp',
  templateUrl: './pnp.component.html',
  styleUrls: ['./pnp.component.scss']
})
export class PnpComponent implements OnInit {
  CARDS_PER_PAGE: number = 8;
  allCards: PnpCard[];
  extraFlg: boolean = false;
  count: number;

  constructor(
    private toolbarService: ToolbarService,
    private monsterService: MonsterService,
  ) {

  }

  ngOnInit() {
    this.toolbarService.hide();
    this.count = 0;
    // const cache = JSON.parse(localStorage.getItem('allMonsters'));
    // this.extraFlg = (cache.name === 'PRINT_EXTRA');
    const allMonsters: Array<MonsterComplete> = this.monsterService.getMonsters();
    const allCards: PnpCard[]  = [];
    allMonsters.forEach(m => {
      allCards.push({ card: m, type: 'MONSTER' });
      allCards.push({ card: m, type: 'REFERENCE' });
      if (m.teamAura) {
        if (m.teamAura.copies) {
          for (let i = 0; i < m.teamAura.copies; i++) {
            allCards.push({ card: m.teamAura, type: 'AURA' });
          }
        }
        else {
          allCards.push({ card: m.teamAura, type: 'AURA' });
        }
      }
      m.actions.forEach(a => {
        allCards.push({ card: a, type: 'ACTION' });
      });
      m.buffs.forEach(b => {
        allCards.push({ card: b, type: 'BUFF' });
      });
      if (m.monsterName === 'Oozygoopz') {
        allCards.push({ card: GOOP, type: 'BUFF' });
        allCards.push({ card: GOOP, type: 'BUFF' });
        allCards.push({ card: GOOP, type: 'BUFF' });
        allCards.push({ card: GOOP, type: 'BUFF' });
        allCards.push({ card: GOOP, type: 'BUFF' });
        allCards.push({ card: GOOP, type: 'BUFF' });
      }
    });
    allCards.push({ type: 'ACTION_BOARD' });
    allCards.push({ type: 'ACTION_BOARD' });
    // allCards.push({ type: 'STAT_CUBE_BOARD' @media print
    // allCards.push({ isReferenceCard: true });
    // allCards.push({ isReferenceCard: true });
    // allCards.push({ isSwitchReferenceCard: true });
    // allCards.push({ isSwitchReferenceCard: true });
    // allCards.push({ isStatusReferenceCard: true });
    // allCards.push({ isStatusReferenceCard: true });
    // GOOP
    // for (let i = 0; i < 4; i++) {
    //   allCards.push({ isGoop: true });
    // }
    const extraSlots = allCards.length % 4;
    if (extraSlots) {
      for (let i = 0; i < extraSlots; i++) {
        allCards.push({ type: 'SPACER' });
      }
    }
    this.allCards = allCards;
    this.count = 0;
  }

  isPageBreak() {
    this.count++;
    if ([4, 5, 6, 7].includes(this.count)) {
      if (this.count === 7) {
        this.count = 0;
      }
      return true;
    }
    return false;
  }



}
