import { LastSixteenPlugin } from "./sixteen";
import { Team } from "../../models";
import teams from "../../teams/last-sixteen.json";

describe("Last sixten", () => {
  const { findValidRivals } = LastSixteenPlugin();
  it("valid rivals can not be from the same country, from the same group and for position 1 can only be paired with position 2", () => {
    expect(findValidRivals(teams[0] as Team, teams as Team[])).toEqual([
      {
        name: "Atlético Madrid",
        group: {
          id: "B",
          position: 2,
        },
        country: "ES",
      },
      {
        name: "Sporting",
        group: {
          id: "C",
          position: 2,
        },
        country: "PT",
      },
      {
        name: "Inter",
        group: {
          id: "D",
          position: 2,
        },
        country: "IT",
      },
      {
        name: "Benfica",
        group: {
          id: "E",
          position: 2,
        },
        country: "PT",
      },
      {
        name: "Villareal",
        group: {
          id: "F",
          position: 2,
        },
        country: "ES",
      },
      {
        name: "RB Salzburg",
        group: {
          id: "G",
          position: 2,
        },
        country: "DE",
      },
    ]);
  });
});
