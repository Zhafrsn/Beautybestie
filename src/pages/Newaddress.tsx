import React from 'react';
import {MainLayout} from "../layout";
import { Newaddress } from 'components/Newaddress';

const NewAddress: React.FC = () => {
    return (
        <MainLayout>
            <div>
                <Newaddress/>
            </div>
        </MainLayout>
        );
};

export default NewAddress;