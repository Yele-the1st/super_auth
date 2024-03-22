"use client";

import { UserButton } from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface navbarProps {}

const Navbar: FC<navbarProps> = ({}) => {
  const pathname = usePathname();

  return (
    <nav className=" mb-4 bg-black border border-primary flex justify-between items-center p-4 sm:rounded-xl w-full max-w-md shadow-sm">
      <div className=" gap-x-2 hidden sm:flex">
        <Button asChild variant={pathname === "/server" ? "default" : "ghost"}>
          <Link href={`/server`}>Server</Link>
        </Button>
        <Button asChild variant={pathname === "/client" ? "default" : "ghost"}>
          <Link href={`/client`}>Client</Link>
        </Button>
        <Button asChild variant={pathname === "/admin" ? "default" : "ghost"}>
          <Link href={`/admin`}>Admin</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/settings" ? "default" : "ghost"}
        >
          <Link href={`/settings`}>Settings</Link>
        </Button>
      </div>

      <div className="flex sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className=" focus:outline-none">
            <HamburgerMenuIcon className=" h-5 w-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className=" p-2 bg-black border border-primary w-40"
            align="start"
          >
            <DropdownMenuItem
              asChild
              className=" focus:bg-primary rounded-md focus:text-white focus:outline-none text-sm text-white flex items-center "
            >
              <Link href={`/server`}>Server</Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
              className=" focus:bg-primary rounded-md focus:text-white focus:outline-none text-sm text-white flex items-center "
            >
              <Link href={`/client`}>Client</Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
              className=" focus:bg-primary rounded-md focus:text-white focus:outline-none text-sm text-white flex items-center "
            >
              <Link href={`/admin`}>Admin</Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
              className=" focus:bg-primary rounded-md focus:text-white focus:outline-none text-sm text-white flex items-center "
            >
              <Link href={`/settings`}>Settings</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <UserButton />
    </nav>
  );
};

export default Navbar;
