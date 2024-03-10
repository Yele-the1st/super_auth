import { cn } from "@/lib/utils";
import { FC } from "react";

interface headerProps {
  label: string;
}

const Header: FC<headerProps> = ({ label }) => {
  return (
    <div className=" w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl text-white font-semibold")}>Super Auth</h1>
      <p className=" text-white/85 text-sm">{label}</p>
    </div>
  );
};

export default Header;
