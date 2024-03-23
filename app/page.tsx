import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className=" h-full flex-col w-full bg-black bg-grid-small-white/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className=" z-20 flex flex-col justify-center items-center mb-10 space-y-4">
        <p className="text-4xl sm:text-7xl font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          Super Auth
        </p>
        <p className="text-neutral-400 max-w-lg mx-auto text-sm text-center relative z-10">
          An amazing auth service using NextAuth
        </p>
      </div>
      <LoginButton asChild mode="modal">
        <Button size={"lg"}>Sign In</Button>
      </LoginButton>
    </div>
  );
}
