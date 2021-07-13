import { default as Stalagrowth } from '../data/monsters/Stalagrowth.json';
import { default as Cleansitoad } from '../data/monsters/Cleansitoad.json';
import { default as Chargroar } from '../data/monsters/Chargroar.json';
import { default as Flexferno } from '../data/monsters/Flexferno.json';
import { default as Zappguin } from '../data/monsters/Zappguin.json';
import { default as Phantomaton } from '../data/monsters/Phantomaton.json';
import { default as Cragadilo } from '../data/monsters/Cragadilo.json';
import { default as Galeaffy } from '../data/monsters/Galeaffy.json';
import { default as Drownigator } from '../data/monsters/Drownigator.json';
import { default as Vulturock } from '../data/monsters/Vulturock.json';
import { default as Steamie } from '../data/monsters/Steamie.json';
import { default as Boltblebee } from '../data/monsters/BoltbleBee.json';
import { default as Smolderskulk } from '../data/monsters/Smolderskulk.json';
import { default as Oozygoopz } from '../data/monsters/Oozygoopz.json';
import { default as Galvanite } from '../data/monsters/Galvanite.json';
import { default as Squirrberus } from '../data/monsters/Squirrberus.json';
import { default as Ashdash } from '../data/monsters/Ashdash.json';
import { ElemType, ELEMENTS } from './../../types/dataTypes';
import { MonsterComplete, Buff, Action } from '../monster/model/monster';

const getElemType = (text: string): ElemType => {
    return ELEMENTS.find(e => e.toString() === text);
};

export const loadMonsters = (selectedMonster?: any): Array<MonsterComplete> => {
    let out = new Array<MonsterComplete>();
    let ALL = [];
    if (selectedMonster) {
        ALL = [selectedMonster];
    } else {
        ALL = [
            // Ashdash,
            // Boltblebee,
            Chargroar,
            //Cleansitoad,
            // Cragadilo,
            Drownigator,
            Flexferno,
            // Galvanite,
            Galeaffy,
            Oozygoopz,
            // Smolderskulk,
            Stalagrowth,
            // Steamie,
            Squirrberus,
            Phantomaton,
            Vulturock,
            Zappguin,
        ];
    }
    return convertFromJSON(ALL);
};

export const convertFromJSON = (all: Array<any>, keepGUI?: boolean): Array<MonsterComplete> => {
    let out = new Array<MonsterComplete>();
    all.forEach(json => {
        const monster = new MonsterComplete();
        if (!json.monsterName) {
            return null;
        }
        let MONSTER_PROPERTIES = [
            'monsterId',
            'monsterName',
            'abilityText',
            'hp',
            'promiseDescription',
            'extraBoard',
            'initiative',
            'imageFlg',
            'lastUpdated',
        ];
        if (keepGUI) {
            MONSTER_PROPERTIES = MONSTER_PROPERTIES.concat(
                'isSelected',
                'referenceFlg'
            )
        }
        MONSTER_PROPERTIES.forEach(p => monster[p] = json[p]);
        const elements = Array<ElemType>();
        json.elements.forEach(element => elements.push(getElemType(element)));
        monster.elements = elements;
        monster.actions = new Array<Action>();
        const ACTIONS = 4;
        let ACTION_PROPERTIES = [
            'abilityName',
            'abilityText',
            'attack',
            'speed',
            'draw',
            'discard',
            'buff',
            'statusFlg',
            'modifier',
            'lastUpdated',
        ];
        if (keepGUI) {
            ACTION_PROPERTIES = ACTION_PROPERTIES.concat(
                'isSelected',
            )
        }
        for (let i = 0; i < ACTIONS; i++) {
            const action = new Action();
            ACTION_PROPERTIES.forEach(p => action[p] = json.actions[i][p]);
            action.monsterName = monster.monsterName;
            action.element = getElemType(json.actions[i].element);
            action.number = (i + 1);
            monster.actions.push(action);
        }
        monster.buffs = new Array<Buff>();
        const BUFFS = 4;
        let BUFF_PROPERTIES = [
            'timing',
            'buffText',
            'flipEventText',
            'buffName',
            'auraDuration',
            'lastUpdated',
        ];
        if (keepGUI) {
            BUFF_PROPERTIES = BUFF_PROPERTIES.concat(
                'isSelected',
            )
        }
        for (let i = 0; i < BUFFS; i++) {
            const buff = new Buff();
            BUFF_PROPERTIES.forEach(p => buff[p] = json.buffs[i][p]);
            buff.monsterName = monster.monsterName;
            monster.buffs.push(buff);
        }
        out = out.sort((a, b) => {
            if (a.monsterName > b.monsterName) {return 1; }
            if (a.monsterName < b.monsterName) {return -1; }
            return 0;
        });
        out.push(monster);
    });
    return out;
}
