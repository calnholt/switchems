import { MonsterService } from './../monster/monster.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MonsterComplete, Action, Buff } from '../monster/model/monster';
import { loadMonsters } from '../import/json-to-obj';
import { MonsterForm } from './view-all-filters/view-all-filters.component';
import { ElemType } from './../../types/dataTypes';

@Component({
  selector: 'view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss']
})
export class ViewAllComponent implements OnInit {

  allMonsters = Array<MonsterComplete>();
  filteredMonsters = Array<MonsterComplete>();
  numOfMonsters: number;
  numOfActions: number;
  numOfBuffs: number;

  constructor(
    private route: ActivatedRoute,
    private monsterService: MonsterService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.allMonsters = this.monsterService.getMonsters();
      this.filterMonsters(new MonsterForm());
    });
  }

  getFilteredMonsters(): Array<MonsterComplete> {
    return this.allMonsters;
  }

  filterMonsters(form: MonsterForm) {
    let filteredMonsters: Array<MonsterComplete> = this.allMonsters;
    filteredMonsters = filteredMonsters.filter(m => this.isWithinFormSettings(m, form));
    filteredMonsters.forEach(m => m.actions.forEach(a => a.isHighlighted = this.getActionHighlight(a, form)));
    filteredMonsters.forEach(m => m.buffs.forEach(b => b.isHighlighted = this.getBuffHighlight(b, form)));
    const allHighlightedActions = [];
    const allHighlightedBuffs = [];
    filteredMonsters.forEach(m => {
      allHighlightedActions.push(...m.actions.filter(a => a.isHighlighted));
      allHighlightedBuffs.push(...m.buffs.filter(b => b.isHighlighted));
    });
    this.numOfMonsters = filteredMonsters.length;
    this.numOfActions = allHighlightedActions.length;
    this.numOfBuffs = allHighlightedBuffs.length;
    this.filteredMonsters = filteredMonsters;
  }

  isWithinFormSettings(m: MonsterComplete, form: MonsterForm): boolean {
    const isRole = this.filterRole(m, form);
    const isElements = this.filterElement(m.elements, form.elements);
    const isHp = this.filterValueMinMax(m.hp, form.hpMin, form.hpMax);
    const isComplexity = this.filterValueMinMax(m.complexity, form.complexityMin, form.complexityMax);
    const isTerms = form.terms.length ? this.filterTerms(form.terms, m) : true;
    return isRole && isElements && isHp && isComplexity && isTerms;
  }

  filterRole(m: MonsterComplete, form: MonsterForm): boolean {
    let isRoles: boolean = true;
    if (form.roles.length > 0) {
      isRoles = form.roles.includes(m.role);
    }
    return isRoles;
  }

  filterElement(elements: Array<ElemType>, formElements: Array<ElemType>): boolean {
    let isElements: boolean;
    if (formElements.length > 0) {
      isElements = false;
      formElements.forEach(e => {
        if (elements.includes(e)) {
          isElements = true;
        }
      });
    } else {
      isElements = true;
    }
    return isElements;
  }

  getActionHighlight(a: Action, form: MonsterForm) {
    const isElements = this.filterElement([a.element], form.attackElements);
    const isSpeed = this.filterValueMinMax(a.speed, form.speedMin, form.speedMax);
    const isAttack = this.filterValueMinMax(a.attack, form.attackMin, form.attackMax);
    const isBuff = this.filterValueMinMax(a.buff, form.buffMin, form.buffMax);
    const isDiscard = this.filterValueMinMax(a.discard, form.discardMin, form.discardMax);
    const isDraw = this.filterValueMinMax(a.draw, form.drawMin, form.drawMax);
    const isStatus = a.statusFlg === form.statusFlg;
    const terms = this.getLowerCaseTerms(form.terms);
    const isTerms = terms.length ? terms.some(t => a.abilityText.toLowerCase().includes(t)) : true;
    return isElements && isSpeed && isAttack && isBuff && isDiscard && isDraw && isStatus && isTerms;
  }

  getBuffHighlight(b: Buff, form: MonsterForm) {
    const isTiming = this.filterTiming(b, form);
    const isAura = this.filterValueMinMax(b.auraDuration, form.auraMin, form.auraMax);
    const terms = this.getLowerCaseTerms(form.terms);
    const isTerms = terms.length ? terms.some(t => b.buffText.toLowerCase().includes(t) || b.flipEventText.toLowerCase().includes(t)) : true;
    return isTiming && isAura && isTerms;
  }

  filterTiming(b: Buff, form: MonsterForm) {
    let isTimings: boolean = true;
    if (form.timings.length > 0) {
      isTimings = form.timings.includes(b.timing);
    }
    return isTimings;
  }

  filterValueMinMax(value: number, formMin: number, formMax: number): boolean {
    let compareValue: number = value;
    if (value === undefined || value === null) {
      compareValue = 0;
    }
    return compareValue >= formMin && compareValue <= formMax;
  }

  getLowerCaseTerms(terms: Array<string>): Array<string> {
    let out = new Array<string>();
    terms.forEach(term => out.push(term.toLowerCase()));
    return out;
  }

  filterTerms(terms: Array<string>, monster: MonsterComplete): boolean {
    const lowerCaseTerms = this.getLowerCaseTerms(terms);
    let termOnMonsterCard = false;
    let termOnActionCard = false;
    let termOnBuffCard = false;
    lowerCaseTerms.forEach(t => {
      if (monster.abilityText.toLowerCase().includes(t)) {
        termOnMonsterCard = true;
      }
      if (monster.actions.some(a => a.abilityText.toLowerCase().includes(t))) {
        termOnActionCard = true;
      }
      if (monster.buffs.some(b => b.buffText.toLowerCase().includes(t) || b.flipEventText.toLowerCase().includes(t))) {
        termOnBuffCard = true;
      }
    });
    return termOnMonsterCard || termOnActionCard || termOnBuffCard;
  }

}
