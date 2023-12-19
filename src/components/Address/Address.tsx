/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useState } from 'react';
import '../../styles/Address.css';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-modal';
import '../../styles/Address.css';

interface Address {
  fullName: string;
  phoneNumber: string;
  streetAddress: string;
  city: string;
  region: string;
  postalCode: string;
}

const localStorageKey = 'addresses';

export const AddressComponent: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>(() => {
    const storedAddresses = localStorage.getItem(localStorageKey);
    return storedAddresses ? JSON.parse(storedAddresses) : [];
  });

  const [primaryAddress, setPrimaryAddress] = useState<Address>(addresses[0]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newAddress, setNewAddress] = useState<Address>({
    fullName: '',
    phoneNumber: '',
    streetAddress: '',
    city: '',
    region: '',
    postalCode: '',
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(addresses));
  }, [addresses]);

  const setAsPrimary = (address: Address) => {
    setPrimaryAddress(address);
 };
 return (
  <div className='Address-Container'>
    <div className='Address-TitleDanBtnNew'>
      <h1>Address</h1>
      <button className='Address-BtnNewAddress' onClick={() => console.log('Add new address')}>+ Add New Address</button>
    </div>
    <div className='list-address'>
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
  onDelete: () => void;
}

const AddressRow: React.FC<AddressRowProps> = ({ address, isPrimary, setAsPrimary, onDelete }) => {
  return (
    <div className="Address-MenuAlamat1">
      <div className="Address-Alamat1">
        <div className="Address-NamaNomor">
          <p className="Address-FullName">{address.fullName}</p>
          <hr />
          <p className="Address-PhoneNumber">{address.phoneNumber}</p>
        </div>
        <p>
          {address.streetAddress} {address.city} {address.region} {address.postalCode}
        </p>
        <button className="Address-Primary" onClick={() => setAsPrimary(address)}>
          {isPrimary ? 'Primary' : 'Set as Primary'}
        </button>
      </div>
      <div className="Address-Icons">
        <FontAwesomeIcon icon={faEdit} className="Address-Icon" />
        <FontAwesomeIcon icon={faTrash} className="Address-Icon" onClick={onDelete} />
      </div>
    </div>
  );
};

export default AddressRow;