import { SYMBOLS_PATH, Path } from './../../../types/dataTypes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stat-cube-board',
  templateUrl: './stat-cube-board.component.html',
  styleUrls: ['./stat-cube-board.component.scss']
})
export class StatCubeBoardComponent implements OnInit {
  attack: Path = SYMBOLS_PATH + 'attack.png';
  defense: Path = SYMBOLS_PATH + 'defense.png';
  speed: Path = SYMBOLS_PATH + 'speed.png';

  constructor() { }

  ngOnInit() {
  }

}
