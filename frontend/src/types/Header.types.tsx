export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface HeaderProps {
  title: string;
  links: NavLink[];
}