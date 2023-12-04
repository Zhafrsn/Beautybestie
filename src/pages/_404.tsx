/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import NotFound from "../components/NotFound"
import { Navbar } from 'components/Navbar';
import { Footer } from 'components/Footer';
import { Sidebar } from 'components/Sidebar';

const _404: React.FC = () => {
    return (
        <>
            <Sidebar contentId="side-bar" isOpen={false} toggleSidebar={() => {}} />
            <Navbar />
            <div>
                <NotFound />
            </div>
            <Footer />
        </>
    );
};

export default _404