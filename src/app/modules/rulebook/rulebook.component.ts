import { RulebookService } from './rulebook.service';
import { TERM_CODES } from './../../types/dataTypes';
import { rulebook } from './../data/rulebook';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Css } from 'src/app/types/dataTypes';
import { getAbilityText } from '../common/cards';
import { MonsterService } from '../monster/monster.service';
import { MonsterComplete } from '../monster/model/monster';

export type RulebookImageType = 'Setup' | 'Monster' | 'Action' | 'Buff' | 'Stat-Cube' | 'Action-Board' | 'Standard' | 'Buff-Ex';

export interface RulebookSection {
  title?: string;
  blocks: Array<RulebookBlock>;
  columns?: number;
  rulebookImage?: RulebookImageType;
}
export class RulebookBlock {
  text?: string;
  ul?: Array<RulebookBlock>;
  ol?: Array<RulebookBlock>;
}
@Component({
  selector: 'rulebook',
  templateUrl: './rulebook.component.html',
  styleUrls: ['./rulebook.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RulebookComponent implements OnInit {
  TERM_CSS: Css = 'term';
  ABILITY_IMG_CSS: Css = 'term-img';
  monsterExample: MonsterComplete;
  rulebook: Array<RulebookSection> = this.rulebookService.rulebook;

  constructor(private monsterService: MonsterService, private rulebookService: RulebookService) {
    const monsters = this.monsterService.getMonsters().filter(m => m.elements && m.elements.length);
    const index: number = Math.floor((Math.random() * monsters.length));
    this.monsterExample = monsters[index];
  }

  ngOnInit() {
  }

  display(text: string): string {
    return getAbilityText(text, 'term', 'term-img');
  }
}
