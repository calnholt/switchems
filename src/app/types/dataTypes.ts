import { TypeChart } from './../modules/data/data';
import { Term, Image } from '../modules/data/data';
import { Buff } from '../modules/monster/model/monster';

export const ELEMENTS = [`Fire`, `Water`, `Rock`, `Leaf`, `Electric`, `Death`] as const;
export type ElemType = typeof ELEMENTS[number];

export const ROLES = [`Warrior`, `Assassin`, `Technical`, `Tank`, `Support`, `Tricky`] as const;
export type Role = typeof ROLES[number];

export const BUFF_TIMINGS = [`Pre-Actions`, `With Attack`, `Post Actions`];
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
    b.flipEventFlg = true;
    b.flipEventText = `This attack gains <div>+1[ATK].</div>`;
    standardBuffArray.push(b);
}
export const STANDARD_BUFFS: Buff[] = standardBuffArray;

export const PLAYER_BOARD_TEXT: string[] = [
    'Buffs', 
    'Discards', 
    'Hand<br><div class="sub-text">(facedown)</div>'
];

export type Url = string;
export type Path = string;
export type Css = string;
export type ImageFile = string;

export type CardTypes = `MONSTER` | `ACTION` | `BUFF` | 'EXTRA';

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
export const TERM_KEYS = [`~WOUND~`, `~SUCCESS~`, `~FLINCH~`, `~DRAIN~`, `~FATIGUE~`,
    `~STATUS~`, `~SINGLE~`, `~STUN~`, `~RECOIL~`, `~SWITCH~`, `~SUPER~`, `~FASTER~`, `~SLOWER~`, 
    `~GOOP~`, `~EXHAUST~`, '~PIERCE~', `~RESIST~`, `~EFFECTIVE~`, `~CRUSH~`, `~BELONGS~`, `~SPAM~`] as const;
export type TermCode = typeof TERM_KEYS[number];
export const TERM_CODES = [
    new Term(`~BELONGS~`, `A buff card <b>Belongs</b> to a monster if the monster name on the bottom of the buff card matches.`),
    new Term(`~CRUSH~`, `Remove up to this many of the specified type(s) of stat cubes from either monster.`),
    new Term(`~DRAIN~`, `At the end of the turn, monsters with <b>Drain</b> [STATUS] suffer <div>1[ATK]</div> and your active monster heals `
    + `<div>1[HP].</div>`),
    new Term(`~EFFECTIVE~`, `Monsters are <b>Weak</b> to elements found on the bottom left of their monster card.`),
    new Term(`~EXHAUST~`, `<b>Exhaust</b> buffs are removed from the game after played as buffs.`),
    new Term(`~FASTER~`, `This action is <b>faster</b> if both players select a monster action and yours has a higher speed.`),
    new Term(`~FATIGUE~`, `When a monster with <b>Fatigue</b> [STATUS] buffs an attack, the attack gains <div><b>recoil 1[ATK]</b></div> for each buff slot used.`),
    new Term(`~FLINCH~`, `Actions with <b>Flinch</b> prevent the enemy monster's monster action if this action is faster.`),
    new Term(`~GOOP~`, `If you do not have <b>Oozygoopz</b> on your team, goop buffs have no buff effect and are returned `
    + `to its owner's discard pile when played as a buff.`),
    new Term('~PIERCE~', `Attacks with <b>Pierce</b> ignore the enemy monster's [DEF] and [COUNTER].`),
    new Term(`~RECOIL~`, `This monster suffers this amount of <b>Recoil</b> damage to itself. `
    + `This damage cannot be prevented and still occurs if this action is prevented.`),
    new Term(`~RESIST~`, `Monsters are <b>Resistant</b> to elements found on the bottom right of their monster card.`),
    new Term(`~SINGLE~`, `<b>Single Use</b> actions recharge on switch.`),
    new Term(`~SLOWER~`, `This action is <b>Slower</b> if both players select a monster action and yours has a lower speed.`),
    new Term(`~SPAM~`, `<b>Spammable</b> actions do not become disabled.`),
    new Term(`~STATUS~`, `<b>Status Conditions</b> [STATUS] – wound, fatigue, drain, stun.`),
    new Term(`~STUN~`, `Monsters with <b>Stun</b> [STATUS] perform their switch actions after monster actions.`),
    new Term(`~SUCCESS~`, `<b>Unsuccessful</b> actions do nothing.`),
    new Term(`~SUPER~`, `<b>Supers</b> require and use two [B] slots.`),
    new Term(`~SWITCH~`, `<b>Switch In</b> abilities also trigger at the start of the game and following a monster KO.`),
    new Term(`~WOUND~`, `Monsters with <b>Wound</b> [STATUS] perform one less [FLIP] on all of their attacks.`),
] as const;

const IMAGE_KEYS = [`[ATK]`, `[+]`, `[B]`, `[-]`, `[1]`, `[2]`, `[3]`, `[4]`, `[DEF]`, `[TA]`, `[X]`, `[SUCC]`, `[FAIL]`,
`[SPD]`, `[F]`, `[W]`, `[L]`, `[R]`, `[E]`, `[S]`, `[ST]`, `[REAC]`, `[HP]`, '[CUBE]', '[NQ]', '[PQ]', '[ARROW]', '[!]',
'[SPECIAL]', '[STATUS]', '[COUNTER]', '[MQ]', '[ACORN]', '[HONEY]', '[WISH]', '[TORMENT]', '[FLIP]'] as const;
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
    new Image(`[CUBE]`, SYMBOLS_PATH + `cube.png`),
    new Image(`[NQ]`, SYMBOLS_PATH + `red-cube.png`),
    new Image(`[PQ]`, SYMBOLS_PATH + `green-cube.png`),
    new Image(`[MQ]`, SYMBOLS_PATH + `blue-cube.png`),
    new Image(`[ARROW]`, SYMBOLS_PATH + `sideswipe.png`),
    new Image(`[!]`, SYMBOLS_PATH + `flip-event.png`),
    new Image(`[SPECIAL]`, SYMBOLS_PATH + `status.png`),
    new Image(`[STATUS]`, SYMBOLS_PATH + `wound.png`),
    new Image(`[COUNTER]`, SYMBOLS_PATH + `counter.png`),
    new Image(`[ACORN]`, SYMBOLS_PATH + `acorn.png`),
    new Image(`[HONEY]`, SYMBOLS_PATH + `dripping-honey.png`),
    new Image(`[WISH]`, SYMBOLS_PATH + `round-star.png`),
    new Image(`[TORMENT]`, SYMBOLS_PATH + `torment.png`),
    new Image(`[FLIP]`, SYMBOLS_PATH + `flip.png`),
] as const;

export const getAdvantages = (elem: ElemType): number[] => {
    // fire, water, rock, leaf, elec, death
    // -1 means the monster takes MORE damage
    // 1 means resistance
      if (elem === 'Death') {return [0, -1, 1, 1, -1, 0]; }
      if (elem === 'Electric') { return [-1, 1, -1, 0, 0, 1]; }
      if (elem === 'Fire') { return [0, -1, -1, 1, 1, 0]; }
      if (elem === 'Water') { return [1, 0, 0, -1, -1, 1]; }
      if (elem === 'Leaf') { return [-1, 1, 1, 0, 0, -1]; }
      if (elem === 'Rock') { return [1, 0, 0, -1, 1, -1]; }
  };

