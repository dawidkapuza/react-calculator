import { create, all } from "mathjs";

export const mathjs = create(all);
mathjs.config({
  number: "BigNumber",
  precision: 64,
});
