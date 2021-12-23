import { Team } from "../models";
import { LastSixteenPlugin } from "./draw/sixteen";
import { SemisPlugin } from "./draw/semis";

export interface DrawRules {
  findValidRivals: (team: Team, teams: Team[]) => Team[];
}

export type DrawPlugin = () => DrawRules;
export type DrawPhaseExtensionType = {
  [phase in DrawPhase]: {
    label: string;
    plugin: DrawRules | null;
  };
};

export enum DrawPhase {
  groups = 32,
  sixteen = 16,
  eight = 8,
  semis = 4,
}

export const DrawPhaseExtension = () => {
  const extensions: DrawPhaseExtensionType = {
    [DrawPhase.groups]: {
      label: "Groups phase",
      plugin: null,
    },
    [DrawPhase.sixteen]: {
      label: "Last sixteen",
      plugin: LastSixteenPlugin(),
    },
    [DrawPhase.eight]: {
      label: "Last eight",
      plugin: null,
    },
    [DrawPhase.semis]: {
      label: "Semifinal",
      plugin: SemisPlugin(),
    },
  };

  return {
    get: (phase: DrawPhase) => extensions[phase],
  };
};
