import { Term } from './../data/data';
import { TermCode, TERM_CODES } from './../../types/dataTypes';
import { Injectable } from '@angular/core';
import { RulebookSection, RulebookBlock } from './rulebook.component';
import { getAbilityText } from '../common/cards';
import { MonsterService } from '../monster/monster.service';

@Injectable({
  providedIn: 'root'
})
export class RulebookService {

  constructor(
    private monsterService: MonsterService,
  ) { }

  rulebook: Array<RulebookSection> = [
    {
      title: 'Switchems!',
      blocks: [
        {
          text: 'Leverage your team of monsters in a battle of cunning and wits in this exciting two-player card game',
        },
        {
          text: 'v.0.8.0',
        },
        {
          text: '2 Players   |   30 - 60 Minutes   |   Ages 12+',
        },
        {
          text: 'Designer: Calvin Holt',
        }
      ]
    },
    {
      title: 'Overview',
      blocks: [
        {
          text: 'Switchems! is a game of outsmarting your opponent (with a healthy dose of doublethink), action sequencing, and team composition. Each turn you and your opponent will choose one action secretly. Some actions require you to discard cards from your hand. Some actions can be augmented with the cards from your hand. It\'s up to you decide what the best choice is! After you and your opponent have made your decisions, you will both reveal your actions and resolve them. At this point, almost no decisions are made - you will follow the sequence in which the actions resolve. After doing so, a new turn begins.',
        }
      ]
    },
    {
      title: 'How to Win',
      blocks: [
        {
          text: '<a href="ko">Knockout (KO)</a> all three of your opponent\'s monsters to win. Monsters are KO’d when their HP [HP] is reduced to 0.'
        }
      ]
    },
    {
      title: 'Golden Rule',
      blocks: [
        {
          text: 'Whenever a card\'s text directly contradicts these rules, the card takes precedence.'
        }
      ]
    },
    {
      title: 'Components',
      blocks: [{
        ul: [
          {
            text: `${this.monsterService.getMonsters().length} Monsters, each with:`,
            ul: [
              {
                text: '1 <a href="monster_card">Monster Card</a>',
              },
              {
                text: '4 <a href="action_card">Action Cards</a>',
              },
              {
                text: '4 <a href="buff_card">Buff Cards</a>',
              },
              {
                text: '1 Reference Card',
              }
            ]
          },
          {
            text: '4 Action Boards',
          },
          {
            text: '4 Badge Cards',
          },
          {
            text: '4 <a href="stat_cube_board">Stat Cube Boards</a>',
          },
          {
            text: 'A variety of tokens (lots of cubes, dice for damage, etc)',
          }
        ]
      }]
    },
    {
      title: 'Setup',
      rulebookImage: 'Setup',
      columns: 5,
      blocks: [
      {
        text: `After selecting your monsters, and retrieving their associated cards:`,
      },
      {
        ol: [
          {
            text: 'Place your action board behind your player shield.',
          },
          {
            text: 'Place your stat cube board in front of your player shield.',
          },
          {
            text: 'After <a href="choosing_your_team">choosing your team</a>, form your deck by collecting the buff cards associated with your team of monsters (there will be four for each monster) for a total of 12 cards. Shuffle your deck and place beside you.',
          },
          {
            text: 'Place your active monster\'s monster card and its action cards in front of the player shield, and arrange the action cards in a two by two grid.',
          },
          {
            text: 'For the two non-starting monsters, place one to the left of you, and the other to the right (which is placed where is irrelevant).',
          },
          {
            text: 'Both players draw [+] two cards and you’re ready to play!',
          }
        ]
      },
    ]
    },
    {
      title: 'Choosing your Team',
      id: 'choosing_your_team',
      blocks: [
        {
          text: 'At the start of the game, you will secretly select three monsters that compose your team.'
        },
        {
            text: 'Players will choose their teams secretly and simultaneously. Take the associated monster cards of the three you have chosen, and place them face down in a line, all face-down.'
        },
        {
            text: 'Once both players have done so, you simultaneously reveal your selections. The monster in the middle is your active monster. The other two are placed beside your active monster, one on each side.'
        },
      ]
    },
    {
      title: 'Monster Cards',
      rulebookImage: 'Monster',
      id: 'monster_card',
      blocks: [
        {
          text: 'Monster cards represent the monster thematically and mechanically, and have several unique attributes:',
          ol: [
            {
              text: 'Monster name',
            },
            {
              text: 'HP (hit points) and Initiative (determines when abilities resolve and breaks speed ties)',
            },
            {
              text: 'Monster ability text',
            },
          ]
        },
      ],
    },
    {
      title: 'Monster Actions',
      rulebookImage: 'Action',
      id: 'action_card',
      blocks: [
        {
          text: 'Monster actions are the four unique actions each monster has that dictates a monster\'s feel and playstyle. Monster actions have several unique attributes:',
          ol: [
            {
              text: 'Monster action name',
            },
            {
              text: 'Denotes the type of monster action – [ATK] | [SPECIAL]',
            },
            {
              text: 'Denotes whether an attack is melee [MELEE] or ranged [RANGED]',
            },
            {
              text: 'Denotes the speed [SPD] of this action',
            },
            {
              text: 'Monster Action ability (not all monster actions have an ability)',
            },
            {
              text: 'Action number, so actions are always laid out in the same configuration',
            },
            {
              text: 'Card section, which can feature three different icons – [-] | [+] | [B]'
            },
            {
              text: 'The name of the monster this action belongs to',
            },
            {
              text: 'Denotes whether a monster action is <a href="monster_actions">disabled</a>.',
            },
          ]
        }
      ]
    },
    {
      title: 'Buffs',
      rulebookImage: 'Buff',
      id: 'buff_card',
      blocks: [
        {
          text: 'Each monster has four unique Buff cards that are added to your deck. Your deck consists of the four buff cards from each of the three monsters in your team. Buffs have two uses:',
          ul: [
            {
              text: '[B] - Apply buff cards to your monster actions for unique and unpredictable effects'
            },
            {
              text: '[-] - Discard buff cards from your hand to pay for other actions',
            },
          ]
        },
        {
          text: 'Buffs have several unique attributes:',
          ol: [
            {
              text: 'Buff name',
            },
            {
              text: 'Buff ability text',
            },
            {
              text: 'The monster the buff card belongs to',
            }
          ]
        },
        {
          text: 'When enhancing attack [ATK] actions with buff cards, players may select a buff card from their hand for each buff symbol on the selected monster attack. Buff cards are chosen before the <a href="action_phase">action phase</a>, before you and your opponent reveal your selected action.'
        },
        {
          text: '<b>NOTE:</b> You can buff monster attacks with any buff card in your hand - they do NOT have to belong to your active monster.'
        },
      ]
    },
    {
      title: 'Team Auras [TA]',
      id: 'team_aura',
      blocks: [
        {
          text: 'Team Auras grant your monsters additional passive effects for several turns. Team Aura cards can be put into play by various abilities. During the <a href="end_phase">end phase</a>, add one time counter to each your Team Auras. If the number of time counters on the card equals its duration, discard it. The duration is denoted by the number to the left of the [TA] symbol.',
        },
        {
          text: 'Some team auras have the <b>ailment</b> [STATUS] symbol beside in their name. If a player controls a team aura with an <b>ailment</b>, the player is considered to have an <b>ailment</b>.',
        },
        {
          text: `<b>NOTE:</b> Some abilities care if you or your opponent has an ailment.`,
        },
      ]
    },
    {
      title: 'Badges [BADGE]',
      id: 'badge',
      blocks: [
        {
          text: 'At the start of the game, each player starts with a Badge card in play that grants them a variety of different abilities.',
        },
        {
          text: 'Use these to develop strong teams of monsters!',
        },
      ]
    },
    {
      title: 'Start of game',
      blocks: [
        {
          text: `Some monsters have abilities that trigger at the start of the game. These effects trigger for all monsters, not just each player's active monster. The order in which these resolve is irrelevant.`
        }
      ],
    },
    {
      title: 'Phases of a Turn',
      blocks: [
        {
          text: 'Each turn is simultaneous (players don’t have their own individual turns). Below is a brief overview of the phases of each turn in the order they occur.',
          ol: [
            {
              text: '<b><a href="selection_phase">Selection Phase</a></b>',
              ul: [
                {
                  text: 'Both players secretly place their action cube on one of the eight potential actions on their action boards',
                },
              ]
            },
            {
              text: '<b><a href="action_phase">Action Phase</a></b>',
              ul : [
                {
                  text: 'Both players reveal their selected actions and then resolve them:',
                  ol: [
                    {
                      text: 'Apply used [PQ]',
                    },
                    {
                      text: 'Apply Buffs',
                    },
                    {
                      text: 'Switch Actions',
                    },
                    {
                      text: 'Monster Actions',
                    },
                    {
                      text: 'Basic Actions',
                    },
                  ]
                }
              ]
            },
            {
              text: '<b><a href="end_phase">End Phase</a></b>',
              ul: [
                {
                  text: 'Perform end of turn effects and various cleanup.'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: 'Selection Phase',
      id: 'selection_phase',
      rulebookImage: 'Action-Board',
      blocks: [
        {
          text: 'During the Selection Phase, you will secretly place your action cube on one of the 8 spaces on your action board. These eight actions are split into three groups: Switch Actions, Monster Actions, and Basic Actions. This is also the order in which they resolve.',
        },
        {
          text: '<b>NOTE:</b> When you select any action, you must place the cards remaining in your hand (if any) face down on the hand section of your player board.'
        },
        {
          text: '<b>NOTE:</b> You can always ask your opponent how many cards they have in their hand.'
        },
        {
          text: '<h1>Switch Actions[SL]</h1>Switch actions enable you to change your active monster, replacing your active monster with the monster to your right or left (as denoted by the arrow on the action space). Switch actions require you to discard two cards from your hand, as denoted by [-] [-]. Place the discarded cards face-up on the discard [-] section of your player board. Additionally, select whether you are switch defending against a melee [MELEE] or ranged [RANGED] attack. Then, perform the following:',
        },
        {
            ul: [
                {
                  text: 'The monster that is switching out heals 2[HP].'
                },
                {
                  text: 'The monster that is switching in gains +2[DEF] this turn against attacks of the selected type (melee [MELEE] or ranged [RANGED]).'
                }
              ]
        },
        {
          text: '<b>NOTE:</b> You cannot switch to <a href="ko">KO’d</a> monsters.',
        },
        {
          text: '<h1>Monster Actions</h1>Monster actions, labeled 1 - 4, correspond to your active monster’s four action cards, arranged in a two by two grid. When you select a monster action, you must place the required number of [-] indicated on the <a href="action_card">monster action</a> from your hand face-up on the discard [-] section of your player board. For each [B] on the <a href="action_card">monster action</a>, you may optionally apply a <a href="buff_card">buff</a> from your hand to the action by placing each applied <a href="buff_card">buff</a> face-up on the buff [B] section of your action board. These actions are discussed in greater detail in the <a href="monster_actions">Monster Actions Detailed</a> section.'
        },
        {
          text: '<h1>Stat Cubes [PQ]</h1>Stat cubes [PQ] are used to augment monster <b>attacks [ATK]</b> using [PQ] you have accumulated. To apply stat cubes, when you select a monster attack [ATK] action, you may choose to apply ALL accumulated stat cubes of a single type to your monster attack action. Afterwards, the applied [PQ] are discarded.',
        },
        {
          text: '<h1>Basic Actions</h1>There are two different basic actions. The two basic actions are:',
          ul: [
            {
              text: '[+] [HP]',
              ul: [
                {
                  text: 'When you select this basic action, you draw one card and heal 1[HP] as your action for the turn.',
                }
              ]
            },
            {
              text: '[Q] [Q] [Q]',
              ul: [
                {
                  text: 'When you select this basic action, roll three [Q].'
                }
              ]
            }
          ]
        },
      ]
    },
    {
      title: 'Action Phase',
      id: 'action_phase',
      blocks: [
        {
          text: 'After both players have secretly selected their actions, you simultaneously reveal your selected actions. Actions occur in a specific order:',
          ol: [
            {
              text: '<a href="buff_timing">Apply used [PQ]</a>',
            },
            {
              text: '<a href="buff_timing">Apply Buffs</a>',
            },
            {
              text: '<a href="selection_phase">Switch Actions</a>',
            },
            {
              text: '<a href="monster_actions">Monster Actions</a>',
            },
            {
              text: '<a href="selection_phase">Basic Actions</a>',
            },
          ]
        }
      ]
    },
    {
      title: 'Monster Actions Detailed',
      id: 'monster_actions',
      blocks: [
        {
          text: 'Monster actions come in two types - attack [ATK] and special [SPECIAL]. Regardless of the type, monster actions may require you to discard a number of cards in order to use, as denoted by the number of discard symbols [-]. This is known as an action’s discard cost. You must discard a number of cards from your hand equal to the discard cost of the action. This is done by placing the required number of [-] from your hand face-up on the discard [-] section of your player board before reveal. If you have fewer cards in your hand than the action’s discard cost, you cannot use that action.'
        },
        {
          text: 'Monster actions with the draw [+] symbol let you draw that many cards after reveal, immedietly before resolving the action.',
        },
        {
          text: 'If both players reveal monster actions, the faster action goes first (the action with the greater speed [SPD] value). When both actions have the same speed, the monster with the higher <a href="monster_card">initiative</a> goes first.'
        },
        {
          text: '<h1>Monster Actions - Attack[ATK]</h1>A monster action is an attack if it has the attack [ATK] icon. The number beside the [ATK] icon is how much damage the attack deals then resolve the attack’s ability (if any).',
        },
        {
          text: 'The enemy monster then takes the resulting damage by decreasing its [HP] by that much. If the enemy monster has [DEF], reduce the resulting damage by the enemy monster\'s total [DEF]. Negative damage is 0.'
        },
        {
          text: '<h1>Monster Actions - Special[SPECIAL]</h1>A monster action is special if it has the special [SPECIAL] symbol. Special [SPECIAL] actions behave just like attacks except they do not deal damage. These actions usually make your monster stronger or make your opponent\'s monster weaker.',
        },
        {
          text: '<b>NOTE:</b> You cannot apply stat cubes to special actions.'
        },
        {
          text: '<h1>Disabled Actions[DISABLE]</h1>A monster action becomes disabled when it is selected. When a monster action is disabled, place a disabled token on the [DISABLE] space on the action. Actions that are disabled cannot be selected. A disabled monster action becomes enabled after performing your next action (Switch Action, Monster Action, or Basic Action).',
        },
      ]
    },
    {
      title: 'Stat Cube Board[PQ]',
      id: 'stat_cube_board',
      rulebookImage: 'Stat-Cube',
      blocks: [
        {
          text: 'Some abilities have monsters gaining stat cubes. Stat cubes can be used to increase your active monster’s stats for a turn - [ATK], [SPD], [DEF]. Whenever a player gains stat cubes, place them on their corresponding space on the stat cube board. Each stat type has a maximum number of cubes it can hold, as displayed on the space. When a player chooses to apply stat cubes during the selection phase, move all of the selected stat type\'s cubes to the USING side of the board, to denote that these are being applied to the attack.',
        },
      ]
    },
    {
      title: 'End Phase',
      id: 'end_phase',
      blocks: [
        {
          text: 'After you and your opponent have resolved your actions, perform the following:',
          ul: [
            {
              text: 'Resolve any end of turn abilities in <a href="monster_card">initiative</a> order.',
            },
            {
              text: 'Move all played buff cards and discards from you player board to your discard pile, and retrieve your facedown hand.'
            },
            {
              text: 'Add one time counter from your active <a href="buff_card">Team Aura</a> [TA], if applicable.',
            },
            {
              text: 'Remove all stat cubes from the USING side of your stat cube board'
            },
            {
              text: 'Draw [+] one card.'
            }
          ]
        },
        {
          text: 'After this has been done, a new turn begins with the <a href="selection_phase">selection phase</a>.'
        }
      ]
    },
    {
      title: 'KO’d Monsters',
      id: 'ko',
      blocks: [
        {
          text: 'Monsters are KO’d when their health points [HP] are reduced to 0. Whenever a monster is KO’d, the player controlling that monster selects one of their other monsters to be their new active monster.',
        },
        {
          text: '<b>NOTE:</b> In the instance where both monsters select a monster action, and the faster monster is KO’d from taking damage before the slower monster resolves their action, two things can happen: if the slower action it was an attack, the attack does nothing; if the slower action was a special action, it resolves.'
        },
      ]
    },
    {
      title: 'Deck & Hand Limit',
      blocks: [
        {
          text: 'Whenever you need to draw cards from your deck but your deck is empty, shuffle your discard pile to form a new deck. Then draw the requisite number of cards.'
        },
        {
          text: 'Players have a hand limit of five cards. If players would draw cards while having five cards in their hand, players do not draw additional cards.'
        }
      ]
    },
    {
      title: 'Playtesters',
      blocks: [
        {
          ul: [
            {
              text: 'Conor Cain',
            },
            {
              text: 'Chris Eyer',
            },
            {
              text: 'Zachary Gogel'
            },
            {
              text: 'Ethan Grosso',
            },
            {
              text: 'John Holt',
            },
            {
              text: 'Kevin Levesque',
            },
            {
              text: 'Will Little'
            },
            {
              text: 'Tim Oliva',
            },
            {
              text: 'Jim Palmeri',
            },
            {
              text: 'Dan Peterson',
            },
            {
              text: 'Mike Sette'
            },
            {
              text: 'Guy Tuori',
            },
            {
              text: 'Eric Twardzik',
            },
            {
              text: 'Mike Vessia',
            },
            {
              text: 'Diego Vizhnay',
            },
            {
              text: 'Jeff Kunkel',
            },
            {
              text: 'Josepth Santianna',
            },
            {
              text: 'Elijah Calub',
            },
            {
              text: 'Noah Cagle',
            },
          ]
        }
      ]
    }
];

  getTerm(term: TermCode): string {
    let text = TERM_CODES.find(t => t.key === term).value;
    ['<div>', '</div>'].forEach(html => {
      while (text.includes(html)) {
        text = text.replace(html, '');
      }
    });
    return text;
  }

  getKeywordGlossary(): Array<RulebookBlock> {
    let out = new Array<RulebookBlock>();
    TERM_CODES.forEach((term: Term) => {
      if (!['~GOOP~'].includes(term.key)) {
        let description: string = term.value;
        ['<div>', '</div>'].forEach(html => {
          while (description.includes(html)) {
            description = description.replace(html, '');
          }
        });
        let block: RulebookBlock = new RulebookBlock();
        block.text = `<b><u>${term.name}</u></b>`;
        block.id = term.name.toLowerCase();
        block.ul = [{text: getAbilityText(description, 'term', 'term-img')}];
        out.push(block);
      }
    });
    return out;
  }

}
