import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Css } from 'src/app/types/dataTypes';
import { getAbilityText } from '../../common/cards';

@Component({
  selector: 'switch-reference',
  templateUrl: './switch-reference.component.html',
  styleUrls: ['./switch-reference.component.scss'],
  // needed to render [innerHTML] class styling
  encapsulation: ViewEncapsulation.None,
})
export class SwitchReferenceComponent implements OnInit {
  TERM_CSS: Css = 'term';
  ABILITY_IMG_CSS: Css = 'term-img';
  items: Array<string> = [
      'Heal 2[HP] OR remove a [STATUS] from the monster that is switching out',
      'Gain [STR]',
      'Remove all [NQ] from your Stat Cube Board',
      'The monster switching in gains +X[DEF] this turn against attacks with elements it is <b>resistant</b> [RESIST] to'
    ];

  constructor() { }

  ngOnInit() {
  }

  getFormattedText(text: string): string {
    return getAbilityText(text, this.TERM_CSS, this.ABILITY_IMG_CSS);
  }

}
