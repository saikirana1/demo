// Profile.js
import { useContext } from 'react';
import { UserContext } from './UserContext';

function Profile() {
  const { name, phone } = useContext(UserContext);

  return (
    <div>
      <h2>Profile Details:</h2>
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
    </div>
  );
}

export default Profile;