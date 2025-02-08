import { getAbilityText } from './../../common/cards';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Css } from 'src/app/types/dataTypes';

@Component({
  selector: 'reference-card',
  templateUrl: './reference-card.component.html',
  styleUrls: ['./reference-card.component.scss'],
  // needed to render [innerHTML] class styling
  encapsulation: ViewEncapsulation.None,
})
export class ReferenceCardComponent {
  TERM_CSS: Css = 'term';
  ABILITY_IMG_CSS: Css = 'term-img';

  referenceCardText: any = [
    {
      title: 'Selection Phase',
      items: ['Secretly place your action cube on one of the actions on '
      + 'your action board, placing all relevant cards on the buffs, discards, and hand sections.']
    },
    {
      title: 'Action Phase',
      items: ['Reveal your selected actions and then resolve them in this order:'],
      subOrderedItems: [
        'Apply used [PQ]',
        'Buffs',
        'Switch actions',
        'Monster actions',
        'Basic actions'
      ],
    },
    {
      title: 'End Phase',
      items: [
        'Activate end of turn abilities.',
        'Move all played buff cards and discards from you player board to your discard pile, and retrieve your facedown hand.',
        'Remove one time counter from your active <b>Team Aura</b> [TA], if applicable.',
        'Draw [+] one card.',
      ]
    },
  ];

  constructor() { }

  getFormattedText(text: string): string {
    return getAbilityText(text, this.TERM_CSS, this.ABILITY_IMG_CSS);
  }


}
