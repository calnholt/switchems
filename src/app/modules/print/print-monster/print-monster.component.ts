import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'print-monster',
  templateUrl: './print-monster.component.html',
  styleUrls: ['./print-monster.component.scss']
})
export class PrintMonsterComponent implements OnInit {
  @Input() monster;
  constructor() { }

  ngOnInit() {
  }

}
