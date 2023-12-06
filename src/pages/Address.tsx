import React from 'react';
import {MainLayout} from "../layout";
import ProfileComp from 'components/Profile/ProfileComp';
import { AddressComponent } from 'components/Address/Address';

const Address: React.FC = () => {
    return (
        <MainLayout>
            <div className='HistoryPage'>
                <ProfileComp/>
                <AddressComponent/>
            </div>
        </MainLayout>
        );
};

export default Address;
