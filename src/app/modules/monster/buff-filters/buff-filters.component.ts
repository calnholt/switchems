import { BUFF_TIMINGS } from './../../../types/dataTypes';
import { Component, OnInit, Input } from '@angular/core';
import { Buff } from '../model/monster';

@Component({
  selector: 'buff-filters',
  templateUrl: './buff-filters.component.html',
  styleUrls: ['./buff-filters.component.scss']
})
export class BuffFiltersComponent implements OnInit {
  @Input() buff: Buff;
  buffTimings = BUFF_TIMINGS;

  constructor() { }

  ngOnInit() {
  }

}
