export type IconsId =
  | "account-circle"
  | "add"
  | "alert-error"
  | "alert-warning-filled"
  | "alert-warning-outline"
  | "arrow-down"
  | "arrow-left"
  | "arrow-right"
  | "arrow-up"
  | "award"
  | "bonus"
  | "bookmark-filled"
  | "bookmark-outline"
  | "browse"
  | "carousel-indicator"
  | "cast"
  | "check"
  | "close"
  | "credit-card"
  | "delete"
  | "donate"
  | "download-done"
  | "download"
  | "downloading"
  | "eye-off"
  | "eye-on"
  | "facebook"
  | "filter-horizontal"
  | "filter-vertical"
  | "fullscreen-exit"
  | "fullscreen"
  | "gift"
  | "home"
  | "info-outline"
  | "language"
  | "letterboxd"
  | "library"
  | "link"
  | "linkedin"
  | "mail"
  | "menu"
  | "more-vertical"
  | "notifications-filled"
  | "notifications-outline"
  | "open-external"
  | "pause"
  | "play-arrow-poster"
  | "play-arrow"
  | "refresh"
  | "search"
  | "settings"
  | "share"
  | "star"
  | "twitter"
  | "visa-card"
  | "vote";

export type IconsKey =
  | "AccountCircle"
  | "Add"
  | "AlertError"
  | "AlertWarningFilled"
  | "AlertWarningOutline"
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "ArrowUp"
  | "Award"
  | "Bonus"
  | "BookmarkFilled"
  | "BookmarkOutline"
  | "Browse"
  | "CarouselIndicator"
  | "Cast"
  | "Check"
  | "Close"
  | "CreditCard"
  | "Delete"
  | "Donate"
  | "DownloadDone"
  | "Download"
  | "Downloading"
  | "EyeOff"
  | "EyeOn"
  | "Facebook"
  | "FilterHorizontal"
  | "FilterVertical"
  | "FullscreenExit"
  | "Fullscreen"
  | "Gift"
  | "Home"
  | "InfoOutline"
  | "Language"
  | "Letterboxd"
  | "Library"
  | "Link"
  | "Linkedin"
  | "Mail"
  | "Menu"
  | "MoreVertical"
  | "NotificationsFilled"
  | "NotificationsOutline"
  | "OpenExternal"
  | "Pause"
  | "PlayArrowPoster"
  | "PlayArrow"
  | "Refresh"
  | "Search"
  | "Settings"
  | "Share"
  | "Star"
  | "Twitter"
  | "VisaCard"
  | "Vote";

export enum Icons {
  AccountCircle = "account-circle",
  Add = "add",
  AlertError = "alert-error",
  AlertWarningFilled = "alert-warning-filled",
  AlertWarningOutline = "alert-warning-outline",
  ArrowDown = "arrow-down",
  ArrowLeft = "arrow-left",
  ArrowRight = "arrow-right",
  ArrowUp = "arrow-up",
  Award = "award",
  Bonus = "bonus",
  BookmarkFilled = "bookmark-filled",
  BookmarkOutline = "bookmark-outline",
  Browse = "browse",
  CarouselIndicator = "carousel-indicator",
  Cast = "cast",
  Check = "check",
  Close = "close",
  CreditCard = "credit-card",
  Delete = "delete",
  Donate = "donate",
  DownloadDone = "download-done",
  Download = "download",
  Downloading = "downloading",
  EyeOff = "eye-off",
  EyeOn = "eye-on",
  Facebook = "facebook",
  FilterHorizontal = "filter-horizontal",
  FilterVertical = "filter-vertical",
  FullscreenExit = "fullscreen-exit",
  Fullscreen = "fullscreen",
  Gift = "gift",
  Home = "home",
  InfoOutline = "info-outline",
  Language = "language",
  Letterboxd = "letterboxd",
  Library = "library",
  Link = "link",
  Linkedin = "linkedin",
  Mail = "mail",
  Menu = "menu",
  MoreVertical = "more-vertical",
  NotificationsFilled = "notifications-filled",
  NotificationsOutline = "notifications-outline",
  OpenExternal = "open-external",
  Pause = "pause",
  PlayArrowPoster = "play-arrow-poster",
  PlayArrow = "play-arrow",
  Refresh = "refresh",
  Search = "search",
  Settings = "settings",
  Share = "share",
  Star = "star",
  Twitter = "twitter",
  VisaCard = "visa-card",
  Vote = "vote",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.AccountCircle]: "61697",
  [Icons.Add]: "61698",
  [Icons.AlertError]: "61699",
  [Icons.AlertWarningFilled]: "61700",
  [Icons.AlertWarningOutline]: "61701",
  [Icons.ArrowDown]: "61702",
  [Icons.ArrowLeft]: "61703",
  [Icons.ArrowRight]: "61704",
  [Icons.ArrowUp]: "61705",
  [Icons.Award]: "61706",
  [Icons.Bonus]: "61707",
  [Icons.BookmarkFilled]: "61708",
  [Icons.BookmarkOutline]: "61709",
  [Icons.Browse]: "61710",
  [Icons.CarouselIndicator]: "61711",
  [Icons.Cast]: "61712",
  [Icons.Check]: "61713",
  [Icons.Close]: "61714",
  [Icons.CreditCard]: "61715",
  [Icons.Delete]: "61716",
  [Icons.Donate]: "61717",
  [Icons.DownloadDone]: "61718",
  [Icons.Download]: "61719",
  [Icons.Downloading]: "61720",
  [Icons.EyeOff]: "61721",
  [Icons.EyeOn]: "61722",
  [Icons.Facebook]: "61723",
  [Icons.FilterHorizontal]: "61724",
  [Icons.FilterVertical]: "61725",
  [Icons.FullscreenExit]: "61726",
  [Icons.Fullscreen]: "61727",
  [Icons.Gift]: "61728",
  [Icons.Home]: "61729",
  [Icons.InfoOutline]: "61730",
  [Icons.Language]: "61731",
  [Icons.Letterboxd]: "61732",
  [Icons.Library]: "61733",
  [Icons.Link]: "61734",
  [Icons.Linkedin]: "61735",
  [Icons.Mail]: "61736",
  [Icons.Menu]: "61737",
  [Icons.MoreVertical]: "61738",
  [Icons.NotificationsFilled]: "61739",
  [Icons.NotificationsOutline]: "61740",
  [Icons.OpenExternal]: "61741",
  [Icons.Pause]: "61742",
  [Icons.PlayArrowPoster]: "61743",
  [Icons.PlayArrow]: "61744",
  [Icons.Refresh]: "61745",
  [Icons.Search]: "61746",
  [Icons.Settings]: "61747",
  [Icons.Share]: "61748",
  [Icons.Star]: "61749",
  [Icons.Twitter]: "61750",
  [Icons.VisaCard]: "61751",
  [Icons.Vote]: "61752",
};
