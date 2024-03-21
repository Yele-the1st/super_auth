"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { FaUser } from "react-icons/fa";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogoutButton } from "./logout-button";
import { ExitIcon } from "@radix-ui/react-icons";

export const UserButton = () => {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" focus:outline-none">
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className=" bg-primary">
            <FaUser />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className=" p-2 bg-black border border-primary w-40"
        align="end"
      >
        <LogoutButton>
          <DropdownMenuItem className=" hover:bg-primary p-2 rounded-md hover:outline-none text-sm text-white flex items-center ">
            <ExitIcon className="h-3 w-3 mr-2" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
