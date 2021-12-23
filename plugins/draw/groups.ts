import { DrawPlugin } from "../DrawPluginManger";

export const GroupsPhasePlugin: DrawPlugin = () => ({
  findValidRivals: (_, teams) => {
    return teams;
  },
});
