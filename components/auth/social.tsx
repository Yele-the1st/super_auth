"use client";

import { FC } from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

interface socialProps {}

const Social: FC<socialProps> = ({}) => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex items-center w-full gap-x-2 ">
      <Button
        size={"lg"}
        className=" border border-primary hover:bg-primary hover:text-white bg-black text-white w-full shadow-md"
        variant={"outline"}
        onClick={() => onClick("google")}
      >
        <FcGoogle size={20} />
      </Button>
      {/* <Button
        size={"lg"}
        className=" border border-primary hover:bg-primary hover:text-white bg-black text-white w-full shadow-md"
        variant={"outline"}
        onClick={() => onClick("github")}
      >
        <FaGithub size={20} />
      </Button> */}
    </div>
  );
};

export default Social;
