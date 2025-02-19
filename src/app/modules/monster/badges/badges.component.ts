import { Component, OnInit } from '@angular/core';
import { Badge } from '../badge/badge.model';

export const BADGES: Badge[] = [
  {
    name: 'Speedster',
    uses: 2,
    text: 'When you perform a switch action, <div>[+].</div>',
  },
  {
    name: 'Fortitude',
    text: 'Your monsters have <div>+1[HP].</div>',
  },
  {
    name: 'Protection',
    text: 'You gain an additional +1[DEF] when switch defending.',
  },
  {
    name: 'Restoration',
    rounds: 4,
    text: 'At the end of the fourth round, your active monster heals <div>3[HP].</div>',
  },
]

@Component({
  selector: 'badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {

  badges: Badge[] = BADGES;

  constructor() { }

  ngOnInit(): void {
  }

}
