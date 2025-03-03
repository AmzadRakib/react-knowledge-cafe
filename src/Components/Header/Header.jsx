import React from 'react';
import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex items-center w-11/12 mx-auto justify-between p-4 border-b-2'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />

        </div>
    );
};

export default Header;