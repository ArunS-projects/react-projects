import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { updatePatient } from '../redux/actions';

const PatientForm = ({ patient }) => {

  const [name, setName] = useState(patient.name);

  const [email, setEmail] = useState(patient.email);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {

    e.preventDefault();

    const updatedPatient = { ...patient, name, email };

    dispatch(updatePatient(updatedPatient));

  };

  return (

    <form onSubmit={handleSubmit}>

      <input

        type="text"

        value={name}

        onChange={(e) => setName(e.target.value)}

      />

      <input

        type="email"

        value={email}

        onChange={(e) => setEmail(e.target.value)}

      />

      <button type="submit">Update</button>

    </form>

  );

};

export default PatientForm;