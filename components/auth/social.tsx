"use client";

import { FC } from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

interface socialProps {}

const Social: FC<socialProps> = ({}) => {
  return (
    <div className="flex items-center w-full gap-x-2 ">
      <Button
        size={"lg"}
        className=" border border-primary hover:bg-primary hover:text-white bg-black text-white w-full shadow-md"
        variant={"outline"}
        onClick={() => {}}
      >
        <FcGoogle size={20} />
      </Button>
      <Button
        size={"lg"}
        className=" border border-primary hover:bg-primary hover:text-white bg-black text-white w-full shadow-md"
        variant={"outline"}
        onClick={() => {}}
      >
        <FaGithub size={20} />
      </Button>
    </div>
  );
};

export default Social;
