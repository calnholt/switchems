import { Component, OnInit } from '@angular/core';
import { SYMBOLS_PATH, Path } from 'src/app/types/dataTypes';

@Component({
  selector: 'stat-cube-board-alt',
  templateUrl: './stat-cube-board-alt.component.html',
  styleUrls: ['./stat-cube-board-alt.component.scss']
})
export class StatCubeBoardAltComponent implements OnInit {
  attack: Path = SYMBOLS_PATH + 'attack.png';
  defense: Path = SYMBOLS_PATH + 'defense.png';
  speed: Path = SYMBOLS_PATH + 'speed.png';
  positiveCube: Path = SYMBOLS_PATH + 'green-cube.png';
  negativeCube: Path = SYMBOLS_PATH + 'red-cube.png';
  maneuverCube: Path = SYMBOLS_PATH + 'blue-cube.png';
  frail: Path = SYMBOLS_PATH + 'frail.png';
  strengthen: Path = SYMBOLS_PATH + 'strengthen.png';
  ATK: Array<String> = ['+2', '+1', '+1', '0', '-1', '-1'];
  SPD: Array<String> = ['+3', '+2', '+1', '0', '-1', '-2'];
  DEF: Array<String> = ['+2', '+2', '+2', '0'];
  OPACITY: Array<String> = ['op-75', 'op-50', 'op-25', 'op-0', 'op-25', 'op-50'];

  constructor() { }

  ngOnInit() {
  }

}
