import { element } from 'protractor';
import { TypeChart } from './../../data/data';
import { ElemType } from 'src/app/types/dataTypes';
import { Action } from 'src/app/modules/monster/model/monster';
import { ELEMENTS, ROLES, MODIFIER_OPTIONS_POS, MODIFIER_OPTIONS_NEG, TYPE_CHART } from './../../../types/dataTypes';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'action-filters',
  templateUrl: './action-filters.component.html',
  styleUrls: ['./action-filters.component.scss']
})
export class ActionFiltersComponent implements OnInit {
  @Input() action: Action;
  MODIFIER_ELEMENTS = [ELEMENTS[5], ELEMENTS[4], ELEMENTS[3], ELEMENTS[2], ELEMENTS[1], ELEMENTS[0]];
  elementList = ELEMENTS;
  roleList = ROLES;
  positiveModifierOptions = MODIFIER_OPTIONS_POS;
  negativeModifierOptions = MODIFIER_OPTIONS_NEG;
  typeChart: TypeChart;
  constructor() { }

  ngOnInit() {
    this.typeChart = TYPE_CHART.find(tc => tc.element === this.action.element);
  }

  isStrongAgainst(elemType: ElemType) {
    return this.typeChart.strongAgainst.includes(elemType);
  }

  isWeakAgainst(elemType: ElemType) {
    return this.typeChart.weakAgainst.includes(elemType);
  }

  getModifierOptions(elemType: ElemType): (string | number)[] {
    if (this.isStrongAgainst(elemType)) {
      return this.positiveModifierOptions;
    } else {
      return this.negativeModifierOptions;
    }
  }

  getModifierLabelElement(index: number): string {
    return `${this.MODIFIER_ELEMENTS[index]} Modifier`;
  }

}
