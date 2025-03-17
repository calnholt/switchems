import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rulebook-number',
  templateUrl: './rulebook-number.component.html',
  styleUrls: ['./rulebook-number.component.scss']
})
export class RulebookNumberComponent implements OnInit {

  @Input() number: number;

  constructor() { }

  ngOnInit() {
  }

}
