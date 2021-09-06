import { TERM_CODES } from './../../../types/dataTypes';
import { Component, OnInit } from '@angular/core';
import { Css } from 'src/app/types/dataTypes';
import { getAbilityText } from '../../common/cards';

@Component({
  selector: 'status-reference',
  templateUrl: './status-reference.component.html',
  styleUrls: ['.././switch-reference/switch-reference.component.scss']
})
export class StatusReferenceComponent implements OnInit {

  TERM_CSS: Css = 'term';
  ABILITY_IMG_CSS: Css = 'term-img';

  items: Array<string> = [];

  constructor() { }

  ngOnInit() {
    this.items = TERM_CODES.filter(term => ['~WOUND~', '~FATIGUE~', '~STUN~', '~DRAIN~'].includes(term.key)).map(term => `<b>${term.name}</b> - ${term.value}`);
  }

  getFormattedText(text: string): string {
    return getAbilityText(text, this.TERM_CSS, this.ABILITY_IMG_CSS);
  }
}
