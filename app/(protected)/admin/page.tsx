"use client";

import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import FormSuccess from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";

const AdminPage = () => {
  const onServerActionClick = () => {
    admin().then((data) => {
      if (data.error) {
        toast.error(data.error);
      }
      if (data.success) {
        toast.success(data.success);
      }
    });
  };
  const onApiRouteClick = () => {
    fetch("/api/admin").then((response) => {
      if (response.ok) {
        toast.success("Allowed API Route!");
      } else {
        toast.error("Forbidden API Route!");
      }
    });
  };
  return (
    <Card className=" max-w-md border-primary bg-black w-full shadow-md">
      <CardHeader>
        <p className="text-2xl text-white font-semibold text-center">Admin</p>
      </CardHeader>
      <CardContent className="space-y-4 text-white">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message=" You are allowed to see this content!" />
        </RoleGate>
        <div className=" flex flex-row items-center justify-between rounded-lg border border-primary p-3 shadow-md">
          <p className=" text-sm font-medium">Admin-only API Route</p>
          <Button onClick={onApiRouteClick}>Click to test</Button>
        </div>
        <div className=" flex flex-row items-center justify-between rounded-lg border border-primary p-3 shadow-md">
          <p className=" text-sm font-medium">Admin-only Server Action</p>
          <Button onClick={onServerActionClick}>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
