// src/components/RegistrationForm.js
import React, { useState } from 'react';
import './Registration.css'; // Import the CSS file
import { collection ,addDoc } from 'firebase/firestore';
import { db } from './firebase-config';
import UserList from './UserList';
import Alert from 'react'
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    gender: 'male',
    age: '',
    contactNo: '',
    address: '',
    treatment: '',
    medicalHistory: '',
    sitUp: '',
    dateOfTreatment: new Date(),
  });

	const userCollectionRef = collection(db
	,"users")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

   const handleDateChange = (date) => {
    setFormData({
      ...formData,
      dateOfTreatment: date,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    Alert('Form submitted:');

    try {
      // Add the form data to the "users" collection in Firestore
      const docRef = await addDoc(userCollectionRef, formData);
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error.message);
    }
  };
  return (
	  <div className="registration-container">
		 <nav>
        <ul className="navbar">
          <li><a href="#home">Home</a></li>
          <li><a href="#register">Register</a></li>
        </ul>
		  </nav>
		  <h1
		  >Vijay Orthodontic clinic</h1>
      <div className="registration-form">
        <h1 style={{ opacity: 0 }}>My Dentist App</h1>
        <h2>Patient Registration</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Patient Name:
            <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} />
          </label>

          <label>
            Gender:
            <div>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === 'other'}
                  onChange={handleChange}
                />
                Other
              </label>
            </div>
          </label>

          <label>
            Age:
            <input type="text" name="age" value={formData.age} onChange={handleChange} />
          </label>

          <label>
            Contact No:
            <input type="text" name="contactNo" value={formData.contactNo} onChange={handleChange} />
          </label>

          <label>
            Address:
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
          </label>

          <label>
            Treatment:
            <input type="text" name="treatment" value={formData.treatment} onChange={handleChange} />
          </label>

          <label>
            Medical History:
            <input type="text" name="medicalHistory" value={formData.medicalHistory} onChange={handleChange} />
          </label>

          <label>
            Situp:
            <input type="number" name="sitUp" value={formData.sitUp} onChange={handleChange} />
          </label>

          <label>
            Date of Treatment:
            <input
              type="date"
              name="dateOfTreatment"
              value={formData.dateOfTreatment.toISOString().split('T')[0]}
              onChange={(e) => handleDateChange(new Date(e.target.value))}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
		  </div>
		  <UserList/>
    </div>
  );
};

export default RegistrationForm;
