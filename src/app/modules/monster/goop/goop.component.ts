import { getAbilityText } from './../../common/cards';
import { Component, OnInit } from '@angular/core';
import { SYMBOLS } from 'src/app/constants';
import { Path } from 'src/app/types/dataTypes';
import { ViewEncapsulation } from '@angular/compiler/src/core';
import { ImageService } from '../../data/image.service';

@Component({
  selector: 'goop',
  templateUrl: './goop.component.html',
  styleUrls: ['/../monster-buff/monster-buff/monster-buff.component.scss', './goop.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GoopComponent implements OnInit {

  goopText: string = 'Remove this card from your deck.';
  goopFlipText: string = 'You may have this attack gain <div><b>recoil</b> 1[ATK].</div> If you do, remove this card from your deck.~RECOIL~'

  constructor(public imageService: ImageService) { }

  ngOnInit() {
  }

  getAbilityText(text: string): string {
    return getAbilityText(text, 'term', 'term-img');
  }

  getBuffImagePath(): Path {
    return `${SYMBOLS}goop-card.png`;
  }

}
