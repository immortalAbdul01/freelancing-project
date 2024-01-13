// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from './firebase-config';
import './UserList.css';
import EditUser from './EditUser';
const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    // Fetch data from the "users" collection
    const fetchUsers = async () => {
      try {
        const usersCollectionRef = collection(db, 'users');
        const usersSnapshot = await getDocs(usersCollectionRef);

        const usersData = usersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setUserList(usersData);
      } catch (error) {
        console.error('Error fetching users: ', error.message);
      }
    };

    fetchUsers();
  }, []); // Run the effect only once on mount

  const handleDelete = async (userId) => {
    try {
      const userDocRef = doc(db, 'users', userId);
      await deleteDoc(userDocRef);
      setUserList((prevList) => prevList.filter((user) => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user: ', error.message);
    }
  };

  const handleEdit = (user) => {
    setEditUser(user);
    // Open a modal or navigate to an edit page with the user data
    // You can create a separate EditUser component for editing
  };
 const handleClose = () => {
    setEditUser(null);
  };
  const handleUpdate = async (updatedData) => {
    try {
      const userDocRef = doc(db, 'users', editUser.id);
      await updateDoc(userDocRef, updatedData);
      setUserList((prevList) =>
        prevList.map((user) => (user.id === editUser.id ? { ...user, ...updatedData } : user))
      );
      setEditUser(null);
    } catch (error) {
      console.error('Error updating user: ', error.message);
    }
  };

  return (
    <div>
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Contact No</th>
            <th>Address</th>
            <th>Treatment</th>
            <th>Medical History</th>
            <th>Situp</th>
            <th>Date of Treatment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.patientName}</td>
              <td>{user.gender}</td>
              <td>{user.age}</td>
              <td>{user.contactNo}</td>
              <td>{user.address}</td>
              <td>{user.treatment}</td>
              <td>{user.medicalHistory}</td>
              <td>{user.sitUp}</td>
              <td>{user.dateOfTreatment.toDate().toLocaleDateString()}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
                <button onClick={() => handleEdit(user)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    {editUser && (
        <EditUser user={editUser} handleUpdate={handleUpdate} handleClose={handleClose} />
      )}
    </div>
  );
};

export default UserList;
