"use client";
import { BiCollapse, BiMenu } from "react-icons/bi";

import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import "./styles.css";
import Link from "next/link";

export default function MobileNav() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="DropdownTrigger" asChild>
        <button
          className="DropdownIcon IconButton"
          aria-label="Customise options"
        >
          <span className="icon-closed">
            <BiMenu />
          </span>
          <span className="icon-open">
            <BiCollapse />
          </span>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent">
          <DropdownMenu.Item className="DropdownMenuItem">
            <Link href="/about">About</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            <Link href="/projects">Projects</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            <Link href="/jobs">Career History</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
