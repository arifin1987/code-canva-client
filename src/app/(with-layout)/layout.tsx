import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { ReactNode } from "react";

const WithLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default WithLayout;
