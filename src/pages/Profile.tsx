import React from "react";
import { MainLayout } from "layout";
import ProfileComp from "components/Profile/ProfileComp";

const AboutUs: React.FC = () => {
    return (
      <MainLayout>
        <div>
         <ProfileComp/>
        </div>
      </MainLayout>
    );
  };
  
  export default AboutUs;