import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import type { HeaderProps } from "@/types/Header.types";

export function Header({ title, links }: HeaderProps) {
  return (
    <header className="w-full border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/30">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo / Title */}
        <div className="font-bold text-xl">{title}</div>

        {/* Navigation Menu */}
        <NavigationMenu className="ml-8">
          <NavigationMenuList>
            {links.map((link) =>
              link.children ? (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-4 p-4 w-[250px]">
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <NavigationMenuLink href={child.href}>
                            {child.label}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuLink href={link.href}>
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search */}
        <div>
          
        </div>

        {/* User Profile / Settings */}
        <div>

        </div>
      </div>
    </header>
  );
}
