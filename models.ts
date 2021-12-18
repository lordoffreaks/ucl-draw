export type Team = {
  name: string;
  group: {
    id: "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
    position: 1 | 2;
  };
  country: "UK" | "FR" | "ES" | "NL" | "PT" | "IT" | "DE";
};
