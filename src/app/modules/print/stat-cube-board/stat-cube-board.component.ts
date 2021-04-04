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
  positiveCube: Path = SYMBOLS_PATH + 'green-cube.png';
  negativeCube: Path = SYMBOLS_PATH + 'red-cube.png';
  maneuverCube: Path = SYMBOLS_PATH + 'blue-cube.png';

  // ATK
  // +2 +2 +1 +1 -1 -1 -1
  // SPD
  // +3 +3 +2 +1 -1 -2 -2
  // DEF
  // +2 +2 +2 +2

  constructor() { }

  ngOnInit() {
  }

}
