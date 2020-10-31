import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'reference-card',
  templateUrl: './reference-card.component.html',
  styleUrls: ['./reference-card.component.scss'],
  // needed to render [innerHTML] class styling
  encapsulation: ViewEncapsulation.None,
})
export class ReferenceCardComponent implements OnInit {

  referenceCardText: any = [
    {
      title: 'Start Phase',
      items: ['All abilities that trigger at the start of turn occur now.']
    },
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
        'Draw a card.',
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
