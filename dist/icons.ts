export type IconsId =
  | "feed"
  | "mic"
  | "search";

export type IconsKey =
  | "Feed"
  | "Mic"
  | "Search";

export enum Icons {
  Feed = "feed",
  Mic = "mic",
  Search = "search",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Feed]: "61697",
  [Icons.Mic]: "61698",
  [Icons.Search]: "61699",
};
