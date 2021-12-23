// @see https://www.designcise.com/web/tutorial/how-to-pick-some-properties-of-a-typescript-type-and-make-them-optional

export type PartialPick<T, K extends keyof T> = {
  [P in K]?: T[P];
};

export type CopyWithPartial<T, K extends keyof T> = Omit<T, K> & Partial<T>;

export type Team = {
  name: string;
  seeded: boolean;
  group: {
    id: "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
    position: 1 | 2;
  };
  country: "UK" | "FR" | "ES" | "NL" | "PT" | "IT" | "DE";
};
