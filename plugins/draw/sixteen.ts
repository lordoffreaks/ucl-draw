import { DrawPlugin } from "../DrawPluginManger";

export const LastSixteenPlugin: DrawPlugin = () => ({
  findValidRivals: (team, teams) => {
    return teams.filter(({ name, group, country }) => {
      return !(
        name === team.name ||
        group.id === team.group.id ||
        country === team.country ||
        (group.position === 1 ? team.group.position === 1 : false)
      );
    });
  },
});
