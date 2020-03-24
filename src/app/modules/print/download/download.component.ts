import { MonsterComplete, Buff, Action } from 'src/app/modules/monster/model/monster';
import { loadMonsters } from 'src/app/modules/import/json-to-obj';
import { Component, OnInit } from '@angular/core';
import { STANDARD_BUFFS } from 'src/app/types/dataTypes';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
  allCards: (MonsterComplete | Action | Buff)[];
  currentCard: MonsterComplete | Action | Buff;
  count: number;
  timeout: number = 1500;
  constructor() { }

  ngOnInit() {
    let allMonsters = loadMonsters();
    allMonsters = [allMonsters[0]];
    const allCards = [];
    allMonsters.forEach(m => {
      m['isMonster'] = true;
      allCards.push(m);
      m.actions.forEach(a => {
        a['isAction'] = true;
        allCards.push(a);
      });
      m.buffs.forEach(b => {
        b['isBuff'] = true;
        allCards.push(b);
      });
    });
    // STANDARD_BUFFS.forEach(b => {
    //   b['isBuff'] = true;
    //     allCards.push(b);
    //     allCards.push(b);
    // });
    this.allCards = allCards;
    this.currentCard = this.allCards[0];
    this.count = 0;
    setTimeout((this.downloadCards).bind(this), this.timeout);
  }

  // function called by timeout
  // renders each card individually and saves each as a .png file
  // workes best on Safari due to styling issues
  // when rendering more than one on the screen, the downloads looked weird
  // this was my best hacky-ish solution :)
  downloadCards() {
    if (this.count > this.allCards.length) {
      return;
    }
    html2canvas(document.querySelector('.card-container')).then(canvas => {
      const a = document.createElement('a');
      let fileName: string = this.currentCard.monsterName;
      if (this.currentCard['isAction']) {
        fileName += ' - ' + (this.currentCard as Action).abilityName;
      } else if (this.currentCard['isBuff']) {
        fileName += ' - Buff';
      }
      a.setAttribute('download', `${fileName}.png`);
      a.setAttribute('href', canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream'));
      a.click();
      if (this.count <= this.allCards.length) {
        this.currentCard = this.allCards[this.count++];
        setTimeout((this.downloadCards).bind(this), this.timeout);
      }
    });
  }



}
