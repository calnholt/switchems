import { CardDataService, DropdownOption, ToolbarTab } from 'card-builder-framework';
import { Component } from '@angular/core';
import { MonsterService } from './modules/monster/monster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    searchOptions: Array<DropdownOption>;
    tabs: Array<ToolbarTab>;
    constructor(private cardDataService: CardDataService, private monsterService: MonsterService) { }
  
    ngOnInit() {
      this.searchOptions = this.cardDataService.getSearchOptions('monsterName', this.monsterService.getMonsters(), 'monster')
      this.tabs = [
        new ToolbarTab('Create', 'monster', 'builder'),
        new ToolbarTab('Print & Play', 'print'),
        new ToolbarTab('How to Play', 'rules'),
      ];
    }


  
}