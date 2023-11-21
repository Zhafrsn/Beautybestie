/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";

export const MainLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div>
      <Sidebar contentId="side-bar" isOpen={false} toggleSidebar={() => {}} />
      <Navbar />
        <div>
          {children}
        </div>
      <Footer />
    </div>
  );
};
