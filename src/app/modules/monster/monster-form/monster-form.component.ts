import { loadMonsters } from './../../import/json-to-obj';
import { TERM_CODES, IMAGE_CODES, CardTypes } from './../../../types/dataTypes';
import { MonsterComplete } from './../model/monster';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'monster-form',
  templateUrl: './monster-form.component.html',
  styleUrls: ['./monster-form.component.scss'],
  // needed to render [innerHTML] class styling
  encapsulation: ViewEncapsulation.None,
})
export class MonsterFormComponent implements OnInit {
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  monster: MonsterComplete;
  originalMonster: MonsterComplete;
  panelOpenState: false;
  termCodes = TERM_CODES;
  imageCodes = IMAGE_CODES;
  selectedCard: CardTypes = 'MONSTER';
  index: number = 0;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const allMonsters = loadMonsters();
    const monsterName: string = this.route.snapshot.paramMap.get('monsterName');
    this.monster = allMonsters.find(m => m.monsterName === monsterName);
    this.originalMonster = Object.assign({}, this.monster);
  }

  save() {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    const json = JSON.stringify(this.monster, null, 2);
    selBox.value = json;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  selectCard(selection: CardTypes, index: number) {
    this.selectedCard = selection;
    this.index = index;
  }
}
