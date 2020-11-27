import { RulebookService } from './rulebook.service';
import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Css } from 'src/app/types/dataTypes';
import { getAbilityText } from '../common/cards';
import { MonsterService } from '../monster/monster.service';
import { MonsterComplete } from '../monster/model/monster';
import { ExecFileOptionsWithStringEncoding } from 'child_process';

export type RulebookImageType = 'Setup' | 'Monster' | 'Action' | 'Buff' | 'Stat-Cube' | 'Action-Board' | 'Standard' | 'Buff-Ex';

export interface RulebookSection {
  title?: string;
  blocks: Array<RulebookBlock>;
  columns?: number;
  rulebookImage?: RulebookImageType;
  class?: string;
  id?: string;
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
export class RulebookComponent implements AfterViewInit {
  TERM_CSS: Css = 'term';
  ABILITY_IMG_CSS: Css = 'term-img';
  monsterExample: MonsterComplete;
  rulebook: Array<RulebookSection> = this.rulebookService.rulebook;
  slug = 'rulebook';
  anchors = ['modes_of_play'];

  constructor(private monsterService: MonsterService, private rulebookService: RulebookService) {
    const monsters = this.monsterService.getMonsters().filter(m => m.elements && m.elements.length);
    const index: number = Math.floor((Math.random() * monsters.length));
    this.monsterExample = monsters[index];
  }

  ngAfterViewInit() {
    const aTags = document.getElementById('rulebook').getElementsByTagName('a');
    for (let i = 0; i < aTags.length; i++) {
      aTags[i].addEventListener('click', (e) => {
        e.preventDefault();
        const href = aTags[i].href;
        const index = href.lastIndexOf('/');
        const id = href.substring(index + 1, href.length);
        this.goToSection(id);
      });
    }
  }

  goToSection(id: string): void {
    if (!id || !id.length) {
      return;
    }
    const elmnt = document.getElementById(id);
    const y = elmnt.getBoundingClientRect().top + window.pageYOffset + -75;
    window.scrollTo({top: y, behavior: 'smooth'});
  }

  display(text: string): string {
    return getAbilityText(text, 'term', 'term-img');
  }

  getSectionColumns(section: RulebookSection): string {
    const css = 'col-md-12 col-sm-12 ';
    let large = '';
    if (section.rulebookImage) {
      if (section.columns) {
        large = `col-lg-${section.columns}`;
      } else {
        large = `col-lg-8`;
      }
    }
    return `${css} ${large}`;
  }

  getRulebookImageColumns(section: RulebookSection): string {
    const css = 'col-md-12 col-sm-12 ';
    let large = '';
    if (section.rulebookImage) {
      if (section.columns) {
        large = `col-lg-${12 - (section.columns ? section.columns : 6)}`;
      } else {
        large = `col-lg-4`;
      }
    }
    return `${css} ${large}`;
  }
}
