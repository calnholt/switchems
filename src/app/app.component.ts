import { CardDataService } from './modules/common/services/card-data.service';
import { Component } from '@angular/core';
import { MonsterService } from './modules/monster/monster.service';
import { DropdownOption, ToolbarTab } from './modules/common/models/common';

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
