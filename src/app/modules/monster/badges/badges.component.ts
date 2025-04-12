import { Component, OnInit } from '@angular/core';
import { Badge } from '../badge/badge.model';
import { TeamAura } from '../team-aura/team-aura.model';

export const BADGES: TeamAura[] = [
  {
    name: 'Speedster',
    duration: 2,
    type: 'USES',
    text: 'Whenever you perform a switch action, <div>[+].</div>~TA_USES~',
    isBadge: true,
  },
  {
    name: 'Fortitude',
    text: 'Your monsters have <div>+1[HP].</div>~TA_ONGOING~',
    type: 'ONGOING',
    isBadge: true,
  },
  {
    name: 'Protection',
    text: 'You gain an additional +1[DEF] when switch defending.~TA_ONGOING~',
    type: 'ONGOING',
    isBadge: true,
  },
  {
    name: 'Restoration',
    duration: 4,
    text: 'When this is destroyed, your active monster heals <div>3[HP].</div> ~TA_DURATION~',
    type: 'TIME',
    isBadge: true,
  },
]

@Component({
  selector: 'badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {

  teamAuras: Badge[] = BADGES;

  constructor() { }

  ngOnInit(): void {
  }

}
