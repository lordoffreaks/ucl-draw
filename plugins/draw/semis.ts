import { DrawPlugin } from "../DrawPluginManger";

export const SemisPlugin: DrawPlugin = () => ({
  findValidRivals: (team, teams) => {
    return teams.filter(({ name }) => {
      return name !== team.name;
    });
  },
});
