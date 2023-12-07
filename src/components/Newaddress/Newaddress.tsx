import React, { useState } from 'react';
import '../../styles/Newaddress.css';

export const Newaddress: React.FC = () => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [ProvinceCityDistrictPostCode, setAddresses] = useState('');
    const [StreetnameBuildingHouseNumber, setStreetnameBuildingHouseNumber] = useState('');
    const [OthersDetails, setOthersDetail] = useState('');

return (
        <div className="Newaddress-container">
            <p className='Newaddress-header'>New Address</p>
            <div className='Newaddress-input-items'>
                <div className='Newaddress__inputs-container1'>
                    <label htmlFor="fullName" className='newaddress-label'>Full Name</label>
                    <div className='addnewaddress-button'>
                        <input
                            type="text"
                            id="fullname"
                            placeholder='Your full name'
                            className='namenewaddress-input'
                        />
                    </div>
                </div>
                <div className='Newaddress__inputs-container2'>
                    <label htmlFor='Phone number' className='Phonenumber-label'>Phone Number</label>
                    <div className='addnewaddress-button'>
                        <input
                            type="text"
                            id="phonenumber"
                            placeholder='Your phone number'
                            className='namemewaddress-input'
                        />
                    </div>
                </div>
                <div className='Newaddress__inputs-container3'>
                    <label htmlFor='Province, City District, PostCode' className='ProvinceCityDistrictPostCode-label'>Province, City District, PostCode</label>
                    <div className='addnewaddress-button'>
                        <input
                            type="text"
                            id="provincecitydistrictofpostcode"
                            placeholder='provincecitydistrictofpostcode'
                            className='namemewaddress-input'
                        />
                    </div>
                </div>
                <div className='Newaddress__inputs-container4'>
                    <label htmlFor='Street name, Building, House Number' className='StreetnameBuildingHouseNumber-label'>StreetName, Building, HouseNumber</label>
                    <div className='addnewaddress-button'>
                        <input
                            type="text"
                            id="StreetnameBuildingHouseNumber"
                            placeholder='StreetnameBuildingHouseNumber'
                            className='namenewaddress-input'
                        />
                    </div>
                </div>
                <div className='Newaddress__inputs-container5'>
                    <label htmlFor='OthersDetails' className='OthersDetail-label'>Others Details...</label>
                    <div className='addnewaddress-button'>
                        <input
                            type="text"
                            id="othersdetails"
                            className='namenewaddress-input'
                        />
                    </div>
            </div>
            <div>
                <div className='Addnew__Container'>
                    <button type="submit" className='Addnew__NewAddress__Btn'>+ Add New Address</button>
                    </div>
                </div>
            <div className='Bottomsdetails__Newaddress'>
            </div>
            <div>
                <p className='BottomMarks'>Mark as:</p>
                </div>
                <button type="button" className='Markas1__button'>Home</button>
                <button type="button" className='Markas2__button'>Office</button>

                <div className='later-okebutton'>
                    <button type="button" className="Markas3__button">Later</button>
                </div>
                    <button type="button" className='Markas4__button'>oke</button>
            </div>
        </div>
    
    );

}
