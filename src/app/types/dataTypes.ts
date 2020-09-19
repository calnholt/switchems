import { TypeChart } from './../modules/data/data';
import { Term, Image } from '../modules/data/data';
import { Buff } from '../modules/monster/model/monster';

export const ELEMENTS = [`Fire`, `Water`, `Rock`, `Leaf`, `Electric`, `Death`] as const;
export type ElemType = typeof ELEMENTS[number];

export const ROLES = [`Warrior`, `Assassin`, `Technical`, `Tank`, `Support`, `Tricky`] as const;
export type Role = typeof ROLES[number];

export const BUFF_TIMINGS = [`Pre-Actions`, `With Attack`, `Post Actions`, `None`];
export type BuffTiming = typeof BUFF_TIMINGS[number];

const typeChart = new Array;
ELEMENTS.forEach(e => typeChart.push(new TypeChart(e)));
export const TYPE_CHART = typeChart;

const standardBuffArray: Buff[] = [];
for (let i = 0; i < 2; i++) {
    const b = new Buff();
    b.monsterName = `Standard`;
    b.buffName = `Cant Escape!`;
    b.timing = `Pre-Actions`;
    b.buffText = `Prevent the enemy monster from switching this turn if your opponent selected a switch action.`;
    b.critFlg = true;
    standardBuffArray.push(b);
}
standardBuffArray[0].critFlg = false;
export const STANDARD_BUFFS: Buff[] = standardBuffArray;

export type Url = string;
export type Path = string;
export type Css = string;
export type ImageFile = string;

export type CardTypes = `MONSTER` | `ACTION` | `BUFF`;

export const ICON_PATH: Path = `./assets/images`;
export const SYMBOLS_PATH: Path = ICON_PATH + `/symbols/`;
export const ELEMENT_PATH_COLOR: Path = ICON_PATH + `/elements/color/`;
export const ELEMENT_PATH_GRAY: Path = ICON_PATH + `/elements/gray/`;
export const HP_PATH: Path = SYMBOLS_PATH + `/hp/`;
export const ROLE_PATH: Path = ICON_PATH + `/roles/`;

export const MODIFIER_OPTIONS_POS = [0, 1, 2, 3, 4, 5];
export const MODIFIER_OPTIONS_NEG = [0, -1, -2, -3, -4, -5, `X`];

export type TermCodeValue = string;

// best method I could think of with the least redundancy while maintaining strong typing
const TERM_KEYS = [`~BURN~`, `~SUCCESS~`, `~FLINCH~`, `~PARALYZE~`, `~LEECH~`, `~FATIGUE~`,
    `~STATUS~`, `~SINGLE~`, `~STUN~`, `~RECOIL~`, `~SWITCH~`, `~SUPER~`, `~FASTER~`, `~SLOWER~`, `~GOOP~`] as const;
export type TermCode = typeof TERM_KEYS[number];
export const TERM_CODES = [
    new Term(`~BURN~`, `Burned monsters ignore their attack's elemental bonuses and gain -1[ATK] stat cubes. `
     + `If the monster is [L] [R] [S], that monster gains an additional -1[ATK] stat cubes.`),
     new Term(`~FASTER~`, `This action is faster if both players select a monster action and yours has a higher speed.`),
     new Term(`~FATIGUE~`, `Fatigued monsters cannot buff their attacks and gains -1[DEF] stat cubes. If the monster is [W] [E] [F], `
     + `that monster gains an additional -1[DEF] stat cubes.`),
     new Term(`~FLINCH~`, `Actions with flinch prevent the enemy monster's monster action if this action is faster.`),
     new Term(`~GOOP~`, `Goop buffs have no buff effect if you do not have <b>Oozygoopz</b> on your team.`),
     new Term(`~LEECH~`, `Leeched monsters suffer 1[ATK] at the end of each turn, and your active monster heals `
     + `1[HP]. Stacks up to three. Remove on switch.`),
     new Term(`~PARALYZE~`, `Paralyzed monsters gain -2[SPD] stat cubes and all of their monster actions have  `
     + `[2]: This action is successful. Perform these flips first and ignore all flip events for these flips.`),
     new Term(`~RECOIL~`, `This monster suffers this amount of recoil damage to itself. `
     + `This damage cannot be prevented and still occurs if this action is prevented.`),
     new Term(`~SINGLE~`, `Single use actions recharge on switch.`),
     new Term(`~SLOWER~`, `This action is slower if both players select a monster action and yours has a lower speed.`),
     new Term(`~STATUS~`, `Status conditions: burn, fatigue, leech, paralyze.`),
     new Term(`~STUN~`, `Stunned monsters cannot perform any actions next turn. Remove at the end of next turn.`),
     new Term(`~SUCCESS~`, `Unsuccessful actions do nothing.`),
     new Term(`~SUPER~`, `Supers require and use two [B] slots.`),
     new Term(`~SWITCH~`, `This ability triggers if this monster is your lead at the start of the game.`),
] as const;

const IMAGE_KEYS = [`[ATK]`, `[+]`, `[B]`, `[-]`, `[1]`, `[2]`, `[3]`, `[4]`, `[DEF]`, `[TA]`, `[X]`, `[SUCC]`, `[FAIL]`,
`[SPD]`, `[F]`, `[W]`, `[L]`, `[R]`, `[E]`, `[S]`, `[ST]`, `[REAC]`, `[HP]`] as const;
export type ImageCode = typeof IMAGE_KEYS[number];
export const IMAGE_CODES = [
    new Image(`[ATK]`, SYMBOLS_PATH + `attack.png`),
    new Image(`[+]`, SYMBOLS_PATH + `draw.png`),
    new Image(`[B]`, SYMBOLS_PATH + `buff.png`),
    new Image(`[-]`, SYMBOLS_PATH + `discard.png`),
    new Image(`[1]`, SYMBOLS_PATH + `1.png`),
    new Image(`[2]`, SYMBOLS_PATH + `2.png`),
    new Image(`[3]`, SYMBOLS_PATH + `3.png`),
    new Image(`[4]`, SYMBOLS_PATH + `4.png`),
    new Image(`[DEF]`, SYMBOLS_PATH + `defense.png`),
    new Image(`[TA]`, SYMBOLS_PATH + `aura.png`),
    new Image(`[X]`, SYMBOLS_PATH + `x.png`),
    new Image(`[SUCC]`, SYMBOLS_PATH + `success.png`),
    new Image(`[FAIL]`, SYMBOLS_PATH + `fail.png`),
    new Image(`[SPD]`, SYMBOLS_PATH + `speed.png`),
    new Image(`[F]`, ELEMENT_PATH_COLOR + `fire.png`),
    new Image(`[W]`, ELEMENT_PATH_COLOR + `water.png`),
    new Image(`[L]`, ELEMENT_PATH_COLOR + `leaf.png`),
    new Image(`[R]`, ELEMENT_PATH_COLOR + `rock.png`),
    new Image(`[E]`, ELEMENT_PATH_COLOR + `electric.png`),
    new Image(`[S]`, ELEMENT_PATH_COLOR + `death.png`),
    new Image(`[ST]`, SYMBOLS_PATH + `status.png`),
    new Image(`[REAC]`, SYMBOLS_PATH + `reaction.png`),
    new Image(`[HP]`, SYMBOLS_PATH + `heart.png`),
] as const;

