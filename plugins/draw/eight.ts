import { DrawPlugin } from "../DrawPluginManger";

export const LastEightPlugin: DrawPlugin = () => ({
  findValidRivals: (_, teams) => {
    return teams;
  },
});
