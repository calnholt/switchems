import { Action } from 'src/app/modules/monster/model/monster';
import { PLAYER_BOARD_TEXT } from './../../../types/dataTypes';
import { MonsterComplete, Buff, Monster } from './../../monster/model/monster';
import { ToolbarService } from 'card-builder-framework';
import { Component, OnInit } from '@angular/core';
import { convertFromJSON } from '../../import/json-to-obj';
import { MonsterService } from '../../monster/monster.service';
import { GOOP } from '../../monster/extra-board/extra-board.component';
import { BADGES } from '../../monster/badges/badges.component';

export interface PnpCard {
  card?: any;
  type: 'MONSTER' | 'ACTION' | 'BUFF' | 'REFERENCE' | 'AURA' | 'GOOP' | 'ACTION_BOARD' | 'STAT_CUBE_BOARD' | 'SPACER' | 'BADGE' | 'TURN' | 'BUFF_BOARD' | 'DISCARD_BOARD' | 'HAND_BOARD' | 'SWITCH_REFERENCE'
}

@Component({
  selector: 'app-pnp',
  templateUrl: './pnp.component.html',
  styleUrls: ['./pnp.component.scss']
})
export class PnpComponent implements OnInit {
  CARDS_PER_PAGE: number = 8;
  allCards: PnpCard[];
  teamAuras: PnpCard[];
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
    this.allCards = this.getAllStandardCards();
    this.teamAuras = this.getAllTeamAuras();
    this.count = 0;
  }

  private getAllStandardCards() {
    const allCards: PnpCard[]  = [];
    const allMonsters: Array<MonsterComplete> = this.monsterService.getMonsters();
    allMonsters.forEach(m => {
      allCards.push({ card: m, type: 'MONSTER' });
      allCards.push({ card: m, type: 'REFERENCE' });
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
    for (let i = 0; i < 4; i++) {
    //   allCards.push({ type: 'ACTION_BOARD' });
    //   allCards.push({ type: 'BUFF_BOARD' });
    //   allCards.push({ type: 'DISCARD_BOARD' });
    //   allCards.push({ type: 'HAND_BOARD' });
      allCards.push({ type: 'STAT_CUBE_BOARD' });
      allCards.push({ type: 'SWITCH_REFERENCE' });
      allCards.push({ type: 'TURN' });
    }
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
    // badges
    for (let i = 0; i < 2; i++) {
      BADGES.forEach(b => {
        allCards.push({ card: b, type: 'BADGE' });
      });
    }
    return allCards;
  }

  private getAllTeamAuras() {
    const allMonsters: Array<MonsterComplete> = this.monsterService.getMonsters();
    const allAuras: PnpCard[] = [];
    allMonsters.forEach(m => {
      if (m.teamAura) {
        if (m.teamAura.copies) {
          for (let i = 0; i < m.teamAura.copies; i++) {
            allAuras.push({ card: m.teamAura, type: 'AURA' });
          }
        }
        else {
          allAuras.push({ card: m.teamAura, type: 'AURA' });
        }
      }
    });
    BADGES.forEach(b => {
      allAuras.push({ card: b, type: 'AURA' });
    });
    return allAuras;
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
