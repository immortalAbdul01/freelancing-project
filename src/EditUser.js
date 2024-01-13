// src/components/EditUser.js
import React, { useState } from 'react';

const EditUser = ({ user, handleUpdate, handleClose }) => {
  const [editedData, setEditedData] = useState({
    patientName: user.patientName,
    gender: user.gender,
    age: user.age,
    contactNo: user.contactNo,
    address: user.address,
    treatment: user.treatment,
    medicalHistory: user.medicalHistory,
    sitUp: user.sitUp,
    dateOfTreatment: new Date(user.dateOfTreatment.toDate().toISOString().split('T')[0]),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };

   const handleDateChange = (date) => {
    setEditedData({
      ...editedData,
      dateOfTreatment: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(editedData);
    handleClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <h2>Edit User</h2>
       <form onSubmit={handleSubmit}>
          <label>
            Patient Name:
            <input type="text" name="patientName" value={editedData.patientName} onChange={handleChange} />
          </label>

          <label>
            Gender:
            <div>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={editedData.gender === 'male'}
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={editedData.gender === 'female'}
                  onChange={handleChange}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={editedData.gender === 'other'}
                  onChange={handleChange}
                />
                Other
              </label>
            </div>
          </label>

          <label>
            Age:
            <input type="text" name="age" value={editedData.age} onChange={handleChange} />
          </label>

          <label>
            Contact No:
            <input type="text" name="contactNo" value={editedData.contactNo} onChange={handleChange} />
          </label>

          <label>
            Address:
            <input type="text" name="address" value={editedData.address} onChange={handleChange} />
          </label>

          <label>
            Treatment:
            <input type="text" name="treatment" value={editedData.treatment} onChange={handleChange} />
          </label>

          <label>
            Medical History:
            <input type="text" name="medicalHistory" value={editedData.medicalHistory} onChange={handleChange} />
          </label>

          <label>
            Situp:
            <input type="number" name="sitUp" value={editedData.sitUp} onChange={handleChange} />
          </label>

          <label>
            Date of Treatment:
            <input
              type="date"
              name="dateOfTreatment"
              value={editedData.dateOfTreatment.toISOString().split('T')[0]}
              onChange={(e) => handleDateChange(new Date(e.target.value))}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
