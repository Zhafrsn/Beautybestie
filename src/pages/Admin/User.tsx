import React from 'react';
import { Layout } from './layout';
import '../../styles/Admin/UserAdmin.css';
import UserAction from './Components/Action';
import Table from './Components/User/UserTable';
import ActionTable from './Components/User/ActionTable';


const User: React.FC = () => {
     // Data contoh
  const tableHeaders = ['No', 'Username', 'Name', 'Address', 'Level', 'Action'];
  const tableData = [
    { No: 1, Username: 'SuperAdmin', Name: 'Misna', Address: 'Samata', Level: 'Super Admin', Action: <ActionTable/> },
    { No: 2, Username: 'Admin1', Name: 'Nadya', Address: 'Hertasning', Level: 'Admin', Action: <ActionTable/> },
    { No: 3, Username: 'Admin2', Name: 'Annisa', Address: 'Gowa', Level: 'Admin', Action: <ActionTable/> },
    { No: 4, Username: 'Admin3', Name: 'Zhafran', Address: 'Pettarani', Level: 'Admin', Action: <ActionTable/> },
    { No: 5, Username: 'Admin4', Name: 'Zan', Address: 'Urip', Level: 'Admin', Action: <ActionTable/> },
    { No: 6, Username: 'Admin5', Name: 'Bahri', Address: 'Antang', Level: 'Admin', Action: <ActionTable/> },
    // Tambahkan data sesuai kebutuhan
  ];

    return (
        <div>
            <Layout>
                <div className='admin-user__container'>
                    <div className='admin-user__content'>Admin List</div>
                    <div className='admin-user__container2'>
                        <UserAction/>
                        <div className='admin-user__table'>
                            <Table headers={tableHeaders} data={tableData} />
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default User;
