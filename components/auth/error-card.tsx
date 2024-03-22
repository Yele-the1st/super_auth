"use client";

import { FC } from "react";
import CardWrapper from "./card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { useSearchParams } from "next/navigation";
import FormError from "../form-error";

interface ErrorCardProps {}

const ErrorCard: FC<ErrorCardProps> = ({}) => {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Sign in with the same account you used originally!"
      : "";

  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className=" w-full flex flex-col space-y-4 justify-center items-center">
        {/* <ExclamationTriangleIcon className=" text-destructive" /> */}
        <FormError message={urlError} />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
