import React from 'react';
import { useState } from 'react';
import '../../styles/Address.css';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface Address {
 fullName: string;
 phoneNumber: string;
 streetAddress: string;
 city: string;
 region: string;
 postalCode: string;
}

export const AddressComponent: React.FC = () => {
    const [addresses, setAddresses] = useState<Address[]>([
 
     
     {
      fullName: 'Annisa Raulita',
      phoneNumber: '+62 841 3446 2214',
      streetAddress: 'Blok M/12, Jalan Apa,',
      city: 'Kecamatan,',
      region: 'Kota Makassar,',
      postalCode: '90235',
    },
    {
      fullName: 'Raul Nas',
      phoneNumber: '+62 841 3446 2214',
      streetAddress: 'Blok M/12, Jalan Apa Lain,',
      city: 'Kecamatan,',
      region: 'Kota Makassar,',
      postalCode: '90235.',
    },
 ]);
 

 const [primaryAddress, setPrimaryAddress] = useState<Address>(addresses[0]);

 const setAsPrimary = (address: Address) => {
    setPrimaryAddress(address);
 };
 return (
    <div>
     <table>
     <button className="Address__AddnewaddressBTN" onClick={() => console.log('Add new address')}>+ Add New Address</button>
       
       <thead>
         
                 <tr>
                 

          </tr>
        </thead>
        <tbody>
   <div>
     <div className='Address-Container'>
     <div className='Address-TitleDanBtnNew'>
      <h1>Address</h1>
      <button className='Address-BtnNewAddress' onClick={() => console.log('Add new address')}>+ Add New Address</button>
      </div>
          {addresses.map((address) => (
            <AddressRow
            key={address.phoneNumber}
            address={address}
            isPrimary={address === primaryAddress}
            setAsPrimary={setAsPrimary}
            />
            ))}
        </div>
     </div>
 );
};

interface AddressRowProps {
 address: Address;
 isPrimary: boolean;
 setAsPrimary: (address: Address) => void;
}

const AddressRow: React.FC<AddressRowProps> = ({ address, isPrimary, setAsPrimary }) => {
 return (
     <div className='Address-MenuAlamat1'>
       <div className='Address-Alamat1'>
         <div className='Address-NamaNomor'>
            <p className='Address-FullName'>{address.fullName}</p>
            <hr />         
            <p className='Address-PhoneNumber'>{address.phoneNumber}</p>
         </div>
            <p>{address.streetAddress} {address.city} {address.region} {address.
            postalCode}</p>
         <button className= 'Address-Primary' onClick={() => setAsPrimary(address)}>{isPrimary ? 'Primary' : 'Set as Primary'}</button>
       </div>
       <div className='Address-Icons'>
         <FontAwesomeIcon icon={faEdit} className='Address-Icon'/>
         <FontAwesomeIcon icon={faTrash} className='Address-Icon'/>
       </div>
     </div>
 );
};

export default AddressRow;