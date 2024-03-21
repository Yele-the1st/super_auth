import { ExtendedUser } from "@/next-auth";
import { FC } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

const UserInfo: FC<UserInfoProps> = ({ user, label }) => {
  return (
    <Card className=" max-w-md border-primary bg-black w-full shadow-md">
      <CardHeader>
        <p className="text-2xl text-white font-semibold text-center">{label}</p>
      </CardHeader>
      <CardContent className="space-y-4 text-white">
        <div className=" flex flex-row items-center justify-between rounded-lg border border-primary p-3 shadow-sm">
          <p className=" text-sm font-medium">ID</p>
          <p className=" truncate text-xs max-w-[180px] font-mono p-1 bg-accent-foreground shadow-sm rounded-md">
            {user?.id}
          </p>
        </div>
        <div className=" flex flex-row items-center justify-between rounded-lg border border-primary p-3 shadow-sm">
          <p className=" text-sm font-medium">Name</p>
          <p className=" truncate text-xs max-w-[180px] font-mono p-1 bg-accent-foreground shadow-sm rounded-md">
            {user?.name}
          </p>
        </div>
        <div className=" flex flex-row items-center justify-between rounded-lg border border-primary p-3 shadow-sm">
          <p className=" text-sm font-medium">Email</p>
          <p className=" truncate text-xs max-w-[180px] font-mono p-1 bg-accent-foreground shadow-sm rounded-md">
            {user?.email}
          </p>
        </div>
        <div className=" flex flex-row items-center justify-between rounded-lg border border-primary p-3 shadow-sm">
          <p className=" text-sm font-medium">Role</p>
          <p className=" truncate text-xs max-w-[180px] font-mono p-1 bg-accent-foreground shadow-sm rounded-md">
            {user?.role}
          </p>
        </div>
        <div className=" flex flex-row items-center justify-between rounded-lg border border-primary p-3 shadow-sm">
          <p className=" text-sm font-medium">Two Factor Authentication</p>
          <Badge
            variant={user?.isTwoFactorEnabled ? "success" : "destructive"}
            className=" font-mono"
          >
            {user?.isTwoFactorEnabled ? "ON" : "OFF"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserInfo;
