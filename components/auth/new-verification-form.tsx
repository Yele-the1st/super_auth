"use client";

import { FC, useCallback, useEffect } from "react";
import CardWrapper from "./card-wrapper";

import { HashLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";

interface NewVerificationFormProps {}

const NewVerificationForm: FC<NewVerificationFormProps> = ({}) => {
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    console.log(token);
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className=" flex items-center w-full justify-center ">
        <HashLoader color="#fcfcfc" size={20} />
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
