"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import "./styles.css";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const Link = ({ href, ...props }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NavigationMenu.Link asChild active={isActive}>
      <NextLink href={href} className="NavigationMenuLink" {...props} />
    </NavigationMenu.Link>
  );
};

export default function Navbar() {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item className="NavigationMenuItem">
          <Link href="/about">
            <span className="nav-indicator"></span>About
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="NavigationMenuItem">
          <Link href="/projects">
            <span className="nav-indicator"></span>Projects
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="NavigationMenuItem">
          <Link href="/jobs">
            <span className="nav-indicator"></span>Career History
          </Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
