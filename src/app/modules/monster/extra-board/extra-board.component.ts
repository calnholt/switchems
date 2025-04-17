import { Component, OnInit, Input } from '@angular/core';
import { Buff, MonsterComplete } from '../model/monster';
import { TeamAura } from '../team-aura/team-aura.model';

export const GOOP: Buff = {
  buffName: 'Goop',
  buffText: `<div>{\"stat\": \"?\", \"num\": 1}</div> and return this card to your opponent (it is removed from your deck).<br><br>If this card is applied as a discard and there is an even number of <b>Goop</b> cards in your discard pile, your active monster loses <div>1[HP].</div>`,
  monsterName: 'Oozygoopz',
  hideBuffIcon: false,
  numOfCopies: 6,
}

@Component({
  selector: 'extra-board',
  templateUrl: './extra-board.component.html',
  styleUrls: ['./extra-board.component.scss']
})
export class ExtraBoardComponent implements OnInit {
  @Input() monster: MonsterComplete;

  goop: Buff = GOOP;

  constructor() { }

  ngOnInit() {
  }

}
