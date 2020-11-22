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
      items: ['Both players secretly place their action cube on one of the actions on '
      + 'their action boards, placing all relevant cards on the buffs, discards, and hand sections.']
    },
    {
      title: 'Action Phase',
      items: ['Both players reveal their selected actions and then resolve them in this order:'],
      subOrderedItems: [
        'Pre-Action buffs',
        'Standard actions',
        'Switch actions',
        'Monster actions',
        'Post-Action buffs',
      ],
    },
    {
      title: 'End Phase',
      items: [
        'Activate end of turn abilities.',
        'Remove one time counter from each Team Aura.',
        'Remove one [DEF][PQ] from your active monster, if applicable.',
        'Draw a card.',
      ]
    },
  ];

  constructor() { }

  getFormattedText(text: string): string {
    return getAbilityText(text, this.TERM_CSS, this.ABILITY_IMG_CSS);
  }


}
