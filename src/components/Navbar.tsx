"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link"; //kyuki jitne bhi <a> tags hote h eoh page relod kara dete h usko avoid karne ke liye link use karte h 

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl", className)}>
      <Menu setActive={setActive}>
        <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">

            </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
            <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/courses"> All Courses</HoveredLink>
                <HoveredLink href="/courses"> Basic Music Theory</HoveredLink>
                <HoveredLink href="/courses"> Advance composition</HoveredLink>
                <HoveredLink href="/courses"> Song writing</HoveredLink>
                <HoveredLink href="/courses"> Music production</HoveredLink>
            </div>
        </MenuItem>
        <Link href={"/contacts"}>
            <MenuItem setActive={setActive} active={active} item="Contact us">

            </MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default Navbar
