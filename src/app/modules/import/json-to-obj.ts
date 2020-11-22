import { default as Stallagrowth } from '../data/monsters/Stallagrowth.json';
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
import { ElemType, ELEMENTS, Role, ROLES } from './../../types/dataTypes';
import { MonsterComplete, Buff, Action } from '../monster/model/monster';

const getElemType = (text: string): ElemType => {
    return ELEMENTS.find(e => e.toString() === text);
};

const getRole = (text: string): Role => {
    return ROLES.find(r => r.toString() === text);
};

export const loadMonsters = (selectedMonster?: any): Array<MonsterComplete> => {
    let out = new Array<MonsterComplete>();
    let ALL = [];
    if (selectedMonster) {
        ALL = [selectedMonster];
    } else {
        ALL = [
            Ashdash,
            Boltblebee,
            Chargroar,
            //Cleansitoad,
            Cragadilo,
            Drownigator,
            Flexferno,
            Galvanite,
            Galeaffy,
            Oozygoopz,
            Smolderskulk,
            Stallagrowth,
            Steamie,
            Squirrberus,
            Phantomaton,
            Vulturock,
            Zappguin,
        ];
    }
    ALL.forEach(json => {
        const monster = new MonsterComplete();
        if (!json.abilityName) {
            return null;
        }
        const MONSTER_PROPERTIES = [
            'monsterId',
            'abilityName',
            'monsterName',
            'abilityText',
            'hp',
            'complexity',
            'promiseDescription',
            'extraBoard',
            'initiative',
            'lastUpdated',
        ];
        MONSTER_PROPERTIES.forEach(p => monster[p] = json[p]);
        const elements = Array<ElemType>();
        json.elements.forEach(element => elements.push(getElemType(element)));
        monster.elements = elements;
        monster.role = getRole(json.role);
        monster.actions = new Array<Action>();
        const ACTIONS = 4;
        const ACTION_PROPERTIES = [
            'abilityName',
            'abilityText',
            'attack',
            'speed',
            'draw',
            'discard',
            'buff',
            'auraDuration',
            'statusFlg',
            'modifier',
            'lastUpdated',
        ];
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
        const BUFF_PROPERTIES = [
            'timing',
            'buffText',
            'flipEventText',
            'flipEventFlg',
            'buffName',
            'lastUpdated',
        ];
        for (let i = 0; i < BUFFS; i++) {
            const buff = new Buff();
            BUFF_PROPERTIES.forEach(p => buff[p] = json.buffs[i][p]);
            buff.monsterName = monster.monsterName;
            monster.buffs.push(buff);
        }
        console.log(monster);
        out = out.sort((a, b) => {
            if (a.monsterName > b.monsterName) {return 1; }
            if (a.monsterName < b.monsterName) {return -1; }
            return 0;
        });
        out.push(monster);
    });
    return out;
};
