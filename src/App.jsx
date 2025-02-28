import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Usercard from './components/usercard.jsx';

// Dummy user data
const users = [
  {
    profilePhoto: 'https://via.placeholder.com/150',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    phone: '+123 456 7891',
    address: '456 Elm St, Springfield, USA',
  },
  {
    profilePhoto: 'https://via.placeholder.com/150',
    name: 'Bob Smith',
    email: 'bob@example.com',
    phone: '+987 654 3210',
    address: '789 Pine St, Springfield, USA',
  },
  {
    profilePhoto: 'https://via.placeholder.com/150',
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    phone: '+555 123 4567',
    address: '321 Oak St, Springfield, USA',
  },
];

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '16px',
  padding: '16px',
};

function App() {
  return (
    <div style={gridStyle}>
      {users.map((user, index) => (
        <Usercard
          key={index}
          profilePhoto={user.profilePhoto}
          name={user.name}
          email={user.email}
          phone={user.phone}
          address={user.address}
        />
      ))}
    </div>
  );
}

export default App;
