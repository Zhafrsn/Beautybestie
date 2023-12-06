import React from 'react';
import { useState } from 'react';
import '../../styles/Address.css';


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
      streetAddress: 'Blok M/12, Jalan Apa',
      city: 'Kecamatan',
      region: 'KOTA MAKASSAR',
      postalCode: '90235',
    },
    {
      fullName: 'Annisa Raulita',
      phoneNumber: '+62 841 3446 2214',
      streetAddress: 'Blok M/12, Jalan Apa Lain',
      city: 'Kecamatan',
      region: 'KOTA MAKASSAR',
      postalCode: '90235',
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
          {addresses.map((address) => (
            <AddressRow
              key={address.phoneNumber}
              address={address}
              isPrimary={address === primaryAddress}
              setAsPrimary={setAsPrimary}
            />
          ))}
        </tbody>
         </table>
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
     <tr>
         <div className="Address__Name">
             <td><h1>{address.fullName}</h1></td>
         </div>
         <div className="Address__PhoneNumber">
             <td><h2>{address.phoneNumber}</h2></td>
         </div>
         <div className="Address__Detail">
      <td><h3>{address.streetAddress}</h3></td>
      <td><h4>{address.city}</h4></td>
      <td><h5>{address.region}</h5></td>
             <td><h6>{address.postalCode}</h6></td>
             </div>
     <td>
        <button className="Address__PrimaBTN" onClick={() => setAsPrimary(address)}>{isPrimary ? 'Primary' : 'Set as Primary'}</button>
      </td>
    </tr>
 );
};

export default AddressRow;