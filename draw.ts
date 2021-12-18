import { Team } from "./models";

export const findValidRivals = (team: Team, teams: Team[]): Team[] => {
  return teams.filter(({ name, group, country }) => {
    return !(
      name === team.name ||
      group.id === team.group.id ||
      country === team.country ||
      (group.position === 1 ? team.group.position === 1 : false)
    );
  });
};
