import React from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";
// import { Chat } from "@/components/Chat/Chat";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <Sidebar contentId="main-content" />
      <div id="main-content" className="main-content">
        <Navbar />
        <div className="content-wrapper ion-padding">
          {children}
          {/* <Chat /> */}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
