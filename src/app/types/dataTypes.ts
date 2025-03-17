import { Term, TypeChart, Image } from './../modules/data/data';

export const ELEMENTS = [`Fire`, `Water`, `Rock`, `Leaf`, `Electric`, `Death`] as const;
export type ElemType = typeof ELEMENTS[number];

export const ATTACK_TYPES = [`Melee`, `Ranged`] as const;
export type AttackType = typeof ATTACK_TYPES[number];

export const BUFF_TIMINGS = [`Pre-Actions`, `With Attack`, `Post Actions`];
export type BuffTiming = typeof BUFF_TIMINGS[number];

const typeChart = new Array;
ELEMENTS.forEach(e => typeChart.push(new TypeChart(e)));
export const TYPE_CHART = typeChart;

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
export const BADGE_PATH: Path = ICON_PATH + `/badges/`;
export const ELEMENT_PATH_COLOR: Path = ICON_PATH + `/elements/color/`;
export const ELEMENT_PATH_GRAY: Path = ICON_PATH + `/elements/gray/`;
export const HP_PATH: Path = SYMBOLS_PATH + `/hp/`;
export const ROLE_PATH: Path = ICON_PATH + `/roles/`;

export const MODIFIER_OPTIONS_POS = [0, 1, 2, 3, 4, 5];
export const MODIFIER_OPTIONS_NEG = [0, -1, -2, -3, -4, -5, `X`];

export type TermCodeValue = string;

// best method I could think of with the least redundancy while maintaining strong typing
export const TERM_KEYS = [`~FLINCH~`, `~SINGLE~`, `~RECOIL~`, `~SWITCH~`, `~HEAVY~`, `~FASTER~`, `~SLOWER~`, '~SPECIAL~', '~INSTANT~',
    `~GOOP~`, '~PIERCE~', `~SPAM~`, `~AURA~`, '~CRUSH~', '~GAIN_AURA~'] as const;
export type TermCode = typeof TERM_KEYS[number];
const termCodes = [
    new Term('Faster', `~FASTER~`, `This action is <b>faster</b> if your opponent selects a basic action, or if both players select a monster action and yours resolves first.`),
    new Term('Flinch', `~FLINCH~`, `Attacks with <b>flinch</b> prevent the enemy monster's attack action if this action is <b>faster.</b>`),
    new Term('Pierce', '~PIERCE~', `Attacks with <b>pierce</b> remove this amount of [DEF] from the enemy monster. Multiple instances of pierce stack.`),
    new Term('Recoil', `~RECOIL~`, `This monster suffers this amount of <b>recoil</b> damage to itself after the action resolves. Multiple instances of recoil stack.`),
    new Term('Single Use', `~SINGLE~`, `<b>Single use</b> actions remain disabled until switched out, as denoted by [SINGLE].`),
    new Term('Slower', `~SLOWER~`, `This action is <b>slower</b> if your opponent selects a switch action, or if both players select a monster action and yours resolves second.`),
    new Term('Spammable', `~SPAM~`, `<b>Spammable</b> actions do not become disabled.`),
    new Term('Heavy', `~HEAVY~`, `<b>Heavy</b> buffs require and use two [B] slots.`),
    new Term('Switches In', `~SWITCH~`, `<b>Switch in</b> abilities also trigger at the start of the game and following a monster KO.`),
    new Term('Team Aura', '~AURA~', '<b>Team aura</b> [TA] – At the end of your turn, put a time counter on this. If the number of time counters equals its duration, discard this.'),
    new Term('Crush', '~CRUSH~', `<b>Crush X</b> - Remove X pips of the same type from your opponent's stat board that they aren't using.`),
    new Term('Special', '~SPECIAL~', 'You cannot apply pips to <b>special</b> [SPECIAL] actions.'),
    new Term('Instant', '~INSTANT~', '<b>Instant</b> buffs can be played during the apply buffs phase (after reveal). They still require buff slots.'),
    new Term('Gain Aura', '~GAIN_AURA~', `Players can gain a [TA] if they don't already control it, or if there are multiple copies.`),
];
export const TERM_CODES = termCodes.sort((a,b) => a.name.localeCompare(b.name));


const IMAGE_KEYS = [`[ATK]`, `[+]`, `[B]`, `[-]`, `[DEF]`, `[TA]`,
    `[SPD]`, `[F]`, `[W]`, `[L]`, `[R]`, `[E]`, `[S]`, `[ST]`, `[REAC]`, `[HP]`, '[CUBE]', '[NQ]', '[PQ]', '[ARROW]',
    '[SPECIAL]', '[STATUS]', '[COUNTER]', '[MQ]', '[ACORN]', '[HONEY]', '[WISH]', '[TORMENT]', '[FLIP]', '[DISABLE]', '[SINGLE]', '[HOLLOW]',
    '[SR]', '[SL]', '[RESIST]', '[WEAK]', '[STR]', '[FRAIL]', '[GOOP]', `<div>{\"stat\": \"?\", \"num\": 1}</div>`, `[RANGED]`, `[MELEE]`, `[ROLL]`, `[BADGE]`
] as const;
export type ImageCode = typeof IMAGE_KEYS[number];
export const IMAGE_CODES = [
    new Image(`[ATK]`, SYMBOLS_PATH + `attack.png`),
    new Image(`[+]`, SYMBOLS_PATH + `draw.png`),
    new Image(`[B]`, SYMBOLS_PATH + `buff.png`),
    new Image(`[-]`, SYMBOLS_PATH + `discard.png`),
    new Image(`[DEF]`, SYMBOLS_PATH + `defense.png`),
    new Image(`[TA]`, SYMBOLS_PATH + `aura.png`),
    new Image(`[SPD]`, SYMBOLS_PATH + `speed.png`),
    new Image(`[F]`, ELEMENT_PATH_COLOR + `fire.png`),
    new Image(`[W]`, ELEMENT_PATH_COLOR + `water.png`),
    new Image(`[L]`, ELEMENT_PATH_COLOR + `leaf.png`),
    new Image(`[R]`, ELEMENT_PATH_COLOR + `rock.png`),
    new Image(`[E]`, ELEMENT_PATH_COLOR + `electric.png`),
    new Image(`[S]`, ELEMENT_PATH_COLOR + `death.png`),
    new Image(`[ST]`, SYMBOLS_PATH + `status.png`),
    new Image(`[HP]`, SYMBOLS_PATH + `heart.png`),
    new Image(`[CUBE]`, SYMBOLS_PATH + `cube.png`),
    new Image(`[PQ]`, SYMBOLS_PATH + `green-cube.png`),
    new Image(`[MQ]`, SYMBOLS_PATH + `blue-cube.png`),
    new Image(`[SPECIAL]`, SYMBOLS_PATH + `status.png`),
    new Image(`[STATUS]`, SYMBOLS_PATH + `wound.png`),
    new Image(`[FLIP]`, SYMBOLS_PATH + `flip.png`),
    new Image(`<div>{\"stat\": \"?\", \"num\": 1}</div>`, SYMBOLS_PATH + `question.png`),
    new Image(`[DISABLE]`, SYMBOLS_PATH + `unlocked.png`),
    new Image(`[SINGLE]`, SYMBOLS_PATH + `single-use.png`),
    new Image(`[SR]`, SYMBOLS_PATH + `switch-right.png`),
    new Image(`[SL]`, SYMBOLS_PATH + `switch-left.png`),
    new Image(`[RESIST]`, SYMBOLS_PATH + `switch-defense-right.png`),
    new Image(`[WEAK]`, SYMBOLS_PATH + `effective.png`),
    new Image(`[GOOP]`, SYMBOLS_PATH + `goop.png`),
    new Image(`[HOLLOW]`, SYMBOLS_PATH + `hollow.png`),
    new Image(`[ARROW]`, SYMBOLS_PATH + `sideswipe.png`),
    new Image(`[RANGED]`, SYMBOLS_PATH + `ranged.png`),
    new Image(`[MELEE]`, SYMBOLS_PATH + `melee.png`),
    new Image(`[ROLL]`, SYMBOLS_PATH + `die.png`),
    new Image(`[BADGE]`, BADGE_PATH + `badge.png`),
];

//TODO: this should return an object with two properties: advElems and DisElems that are arrays of elemtypes
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

  export const getElementIndex = (elem: ElemType): number => {
    if (elem === 'Death') {
        return 5;
    }
    if (elem === 'Electric') {
        return 4;
    }
    if (elem === 'Leaf') {
        return 3;
    }
    if (elem === 'Rock') {
        return 2;
    }
    if (elem === 'Water') {
        return 1;
    }
    return 0;
};
