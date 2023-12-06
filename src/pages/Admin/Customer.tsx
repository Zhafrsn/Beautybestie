import React from 'react';
import { Layout } from './layout';
import '../../styles/Admin/CustomerAdmin.css';
import CustomerAction from './Components/Customer/Action';
import Table from './Components/User/UserTable';
import ActionTable from './Components/Customer/ActionTable';


const Customer: React.FC = () => {
  const tableHeaders = ['No', 'Name', 'Phone', 'Email', 'Address', 'Action'];
  const tableData = [
    { No: 1, Name: 'Bambang', Phone: '081344539080', Email: 'bambang@gmail.com', Address: 'Rusa Street', Action: <ActionTable/> },
    { No: 2, Name: 'Nina', Phone: '081345687989', Email: 'nina@gmail.com', Address: 'Harimau Street', Action: <ActionTable/> },
    { No: 3, Name: 'Annisa', Phone: '081324685289', Email: 'raulitaLemos@gmail.com', Address: 'Beruang Street', Action: <ActionTable/> },
    { No: 4, Name: 'Zhafran', Phone: '082637282910', Email: 'kevizaki@gmail.com', Address: 'Anggrek Street', Action: <ActionTable/> },
    { No: 5, Name: 'Bahri', Phone: '082637182829', Email: 'kintamani56@gmail.com', Address: 'Mawar Street', Action: <ActionTable/> },
    { No: 6, Name: 'Zan', Phone: '082920182910', Email: 'zanistism@gmail.com', Address: 'Tulip Street', Action: <ActionTable/> },
  ];

    return (
        <div>
            <Layout>
                <div className='admin-user__container'>
                    <div className='admin-user__content'>Customer</div>
                    <div className='admin-user__container2'>
                        <CustomerAction/>
                        <div className='admin-user__table'>
                            <Table headers={tableHeaders} data={tableData} />
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Customer;
