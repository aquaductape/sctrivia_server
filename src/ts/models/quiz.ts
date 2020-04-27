type Attributes =
  | "light"
  | "armored"
  | "massive"
  | "biological"
  | "mechanical"
  | "psionic"
  | "summoned"
  | "structure"
  | "heroic";

interface Damage {
  flat: string;
  type?: string;
  light?: string;
  armored?: string;
  massive?: string;
  biological?: string;
  mechanical?: string;
  psionic?: string;
  summoned?: string;
  structure?: string;
  heroic?: string;
  [key: string]: any;
}
export interface Cost {
  type?: string;
  minerals: string;
  vespene: string;
  parent?: string[];
  [key: string]: any;
}
export type UnitStats = {
  health: string;
  shield?: string;
  energy?: string;
  supply?: string;
  supplyProvide?: string;
  cost: Cost[];
  abilities?: string[];
  attributes?: Attributes[];
  upgrades?: string[];
  attackGround?: Damage[];
  attackAir?: Damage[];
  [key: string]: any;
};

type AbilityStats = {
  caster: string;
  energyCost: string;
  choices: {
    content: string;
    answer: boolean;
    answerInfo?: string;
  }[];
  [key: string]: any;
};

export interface MultiplexCard
  extends Pick<MultipleChoice, "expansion" | "patch" | "date" | "bonus"> {
  race: "protoss" | "terran" | "zerg";
  name: string;
}

export interface MultiplexCardUnit extends MultiplexCard {
  type: "multiplexCardUnit";
  answers: UnitStats;
  abilitiesBank?: string[];
  upgradesBank?: string[];
}

export interface MultiplexCardAbility extends MultiplexCard {
  type: "multiplexCardAbility";
  answers: AbilityStats;
  castersBank: string[];
}

export interface TechTree
  extends Required<
    Omit<MultiplexCardUnit, "type" | "name" | "abilitiesBank" | "answers">
  > {
  type: "techTree";
  answers: {
    building: string;
    upgrades: string[];
  }[];
}

export interface MultipleChoice {
  type: "multipleChoice";
  expansion: "Wings of Liberty" | "Heart of the Swarm" | "Legacy of the Void";
  patch: string;
  date: string;
  bonus: boolean;
  question: string;
  multipleSelect: boolean;
  choices: {
    content: string;
    answer: boolean;
    answerInfo?: string;
  }[];
}

export interface TrueOrFalse
  extends Pick<
    MultipleChoice,
    "expansion" | "patch" | "question" | "date" | "bonus"
  > {
  type: "trueOrFalse";
  answer: boolean;
  answerInfo?: string;
}

type SortingList = {
  content?: string;
  icon?: string;
  extraInfo?: string;
};

export interface Sorting
  extends Pick<
    MultipleChoice,
    "expansion" | "patch" | "question" | "date" | "bonus"
  > {
  type: "sorting";
  question: string;
  answer: string[];
  bank: SortingList[];
  answerInfo?: string;
}

export type QuestionTypes =
  | Pick<MultiplexCardUnit, "type">
  | Pick<MultiplexCardAbility, "type">
  | Pick<MultipleChoice, "type">
  | Pick<TrueOrFalse, "type">
  | Pick<Sorting, "type">;

export type Question =
  | MultiplexCardUnit
  | MultiplexCardAbility
  | MultipleChoice
  | TechTree
  | TrueOrFalse
  | Sorting;
