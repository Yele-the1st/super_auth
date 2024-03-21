import Navbar from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className=" h-full flex-col w-full bg-black bg-grid-small-white/[0.2] relative flex items-center justify-center">
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
