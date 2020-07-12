import { Monster } from './../../monster/model/monster';
import { MonsterComplete, Buff, Action } from 'src/app/modules/monster/model/monster';
import { loadMonsters } from 'src/app/modules/import/json-to-obj';
import { Component, OnInit } from '@angular/core';
import { STANDARD_BUFFS } from 'src/app/types/dataTypes';
import html2canvas from 'html2canvas';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
  allCards: (MonsterComplete | Action | Buff)[];
  currentCard: any;
  count: number;
  actionBoard: number = 1;
  statCubeBoard: number = 1;
  boardCount: number = 0;
  timeout: number = 1500;
  unityFlg = false;
  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let allMonsters = loadMonsters();
    // allMonsters = [allMonsters[5]]; // testing
    const allCards = [];
    allMonsters.forEach(m => {
      m['isMonster'] = true;
      m.unityFlg = this.unityFlg;
      allCards.push(m);
      const ref = Object.assign({}, m);
      ref.referenceFlg = false;
      ref.unityFlg = this.unityFlg;
      allCards.push(ref);
      m.actions.forEach(a => {
        a['isAction'] = true;
        a.unityFlg = this.unityFlg;
        allCards.push(a);
      });
      m.buffs.forEach(b => {
        b['isBuff'] = true;
        b.unityFlg = this.unityFlg;
        allCards.push(b);
      });
    });
    STANDARD_BUFFS.forEach(b => {
      b['isBuff'] = true;
      b.unityFlg = this.unityFlg;
      allCards.push(b);
    });
    this.allCards = allCards;
    this.currentCard = this.allCards[0];
    this.count = 0;
    setTimeout((this.downloadCards).bind(this), this.timeout);
  }

  // function called by timeout
  // recursively renders each card individually and saves each as a .png file
  // workes best on Safari due to styling issues
  // when rendering more than one on the screen, the downloads looked weird
  // this was my best hacky-ish solution :)
  downloadCards() {
    if (this.count > this.allCards.length) {
      return;
    }
    html2canvas(document.querySelector('.card-container')).then(canvas => {
      const a = document.createElement('a');
      a.setAttribute('download', `${this.getFileName()}.png`);
      a.setAttribute('href', canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream'));
      a.click();
      if (this.count < this.allCards.length) {
        this.currentCard = this.allCards[this.count++];
        setTimeout((this.downloadCards).bind(this), this.timeout);
      } else if (this.count < this.allCards.length + this.statCubeBoard + this.actionBoard) {
        this.currentCard = new MonsterComplete();
        this.boardCount++;
        setTimeout((this.downloadCards).bind(this), this.timeout);
      }
    });
  }

  getFileName(): string {
    let fileName: string = this.currentCard.monsterName;
      if (this.boardCount === 0) {
        fileName = this.currentCard.monsterName;
        if (this.currentCard['isMonster'] && (this.currentCard as Monster).referenceFlg) {
          fileName += ' - Reference';
        }
        if (this.currentCard['isAction']) {
          fileName += ' - ' + (this.currentCard as Action).abilityName;
        } else if (this.currentCard['isBuff']) {
          fileName += ' - ' + (this.currentCard as Buff).buffName;
        }
      } else if ([1].includes(this.boardCount)) {
        fileName = 'Action Board';
      } else if ([2].includes(this.boardCount)) {
        fileName = 'Stat Cube Board';
      }
    return fileName;
  }



}
