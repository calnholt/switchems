import { getAbilityText } from './../../common/cards';
import { Component, OnInit } from '@angular/core';
import { SYMBOLS } from 'src/app/constants';
import { ViewEncapsulation } from '@angular/compiler/src/core';
import { Path } from '../../common/models/common';

@Component({
  selector: 'goop',
  templateUrl: './goop.component.html',
  styleUrls: ['/../monster-buff/monster-buff/monster-buff.component.scss', './goop.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GoopComponent implements OnInit {

  goopText: string = 'Remove this card from your deck.';

  constructor() { }

  ngOnInit() {
  }

  getAbilityText(): string {
    return getAbilityText(this.goopText, 'term', 'term-ing');
  }

  getBuffImagePath(): Path {
    return `${SYMBOLS}goop.png`;
  }

}
