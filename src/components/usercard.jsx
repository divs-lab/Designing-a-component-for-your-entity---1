import React from 'react';
import './Usercard.css';

const Usercard = ({ profilePhoto, name, email, phone, address }) => {
  return (
    <div className="usercard">
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
      <h2 className="user-name">{name}</h2>
      <p className="user-email">{email}</p>
      <p className="user-phone">{phone}</p>
      <p className="user-address">{address}</p>
    </div>
  );
};

export default Usercard;
