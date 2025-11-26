import type { NavLink } from "@/types/Header.types";

export const HEADER_TITLE = "NextUP";

export const HEADER_NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "MLB Prospects", href: "/players",
    children: [
      { label: "Teams", href: "/player/a" },
      { label: "Top Players", href: "/player/b" },
    ],
  },
  { label: "About", href: "/about" },
];

export const HEADER_CONFIG = {
  title: HEADER_TITLE,
  links: HEADER_NAV_LINKS,
};