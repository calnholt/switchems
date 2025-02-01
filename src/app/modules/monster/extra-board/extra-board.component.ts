import { Component, OnInit, Input } from '@angular/core';
import { MonsterComplete } from '../model/monster';
import { TeamAura } from '../team-aura/team-aura.model';

@Component({
  selector: 'extra-board',
  templateUrl: './extra-board.component.html',
  styleUrls: ['./extra-board.component.scss']
})
export class ExtraBoardComponent implements OnInit {
  @Input() monster: MonsterComplete;

  stun: TeamAura = {
    name: 'Stun',
    text: `If you attack with a <b>faster</b> ranged [RANGED] attack, your attack gains <b>flinch</b> and destroy this.~FASTER~~FLINCH~~AURA~`,
    duration: 4,
    monsterName: 'Zappguin',
  }

  constructor() { }

  ngOnInit() {
  }

}
