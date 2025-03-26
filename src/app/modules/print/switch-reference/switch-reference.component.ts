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
      'Heal 2[HP] from the monster that is switching out.',
      'The monster switching in gains +2[DEF] this turn against attacks of your chosen attack type ([MELEE] or [RANGED]).'
    ];

  constructor() { }

  ngOnInit() {
  }

  getFormattedText(text: string): string {
    return getAbilityText(text, this.TERM_CSS, this.ABILITY_IMG_CSS);
  }

}
