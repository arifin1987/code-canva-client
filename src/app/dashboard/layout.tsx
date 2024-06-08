import { ReactNode } from "react";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-12 ">
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
