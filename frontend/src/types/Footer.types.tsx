export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface FooterProps {
  links: NavLink[];
}