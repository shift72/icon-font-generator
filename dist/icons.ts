export type IconsId =
  | "account"
  | "favorite"
  | "search";

export type IconsKey =
  | "Account"
  | "Favorite"
  | "Search";

export enum Icons {
  Account = "account",
  Favorite = "favorite",
  Search = "search",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Account]: "61697",
  [Icons.Favorite]: "61698",
  [Icons.Search]: "61699",
};
