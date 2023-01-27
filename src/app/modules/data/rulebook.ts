import { RulebookSection } from '../rulebook/rulebook.component';

export const rulebook: Array<RulebookSection> = [
    {
      title: 'Switchems!',
      columns: 2,
      blocks: [
        {
          text: 'Leverage your team of monsters in this exciting two-player card game',
        },
        {
          text: 'v.0.5.0',
        },
        {
          text: '2 Players   |   30 - 60 Minutes   |   Ages 12+',
        }
      ]
    },
    {
      title: 'How to Win',
      columns: 2,
      blocks: [
        {
          text: 'Knockout (KO) all three of your opponent’s monsters to win. Monsters are KO’d when their HP is reduced to 0.'
        }
      ]
    },
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
        text: 'There are a couple different modes of play in <b>Switchems!</b>:',
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
          text: 'At the start of each round, you will secretly select 3 monsters tol bring into the round that compose your team.'
        },
        {
            text: 'Players will choose their teams secretly and simultaneously. Take the associated monster cards of the 3 you have chosen, and place them face down in a triangular pattern - one above the other two, all face-down.'
        },
        {
            text: 'Once both players have done so, you simultaneously reveal your selections. The monster at the top is your active monster. The other two are placed beside your active monster, one on each side.'
        },
        {
            text: 'The monsters not selected are put to the side and will not be used for the remainder of the game.'
        }
      ]
    },
    {
      title: 'Monster Cards',
      rulebookImage: 'Monster',
      columns: 2,
      blocks: [
        {
          ol: [
            {
              text: 'Monster name',
            },
            {
              text: 'Elements of the monster',
            },
            {
              text: 'Monster ability name and ability text',
            },
            {
              text: 'Role (loosely describes the moster’s playstyle) and complexity (loosely describes how hard the monster is to play)',
            },
            {
              text: 'Initiative (breaks speed ties)',
            },
            {
              text: 'HP (hit points)',
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
      rulebookImage: 'Action',
      columns: 2,
      blocks: [
        {
          ol: [
            {
              text: 'Monster Action name',
            },
            {
              text: 'Denotes the type of Monster Action ([ATK], [SPECIAL], [TA])',
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
              text: 'Elemental modifier, dealing more damage if the enemy monster has one or more of these elements',
            },
            {
              text: 'Action number, so actions are always laid out in the same configuration',
            },
            {
              text: 'Card section, which can feature 3 different icons: [-] [+] [B]'
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
      rulebookImage: 'Buff',
      columns: 2,
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
          text: 'When enhancing actions with buff cards, players may select a buff card from their hand for each buff symbol on the selected monster action. Buff cards are chosen before the Action Phase, so before your opponent has revealed their selected action.'
        },
        {
            text: '<b>NOTE:</b> You can buff monster attacks with any buff card in your hand - they do not have to match your active monster.'
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
      title: 'Selection Phase',
      columns: 2,
      blocks: [
        {
          text: 'During the Selection Phase, you will secretly place your action cube on one of the 8 spaces on your action board. These 8 actions are split into 3 groups: Monster Actions, Standard Actions, and Switch Actions.',
        },
        {
            text: '<b>NOTE:</b> When you select any action, you must place your remaining hand face down behind your action screen on the Hand section.'
        },
        {
          text: '<h1>Monster Actions</h1>Monster Actions, labeled 1 - 4, correspond to players’ active monster’s 4 action cards, arranged in a 2 by 2 grid. When you select a monster action, you must place the required number of discards face-up on the Discard section of your action board. For each [B] on the action, you may optionally apply a buff from your hand to the action, placing each applied buff face-up on the Buff section of your action board.'
        },
        {
          text: '<h1>Switch Actions</h1>Switch actions require you to discard a card from your hand, as denoted by the [-] symbol. Place the discarded card face-up on the Discard section of your action board.',
          
        },
        {
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
            text: 'Switch Actions enable you to change your active monster, replacing your active monster with the monster to your right or left (as denoted by the arrow on the action space). Additionally, perform the following.'
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
      columns: 2,
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
    },
    {
      title: 'Buff Timing',
      blocks: [
        {
          text: 'Buff Cards have three stages of timing, which denote when they occur during the turn. These timings are Pre-Action, With Attack, and Post Actions.',
          ul: [
            {
              text: '<b>Pre-Actions (I):<b>',
              ul: [
                {
                  text: 'Buff Cards with Pre-Action timing occur before any actions occur. These buffs are resolved in initiative order.'
                }
              ]
            },
            {
              text: 'With Attack (II):',
              ul: [
                {
                  text: 'Buff Cards that have With Attack timing occur when that player’s selected monster attack action is being resolved, but before calculating damage.'
                },
                {
                  text: 'NOTE: If an attack action applied with a With Attack timing buff is prevented by another ability (like flinch), the attack never occurs, therefore the buff’s ability is prevented.'
                }
              ]
            },
            {
              text: 'Post Action (III):',
              ul: [
                {
                  text: 'Buff Cards with Post Action timing occur after all monster actions have been resolved. These buffs are resolved in initiative order.'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: 'Standard Buff Cards',
      blocks: [
        {
          text: 'When forming your buff deck at the start of a game, both you must include these two Standard buff cards. Including these in player’s decks makes switching monsters potentially less safe. It’s wise to be aware of how many of these are in your opponent’s discard pile.'
        }
      ]
    },
    {
      title: 'Stat Cube Board',
      columns: 2,
      rulebookImage: 'Stat-Cube',
      blocks: [
        {
          text: 'Some abilities have monster’s gaining stat cubes. Stat cubes modify your active monster’s stats. These can either be beneficial or detrimental.',
        },
        {
          text: 'When gaining positive stat cubes [PQ], place the number of cubes on the corresponding green space. When gaining negative stat cubes [NQ], place the number of cubes on the corresponding red space. If you gain positive cubes for stats that you already have negative cubes for, instead remove the negative cubes (and vice versa). Each stat has a maximum number of cubes, as denoted on the section.'
        },
        {
          text: 'The bottom of the board is used to track how many maneuver cubes you have used. When you use a maneuver cube, place it on the right-most available slot.'
        },
        {
          text: '<h1>Attack Stat Cubes</h1>Attack Stat Cubes modify the damage value for all of your monster attack actions. If you have 3[ATK][PQ] stat cubes, each of your active monster’s attack actions deal an additional 3 damage. Likewise, if you have 3[ATK][NQ] stat cubes, each of your active monster’s attack actions deal 3 damage less. Remember, attacks always deal at least 1 damage, even if the value is negative!'
        },
        {
          text: '<h1>Speed Stat Cubes</h1>Speed Stat Cubes modify the speed value of all monster actions. If you have 3[PQ] stat cubes, each of your active monster’s actions are 3 faster. Likewise, if you have 3[NQ] stat cubes, each of your active monster’s actions are 3 speed slower.',
        },
        {
          text: '<b>NOTE:</b> Monster actions can never have a speed higher than 9 and lower than 0.'
        },
        {
          text: '<h1>Defense Stat Cubes</h1>Defense Stat Cubes reduce the amount of damage your monster takes from attacks. These work differently from Attack and Speed cubes. No matter how many [DEF][PQ] your monster has, your monster gains +2[DEF]. During the end of turn phase, remove one [DEF][PQ].'
        },
      ]
    },
    {
      title: 'Flip Effects',
      blocks: [
        {
          text: 'All buff cards have a flip effect [FLIP], found at the bottom of the card. Sometimes effects have you flip the top card of your deck when resolving a monster attack, denoted by this symbol [FLIP]. For each [FLIP] symbol, flip the top card of your deck and apply its flip effect.'
        },
        {
          text: 'For example, when this card is flipped, your attack gains +1[ATK].'
        }
      ]
    },
    {
      title: 'End Phase',
      blocks: [
        {
          text: 'After you and your opponent have resolved your actions:',
          ul: [
            {
              text: 'Resolve any end of turn abilities in initiative order',
            },
            {
              text: 'Remove one time counter from each Team Aura',
            },
            {
              text: 'Remove one [DEF][PQ] from your monster, if applicable'
            },
            {
              text: 'Draw one card'
            }
          ]
        },
        {
          text: 'After this has been done, a new turn begins with the Selection Phase.'
        }
      ]
    },
    {
      title: 'Status Conditions [STATUS]',
      blocks: [
        {
          text: 'Many monsters have actions or buffs that apply certain status conditions [STATUS]. All [STATUS] remain on monsters until the end of the game unless removed by an effect or chosen to be removed on switch. Here is a list of all [STATUS]:',
          ul: [
            {
              text: 'Fatigue ~FATIGUE~'
            },
            {
              text: 'Wound ~WOUND~'
            },
            {
              text: 'Drain ~DRAIN~'
            },
            {
              text: 'Stun ~STUN~'
            },
          ]
        }
      ]
    },
    {
      title: 'KO’d Monsters',
      blocks: [
        {
          text: 'Monsters are KO’d when their health points are reduced to 0. Whenever a monster is KO’d, remove ALL cubes from that monster’s stat cube board, and the player controlling that monster selects one of their other monsters to be their new active monster.',
        },
        {
          text: 'NOTE: KO’d monsters can never recover HP.'
        }
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
    }
];
