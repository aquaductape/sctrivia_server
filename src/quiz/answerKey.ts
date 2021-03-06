import { Question } from "../ts/models/quiz";

const answerKey: Question[] = [
  {
    type: 'multipleChoice',
    expansion: 'Legacy of the Void',
    date: '17 December 2019',
    patch: '4.11.3',
    bonus: false,
    multipleSelect: true,
    choices: [
      { content: 'Concussive Shells', answer: true },
      { content: 'Force Field', answer: true },
      { content: 'Graviton Beam', answer: true },
      { content: 'Knockback from KD8 Charge', answer: true },
      { content: 'None of the above', answer: false }
    ],
    question: 'Units with the Massive attribute are not effected by'
  },
  {
    type: 'multiplexCardUnit',
    bonus: false,
    name: 'archon',
    race: 'protoss',
    expansion: 'Legacy of the Void',
    date: '17 December 2019',
    patch: '4.11.3',
    answers: {
      health: '10',
      shield: '350',
      supply: '4',
      cost: [
        {
          type: 'high-templar high-templar',
          minerals: '100',
          vespene: '300',
          parent: [ 'high-templar', 'high-templar' ]
        },
        {
          type: 'high-templar dark-templar',
          minerals: '175',
          vespene: '275',
          parent: [ 'high-templar', 'dark-templar' ]
        },
        {
          type: 'dark-templar dark-templar',
          minerals: '250',
          vespene: '250',
          parent: [ 'dark-templar', 'dark-templar' ]
        }
      ],
      attributes: [ 'psionic', 'massive' ],
      attackGround: [ { flat: '25', biological: '31' } ],
      attackAir: [ { flat: '25', biological: '31' } ]
    }
  },
  {
    type: 'multiplexCardUnit',
    bonus: false,
    name: 'marine',
    race: 'terran',
    expansion: 'Legacy of the Void',
    patch: '4.11.3',
    date: '17 December 2019',
    answers: {
      health: '45',
      supply: '1',
      cost: [ { minerals: '100', vespene: '0' } ],
      abilities: [ 'stimpack' ],
      attributes: [ 'light', 'biological' ],
      attackGround: [ { flat: '5' } ],
      attackAir: [ { flat: '5' } ]
    },
    abilitiesBank: [ 'stimpack', 'entomb', 'vortex', 'mass-recall' ]
  },
  {
    type: 'multiplexCardUnit',
    bonus: false,
    name: 'siege-tank',
    race: 'terran',
    expansion: 'Legacy of the Void',
    patch: '4.11.3',
    date: '17 December 2019',
    answers: {
      health: '175',
      supply: '3',
      cost: [ { minerals: '150', vespene: '125' } ],
      abilities: [ 'siege-tank-siege-mode', 'siege-tanke-tank-mode' ],
      attributes: [ 'armored', 'mechanical' ],
      attackGround: [
        { type: 'tank mode', flat: '15', armored: '25' },
        { type: 'siege mode', flat: '40', armored: '70' }
      ]
    },
    abilitiesBank: [
      'siege-tank-siege-mode',
      'siege-tank-tank-mode',
      'computer-terminals',
      'point-defense-drone'
    ]
  },
  {
    type: 'techTree',
    race: 'terran',
    patch: '4.11.3',
    date: '17 December 2019',
    expansion: 'Legacy of the Void',
    bonus: false,
    answers: [
      { building: 'command-center', upgrades: [] },
      {
        building: 'engineering-bay',
        upgrades: [
          'terran-infantry-weapons-level-1',
          'terran-infantry-armor-level-1',
          'terran-infantry-weapons-level-2',
          'terran-infantry-armor-level-2',
          'terran-infantry-weapons-level-3',
          'terran-infantry-armor-level-3',
          'hi-sec-auto-tracking',
          'neosteel-armor'
        ]
      },
      {
        building: 'barracks',
        upgrades: [ 'combat-shield', 'stimpack', 'concussive-shells' ]
      },
      {
        building: 'factory',
        upgrades: [
          'infernal-pre-igniter',
          'mag-field-accelerator',
          'drilling-claws',
          'smart-servos'
        ]
      },
      {
        building: 'ghost-academy',
        upgrades: [ 'personal-cloaking', 'enhanced-shockwaves' ]
      },
      {
        building: 'armory',
        upgrades: [
          'terran-vehicle-weapons-level-1',
          'terran-vehicle-weapons-level-2',
          'terran-vehicle-weapons-level-3',
          'terran-vehicle-plating-level-1',
          'terran-vehicle-plating-level-2',
          'terran-vehicle-plating-level-3',
          'terran-ship-weapons-level-1',
          'terran-ship-weapons-level-2',
          'terran-ship-weapons-level-3'
        ]
      },
      {
        building: 'starport',
        upgrades: [ 'corvid-reactor', 'cloaking-field', 'hyperflight-rotors' ]
      },
      {
        building: 'fusion-core',
        upgrades: [
          'weapon-refit',
          'rapid-reignition-system',
          'advanced-ballistics'
        ]
      }
    ],
    upgradesBank: [
      'stimpack',
      'advanced-ballistics',
      'behemoth-reactor',
      'caduceus-reactor',
      'cloak',
      'cloak',
      'combat-shield',
      'concussive-shells',
      'corvid-reactor',
      'drilling-claws',
      'durable-materials',
      'enhanced-munitions',
      'enhanced-shockwaves',
      'explosive-shrapnel-shells',
      'high-capacity-fuel-tanks',
      'hi-sec-auto-tracking',
      'hyperflight-rotors',
      'infernal-pre-igniter',
      'jotun-boosters',
      'mag-field-accelerator',
      'mag-field-launchers',
      'moebius-reactor',
      'neosteel-frame',
      'nitropacks',
      'rapid-fire-launchers',
      'recalibrated-explosives',
      'structure-armor',
      'transformation-servos',
      'terran-ship-plating-level-1',
      'terran-ship-plating-level-2',
      'terran-ship-plating-level-3',
      'terran-ship-weapons-level-1',
      'terran-ship-weapons-level-2',
      'terran-ship-weapons-level-3',
      'terran-vehicle-plating-level-1',
      'terran-vehicle-plating-level-2',
      'terran-vehicle-plating-level-3',
      'terran-vehicle-weapons-level-1',
      'terran-vehicle-weapons-level-2',
      'terran-vehicle-weapons-level-3',
      'terran-infantry-armor-level-1',
      'terran-infantry-armor-level-2',
      'terran-infantry-armor-level-3',
      'terran-infantry-weapons-level-1',
      'terran-infantry-weapons-level-2',
      'terran-infantry-weapons-level-3',
      'yamato-cannon'
    ]
  },
  {
    type: 'sorting',
    bonus: false,
    expansion: 'Legacy of the Void',
    date: '17 December 2019',
    patch: '4.11.3',
    question: 'Units have ranks based by the amount of kills they have. For the <strong>Protoss</strong>, order the rank names based from lowest to highest',
    answer: [ 'disciple', 'mentor', 'instructor', 'master', 'executor' ],
    bank: [
      { content: 'disciple' },
      { content: 'mentor' },
      { content: 'instructor' },
      { content: 'master' },
      { content: 'executor' }
    ]
  },
  {
    type: 'sorting',
    bonus: false,
    expansion: 'Legacy of the Void',
    date: '17 December 2019',
    patch: '4.11.3',
    question: 'A player moved a <strong>Thor</strong> in range of following units below. Order the units based on which the <strong>Thor</strong> would attack first from lowest to highest priority',
    answer: [ 'liberator', 'marauder', 'liberator-defender-mode', 'raven' ],
    bank: [
      { icon: 'liberator' },
      { icon: 'marauder' },
      { icon: 'liberator-defender-mode' },
      { icon: 'raven' }
    ]
  },
  {
    type: 'sorting',
    bonus: false,
    expansion: 'Legacy of the Void',
    date: '17 December 2019',
    patch: '4.11.3',
    question: 'A player moved a <strong>Queen</strong> in range of following units below. Order the units based on which the <strong>Queen</strong> would attack first from lowest to highest priority',
    answer: [ 'colossus', 'oracle', 'high-templar', 'phoenix' ],
    bank: [
      { icon: 'colossus' },
      { icon: 'oracle' },
      { icon: 'high-templar' },
      { icon: 'phoenix' }
    ]
  },
  {
    type: 'sorting',
    bonus: false,
    expansion: 'Legacy of the Void',
    date: '17 December 2019',
    patch: '4.11.3',
    question: 'Units have ranks based by the amount of kills they have. For the Terran, order the rank names based from lowest to highest',
    answer: [ 'recruit', 'corporal', 'sergeant', 'captain', 'commander' ],
    bank: [
      { content: 'recruit' },
      { content: 'corporal' },
      { content: 'sergeant' },
      { content: 'captain' },
      { content: 'commander' }
    ]
  },
  {
    type: 'sorting',
    bonus: false,
    expansion: 'Legacy of the Void',
    date: '17 December 2019',
    patch: '4.11.3',
    question: 'Units have ranks based by the amount of kills they have. For the Zerg, order the rank names based from lowest to highest',
    answer: [ 'predator', 'slayer', 'ravager', 'assassin', 'metamorph' ],
    bank: [
      { content: 'predator' },
      { content: 'slayer' },
      { content: 'ravager' },
      { content: 'assassin' },
      { content: 'metamorph' }
    ]
  },
  {
    type: 'trueOrFalse',
    expansion: 'Legacy of the Void',
    date: '17 December 2019',
    patch: '4.11.3',
    bonus: false,
    question: 'Do Infested Terrans have the ability to burrow?',
    answer: true
  },
  {
    type: 'multiplexCardUnit',
    bonus: false,
    name: 'immortal',
    race: 'protoss',
    expansion: 'Legacy of the Void',
    date: '17 December 2019',
    patch: '4.11.3',
    answers: {
      health: '200',
      shield: '100',
      supply: '4',
      cost: [ { minerals: '275', vespene: '100' } ],
      abilities: [ 'hardened-shields' ],
      attributes: [ 'armored', 'mechanical' ],
      attackGround: [ { flat: '20', armored: '50' } ]
    },
    abilitiesBank: [ 'barrier', 'hardened-shields', 'shadow-cannon' ]
  },
  {
    type: 'multiplexCardUnit',
    bonus: false,
    name: 'raven',
    race: 'terran',
    expansion: 'Legacy of the Void',
    date: '17 December 2019',
    patch: '4.11.3',
    answers: {
      health: '140',
      energy: '200',
      supply: '2',
      cost: [ { minerals: '100', vespene: '200' } ],
      attributes: [ 'light', 'mechanical' ],
      upgrades: [ 'durable-materials', 'corvid-reactor' ]
    },
    upgradesBank: [
      'durable-materials',
      'corvid-reactor',
      'explosive-shrapnel-shells',
      'recalibrated-explosives'
    ]
  },
  {
    type: 'multiplexCardUnit',
    bonus: false,
    name: 'mothership',
    race: 'protoss',
    expansion: 'Legacy of the Void',
    date: '17 December 2019',
    patch: '4.11.3',
    answers: {
      health: '350',
      shield: '350',
      energy: '200',
      supply: '8',
      cost: [ { minerals: '400', vespene: '400' } ],
      attributes: [ 'armored', 'mechanical', 'massive', 'psionic', 'heroic' ],
      abilities: [ 'cloaking-field', 'mass-recall', 'time-warp-red' ],
      attackGround: [ { flat: '6' } ],
      attackAir: [ { flat: '6' } ]
    },
    abilitiesBank: [
      'cloaking-field',
      'mass-recall',
      'time-warp-red',
      'time-warp-green',
      'photon-overcharge',
      'mass-recall-to-nexus'
    ]
  },
  {
    type: 'multiplexCardUnit',
    race: 'terran',
    expansion: 'Legacy of the Void',
    patch: '4.11.3',
    date: '17 December 2019',
    name: 'liberator',
    bonus: false,
    answers: {
      attributes: [ 'armored', 'mechanical' ],
      health: '180',
      supply: '3',
      cost: [ { minerals: '150', vespene: '150' } ],
      attackGround: [ { flat: '75' } ],
      attackAir: [ { flat: '5' } ],
      upgrades: [ 'advanced-ballistics' ]
    },
    upgradesBank: [ 'advanced-ballistics' ]
  },
  {
    type: 'multiplexCardUnit',
    race: 'terran',
    expansion: 'Legacy of the Void',
    patch: '4.11.3',
    date: '17 December 2019',
    bonus: false,
    name: 'infested-terran',
    answers: {
      health: '50',
      attributes: [ 'biological', 'light', 'summoned' ],
      abilities: [ 'burrow' ],
      cost: [ { minerals: '0', vespene: '0' } ],
      attackGround: [ { flat: '6' } ],
      attackAir: [ { flat: '14' } ]
    },
    abilitiesBank: [ 'burrow' ]
  },
  {
    type: 'multiplexCardAbility',
    race: 'zerg',
    expansion: 'Legacy of the Void',
    patch: '4.11.3',
    date: '17 December 2019\t',
    bonus: true,
    name: 'abduct',
    castersBank: [ 'infestor', 'queen', 'viper', 'changeling' ],
    answers: {
      caster: 'viper',
      energyCost: '75',
      choices: [
        {
          answer: true,
          content: 'Pulls a target unit to the location of the Viper.'
        }
      ]
    }
  },
  {
    type: 'trueOrFalse',
    bonus: false,
    expansion: 'Legacy of the Void',
    patch: '4.11.3',
    date: '17 December 2019',
    answer: false,
    question: 'Do Thors have energy'
  }
];
export default answerKey;
