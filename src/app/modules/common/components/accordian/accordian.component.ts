import { Component, OnInit, Input } from '@angular/core';
import { AccordianSegment } from '../../models/common';

@Component({
  selector: 'accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements OnInit {
  @Input() title: string;
  @Input() segments: Array<AccordianSegment>;
  @Input() term?: boolean;

  constructor() { }

  ngOnInit() {
  }

}
