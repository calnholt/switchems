import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Css } from 'src/app/types/dataTypes';
import { getAbilityText } from '../common/cards';

export interface RulebookSection {
  title?: string;
  blocks: Array<RulebookBlock>;
}

export interface RulebookBlock {
  text?: string;
  ul?: Array<RulebookBlock>;
  ol?: Array<RulebookBlock>;
}
@Component({
  selector: 'rulebook',
  templateUrl: './rulebook.component.html',
  styleUrls: ['./rulebook.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RulebookComponent implements OnInit {
  TERM_CSS: Css = 'term';
  ABILITY_IMG_CSS: Css = 'term-img';
  rulebook: Array<RulebookSection> = [
    {
      title: 'Components',
      blocks: [{
        ul: [
          {
            text: '20 Monsters, each with:',
            ul: [
              {
                text: '1 Monster Card',
              },
              {
                text: '4 Action Cards',
              },
              {
                text: '4 Buff Cards',
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
            text: '4 Stat Cube Boards',
          },
          {
            text: '8 Standard Buff Cards',
          },
          {
            text: '12 Maneuver Cubes',
          },
          {
            text: 'A variety of tokens (lots of cubes, dice for damage, etc)',
          }
        ]
      }]
    },
    {
      title: 'Setup',
      blocks: [
      {
        text: 'After determining your Mode of Play (detailed below), selecting your pool of monsters, and retrieving their associated cards (the following directions are for both players)',
      },
      {
        ol: [
          {
            text: 'Place your Player Shield in front of you, with your monsters, Action Board, and three Maneuver Cubes (three per player) behind it (all of which are hidden from your opponent).',
          },
          {
            text: 'Place your Stat Cube Board in front of the player shield (visible to your opponent).',
          },
          {
            text: 'After Choosing your Team (detailed below), form your deck by collecting the buff cards associated with your team of monsters (there will be 4 for each monster) as well as the two standard buff cards (your buff deck will then be 14 cards - 12 from monsters and 2 from standard). Shuffle your deck and place beside you.',
          },
          {
            text: 'Place your active monster card and its action cards in front of the Player Shield, and arrange the action cards in a 2 by 2 grid (the placement for each action does not matter).',
          },
          {
            text: 'For the two non-starting monsters, place one to the left of you, and the other to the right (which is placed where is irrelevant).',
          }
        ]
      },
      {
        text: 'Both players draw two cards and you’re ready to play!',
      }
    ]
    },
    {
      title: 'Modes of Play',
      blocks: [
      {
        text: 'There are a couple different modes of play in OverRealm:',
      },
      {
        ul: [
          {
            text: 'Draft',
            ul: [
              {
                text: 'Randomly select and shuffle 4 * [the number of players] monster reference cards together, and deal them out to each player. Each player secretly selects 1 monster from those cards, then passes the remaining monster cards to the left. Repeat this process until all players have 4 monsters.',
              },
            ],
          },
          {
            text: '1v1 Casual',
            ul: [
              {
                text: 'Randomly select 8 monster cards from the full pool of monsters and collect their respective Reference Cards. Shuffle the 8 reference cards, and deal 4 to each player. Both players will then secretly and simultaneously select 1 monster from the 4 cards. Then the players will exchange the remaining 3 cards and select another monster. All monsters selected after the first are revealed to each player. Keep doing this until both players have 4 monsters.',
              }
            ]
          },
          {
            text: '1v1 Competitive',
            ul: [
              {
                text: 'Players select 5 monsters they would like to use from their personal supply of monsters.',
              }
            ]
          }
        ]
      },
    ]},
    {
      title: 'Choosing your Team',
      blocks: [
        {
          text: 'At the start of each round, you will secretly select 3 monsters tol bring into the round that compose your team.<br><br>Players will choose their teams secretly and simultaneously. Take the associated monster cards of the 3 you have chosen, and place them face down in a triangular pattern - one above the other two, all face-down.<br><br>Once both players have done so, you simultaneously reveal your selections. The monster at the top is your active monster. The other two are placed beside your active monster, one on each side. <br><br>The monsters not selected are put to the side and will not be used for the remainder of the game.'
        }
      ]
    },
    {
      title: 'Monster Cards',
      blocks: [
        {
          ol: [
            {
              text: 'Monster name',
            },
            {
              text: 'Monster ability name and ability text',
            },
            {
              text: 'HP (hit points)',
            },
            {
              text: 'Elements of the monster (this monster is of both Rock and Leaf elements)',
            },
            {
              text: 'Role (loosely describes the moster’s playstyle) and complexity (loosely describes how hard the monster is to play)',
            },
            {
              text: 'Initiative (breaks speed ties)',
            },
            {
              text: 'Elemental weaknesses (takes more damage from attacks of these elements)',
            },
            {
              text: 'Elemental resistances (gains defense against attacks of the elements when switching in',
            },
          ]
        },
      ],
    },
    {
      title: 'Monster Actions',
      blocks: [
        {
          ol: [
            {
              text: 'Monster Action name',
            },
            {
              text: 'Denotes that this is a Monster Attack action that deals 2 damage',
            },
            {
              text: 'Denotes the element of this action',
            },
            {
              text: 'Denotes the speed of this action',
            },
            {
              text: 'Monster Action ability (not all monster actions have an ability)',
            },
            {
              text: 'Card section, which can feature 3 different icons: [-] [+] [B]'
            },
            {
              text: 'Elemental modifier, dealing more damage if the enemy monster has one or more of these elements',
            },
            {
              text: 'Action number, so actions are always laid out in the same configuration',
            },
            {
              text: 'The name of the monster',
            }
          ]
        }
      ]
    },
    {
      title: 'Buff Cards',
      blocks: [
        {
          ol: [
            {
              text: 'Buff card timing'
            },
            {
              text: 'Buff name',
            },
            {
              text: 'Buff ability text',
            },
            {
              text: 'Flip effect text',
            },
            {
              text: 'The monster the buff card is associated with',
            }
          ]
        },
        {
          text: 'Each monster has 4 buff cards. Your deck consists of the 4 buff cards from each of the 3 monsters in your team, plus the 2 Standard buff cards. Buff cards are used for either:',
          ul: [
            {
              text: 'Discarding them for actions with [-]'
            },
            {
              text: 'Enhancing monster attack actions with buffs [B]'
            }
          ]
        },
        {
          text: 'When enhancing actions with buff cards, players may select a buff card from their hand for each buff symbol on the selected monster action. Buff cards are chosen before the Action Phase, so before your opponent has revealed their selected action.<br><br><b>NOTE:</b> You can buff monster attacks with any buff card in your hand - they do not have to match your active monster.'
        }
      ]
    },
    {
      title: 'Phases of a Turn',
      blocks: [
        {
          text: 'Each turn is simultaneous (players don’t have their own individual turns). Below is a brief overview of the phases of each turn in the order they occur.',
          ol: [
            {
              text: 'Selection Phase',
              ul: [
                {
                  text: 'Both players secretly place their action cube on one of the eight potential actions on their action boards',
                },
              ]
            },
            {
              text: 'Action Phase',
              ul : [
                {
                  text: 'Both players reveal their selected actions and then resolve them:',
                  ol: [
                    {
                      text: 'Pre-Action Buffs',
                    },
                    {
                      text: 'Standard Actions',
                    },
                    {
                      text: 'Switch Actions',
                    },
                    {
                      text: 'Monster Actions',
                    },
                    {
                      text: 'Post Action Buffs',
                    },
                  ]
                }
              ]
            },
            {
              text: 'End Phase',
              ul: [
                {
                  text: 'Activate end of turn abilities',
                },
                {
                  text: 'Remove one time counter from each Team Aura',
                },
                {
                  text: 'Remove one [DEF][PQ] from your active monster, if applicable',
                },
                {
                  text: 'Draw one card',
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: 'How to Win',
      blocks: [
        {
          text: 'Knockout (KO) all three of your opponent’s monsters to win. Monsters are KO’d when their HP is reduced to 0.'
        }
      ]
    },
    {
      title: 'Selection Phase',
      blocks: [
        {
          text: 'During the Selection Phase, you will secretly place your action cube on one of the 8 spaces on your action board. These 8 actions are split into 3 groups: Monster Actions, Standard Actions, and Switch Actions. <br><br><b>NOTE:</b> When you select any action, you must place your remaining hand face down behind your action screen on the Hand section.',
        },
        {
          text: '<h1>Monster Actions</h1>Monster Actions, labeled 1 - 4, correspond to players’ active monster’s 4 action cards, arranged in a 2 by 2 grid. When you select a monster action, you must place the required number of discards face-up on the Discard section of your action board. For each [B] on the action, you may optionally apply a buff from your hand to the action, placing each applied buff face-up on the Buff section of your action board.'
        },
        {
          text: '<h1>Switch Actions</h1>Switch actions require you to discard a card from your hand, as denoted by the [-] symbol. Place the discarded card face-up on the Discard section of your action board.<br><br>Switch Actions enable you to change your active monster, replacing your active monster with the monster to your right or left (as denoted by the arrow on the action space). Additionally, perform the following.',
          ul: [
            {
              text: 'Choose <b>one</b>: the monster that is switching out heals 2HP OR remove a status condition from the monster that is switching out.'
            },
            {
              text: 'Remove all [NQ] from your stat cube board and remove all but one [PQ] from your stat cube board.'
            },
            {
              text: 'The monster that is switching in gains X[DEF] this turn against elements it is resistant against. The defense value and resistant elements are denoted on the monster card.'
            }
          ]
        },
        {
          text: 'You cannot switch to KO’d monsters.',
        },
        {
          text: '<h1>Standard Actions</h1>There are two different Standard Actions. Standard actions require one discard to use, as denoted by the [-]. Place the discarded card face-up on the Discard section of your action board. The two Standard Actions are:',
          ul: [
            {
              text: 'Draw Cards [+][+][+]',
              ul: [
                {
                  text: 'When you select the Draw Cards Standard Action, you draw 3 cards as your action for the turn.',
                }
              ]
            },
            {
              text: 'Counter [COUNTER]',
              ul: [
                {
                  text: 'When you select the Counter Standard Action, this protects your active monster this turn from your opponent’s monster attack action. Counter does not protect against special or team aura actions. If the enemy monster selected a monster attack, the enemy monster loses HP equal to the number of cards that player discarded for the attack and the number of buff slots that were used for the attack. Using the Counter action requires you to discard one maneuver cube. If you have no more maneuver cubes, you cannot use Counter. Spent maneuver cubes are placed on the Used Maneuver Cubes section on your Stat Cube Board.'
                }
              ]
            }
          ]
        },
        {
          text: '<h1>Protect an action</h1>Maneuver cubes can also be used to protect your selected actions. All actions except for Counter and be protected. To protect an action, you may select an action by placing a maneuver cube on the action space instead of the normal action cube. Spent maneuver cubes are placed on the Used Maneuver Cubes section on your Stat Cube Board. When you protect an action, both players ignore all elemental attack modifiers for the remainder of the turn. This discards the maneuver cube. Players without maneuver cubes cannot protect actions. <b>HOWEVER</b>, if both players protect an action, elemental action modifiers are instead NOT ignored for the remainder of the turn.',
        }
      ]
    },
    {
      title: 'Action Phase',
      blocks: [
        {
          text: 'After both players have secretly selected their actions, you simultaneously reveal your selected actions. Actions occur in a specific order:',
          ol: [
            {
              text: 'Pre-Action Buffs',
            },
            {
              text: 'Standard Actions',
            },
            {
              text: 'Switch Actions',
            },
            {
              text: 'Monster Actions',
            },
            {
              text: 'Post Action Buffs',
            },
          ]
        }
      ]
    },
    {
      title: 'Monster Actions Detailed',
      blocks: [
        {
          text: 'Monster Actions come in three types - attack [ATK], special [SPECIAL], and team aura [TA]. Regardless of the type, Monster Actions may require you to discard a number of cards in order to use, as denoted by the number of these discard symbols [-].. This is known as an action’s discard cost. You must discard a number of cards from your hard equal to the discard cost of the action. This is done behind your player shields and before reveal. If you have fewer cards in your hand than the action’s discard cost, you cannot use that action.'
        },
        {
          text: 'Likewise, monster actions with the draw symbol let you draw that many cards after reveal, when resolving the action. If both players reveal monster actions, the faster action goes first (the action with the greater speed value). When both actions have the same speed, the monster with the higher initiative goes first.'
        },
        {
          text: '<h1>Monster Actions - Attack [ATK]</h1>A monster action is an attack if it deals damage ([ATK]). When resolving a monster attack:',
          ul: [
            {
              text: 'Apply all <b>With Attack</b> buff card effects that were applied to this attack'
            },
            {
              text: 'Apply the attack’s effect (if any)',
            },
            {
              text: 'If the enemy monster is weak to the attack’s element, add this attack’s element modifier to the attack’s damage',
            }
          ]
        },
        {
          text: 'The enemy monster then takes the resulting damage.'
        },
        {
          text: '<h1>Monster Actions - Special [STATUS]</h1>A monster action is Special if it has this symbol. Special actions behave just like attacks except they do not deal damage and are not prevented by the Counter action. These actions usually make your monster stronger or make your opponent\'s monster weaker.',
        },
        {
          text: '<h1>Monster Actions - Team Aura [TA]</h1>A monster action is a Team Aura if it has this symbol. Team Aura actions create ongoing benefits for your active monster for a number of turns, as denoted by the number beside the team aura symbol, called its duration. Put a number of time counters on this action card equal to the action’s team aura duration value. At the end of each turn, remove a time counter.'
        },
        {
          text: 'While this action card has time counters on it, the team aura effect is active. This effect is active even if that monster is not your active monster.'
        },
        {
          text: 'NOTE: Team auras can never have more duration counters on it than its printed duration value.'
        },
        {
          text: 'NOTE: When a monster has a Team Aura with time counters on it and switches, keep that Team Aura action card visible to show that its effect is still active. When all of the time counters are removed, return the card to the monster.',
        }
      ]
    }
];



constructor() { }

ngOnInit() {
  console.log(this.rulebook);
  }

  display(text: string): string {
    return getAbilityText(text, 'term', 'term-img');
  }
}
