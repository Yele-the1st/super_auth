import Navbar from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className=" overflow-y-scroll min-h-screen h-full flex-col py-14 w-full bg-black bg-grid-small-white/[0.2] relative flex items-center justify-center">
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
