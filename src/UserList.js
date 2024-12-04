import React from 'react';

const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user._id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
