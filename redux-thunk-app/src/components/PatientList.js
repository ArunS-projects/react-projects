import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchPatients } from '../redux/actions';

import PatientForm from './PatientForm';

const PatientList = () => {

  const dispatch = useDispatch();

  const { loading, patients, error } = useSelector((state) => state);

  useEffect(() => {

    dispatch(fetchPatients());

  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  return (

    <div>

      <h2>Patient List</h2>

      <ul>

        {patients.map((patient) => (

          <li key={patient.id}>

            {patient.name} - {patient.email}

            <PatientForm patient={patient} />

          </li>

        ))}

      </ul>

    </div>

  );

};

export default PatientList;