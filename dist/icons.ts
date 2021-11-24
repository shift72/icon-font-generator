export type IconsId =
  | "account_circle"
  | "add"
  | "alert_error"
  | "alert_warning_filled"
  | "alert_warning_outline"
  | "arrow_down"
  | "arrow_left"
  | "arrow_right"
  | "arrow_up"
  | "award"
  | "bonus"
  | "bookmark_filled"
  | "bookmark_outline"
  | "browse"
  | "carousel_indicator"
  | "cast"
  | "check_box_off"
  | "check_box_on"
  | "check"
  | "close"
  | "credit_card"
  | "delete"
  | "donate"
  | "download_done"
  | "download"
  | "downloading"
  | "eye_off"
  | "eye_on"
  | "facebook"
  | "filter_horizontal"
  | "filter_vertical"
  | "fullscreen_exit"
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
  | "more_vertical"
  | "notifications_filled"
  | "notifications_outline"
  | "open_external"
  | "pause"
  | "play_arrow_poster"
  | "play_arrow"
  | "radio_button_off"
  | "radio_button_on"
  | "refresh"
  | "search"
  | "settings"
  | "share"
  | "star"
  | "twitter"
  | "visa_card"
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
  | "CheckBoxOff"
  | "CheckBoxOn"
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
  | "RadioButtonOff"
  | "RadioButtonOn"
  | "Refresh"
  | "Search"
  | "Settings"
  | "Share"
  | "Star"
  | "Twitter"
  | "VisaCard"
  | "Vote";

export enum Icons {
  AccountCircle = "account_circle",
  Add = "add",
  AlertError = "alert_error",
  AlertWarningFilled = "alert_warning_filled",
  AlertWarningOutline = "alert_warning_outline",
  ArrowDown = "arrow_down",
  ArrowLeft = "arrow_left",
  ArrowRight = "arrow_right",
  ArrowUp = "arrow_up",
  Award = "award",
  Bonus = "bonus",
  BookmarkFilled = "bookmark_filled",
  BookmarkOutline = "bookmark_outline",
  Browse = "browse",
  CarouselIndicator = "carousel_indicator",
  Cast = "cast",
  CheckBoxOff = "check_box_off",
  CheckBoxOn = "check_box_on",
  Check = "check",
  Close = "close",
  CreditCard = "credit_card",
  Delete = "delete",
  Donate = "donate",
  DownloadDone = "download_done",
  Download = "download",
  Downloading = "downloading",
  EyeOff = "eye_off",
  EyeOn = "eye_on",
  Facebook = "facebook",
  FilterHorizontal = "filter_horizontal",
  FilterVertical = "filter_vertical",
  FullscreenExit = "fullscreen_exit",
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
  MoreVertical = "more_vertical",
  NotificationsFilled = "notifications_filled",
  NotificationsOutline = "notifications_outline",
  OpenExternal = "open_external",
  Pause = "pause",
  PlayArrowPoster = "play_arrow_poster",
  PlayArrow = "play_arrow",
  RadioButtonOff = "radio_button_off",
  RadioButtonOn = "radio_button_on",
  Refresh = "refresh",
  Search = "search",
  Settings = "settings",
  Share = "share",
  Star = "star",
  Twitter = "twitter",
  VisaCard = "visa_card",
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
  [Icons.CheckBoxOff]: "61713",
  [Icons.CheckBoxOn]: "61714",
  [Icons.Check]: "61715",
  [Icons.Close]: "61716",
  [Icons.CreditCard]: "61717",
  [Icons.Delete]: "61718",
  [Icons.Donate]: "61719",
  [Icons.DownloadDone]: "61720",
  [Icons.Download]: "61721",
  [Icons.Downloading]: "61722",
  [Icons.EyeOff]: "61723",
  [Icons.EyeOn]: "61724",
  [Icons.Facebook]: "61725",
  [Icons.FilterHorizontal]: "61726",
  [Icons.FilterVertical]: "61727",
  [Icons.FullscreenExit]: "61728",
  [Icons.Fullscreen]: "61729",
  [Icons.Gift]: "61730",
  [Icons.Home]: "61731",
  [Icons.InfoOutline]: "61732",
  [Icons.Language]: "61733",
  [Icons.Letterboxd]: "61734",
  [Icons.Library]: "61735",
  [Icons.Link]: "61736",
  [Icons.Linkedin]: "61737",
  [Icons.Mail]: "61738",
  [Icons.Menu]: "61739",
  [Icons.MoreVertical]: "61740",
  [Icons.NotificationsFilled]: "61741",
  [Icons.NotificationsOutline]: "61742",
  [Icons.OpenExternal]: "61743",
  [Icons.Pause]: "61744",
  [Icons.PlayArrowPoster]: "61745",
  [Icons.PlayArrow]: "61746",
  [Icons.RadioButtonOff]: "61747",
  [Icons.RadioButtonOn]: "61748",
  [Icons.Refresh]: "61749",
  [Icons.Search]: "61750",
  [Icons.Settings]: "61751",
  [Icons.Share]: "61752",
  [Icons.Star]: "61753",
  [Icons.Twitter]: "61754",
  [Icons.VisaCard]: "61755",
  [Icons.Vote]: "61756",
};
