import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { TeamAura } from './team-aura.model';
import { ImageService } from '../../data/image.service';
import { getAbilityText } from './../../common/cards';
import { MonsterService } from '../monster.service';
import { Path } from 'src/app/types/dataTypes';
import { IMAGES } from 'src/app/constants';

@Component({
  selector: 'team-aura',
  templateUrl: './team-aura.component.html',
  styleUrls: ['./team-aura.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TeamAuraComponent implements OnInit {
  @Input() teamAura: TeamAura;
  
    constructor(
      public imageService: ImageService,
      private monsterService: MonsterService,
    ) { }

  ngOnInit(): void {
  }

  getAbilityText(text: string): string {
    return getAbilityText(text, 'term', 'term-img');
  }

  getBackgroundImageCss(): string {
    const elems =  this.monsterService.getMonsters().find(m => m.monsterName === this.teamAura.monsterName).elements.sort((a,b) => a.localeCompare(b));
    let out = '';
    elems.forEach(e => out += e.toLowerCase());
    return out;
  }

    getMonsterImagePath(): Path {
      return `${IMAGES}/monsters/${this.teamAura.monsterName.toLowerCase()}.png`;
    }

}
