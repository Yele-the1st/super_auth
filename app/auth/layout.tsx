import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" h-full flex-col w-full bg-black bg-grid-small-white/[0.2] relative flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
