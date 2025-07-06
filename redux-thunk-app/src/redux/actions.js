import axios from 'axios';

// Action Types
export const FETCH_PATIENTS_REQUEST = 'FETCH_PATIENTS_REQUEST';
export const FETCH_PATIENTS_SUCCESS = 'FETCH_PATIENTS_SUCCESS';
export const FETCH_PATIENTS_FAILURE = 'FETCH_PATIENTS_FAILURE';
export const UPDATE_PATIENT_SUCCESS = 'UPDATE_PATIENT_SUCCESS';

// Action Creators
export const fetchPatientsRequest = () => ({
  type: FETCH_PATIENTS_REQUEST,
});

export const fetchPatientsSuccess = (patients) => ({
  type: FETCH_PATIENTS_SUCCESS,
  payload: patients,
});

export const fetchPatientsFailure = (error) => ({
  type: FETCH_PATIENTS_FAILURE,
  payload: error,
});

export const updatePatientSuccess = (patient) => ({
  type: UPDATE_PATIENT_SUCCESS,
  payload: patient,
});

// Async Action Creator (Thunk)
export const fetchPatients = () => {
    return (dispatch) => {
      dispatch(fetchPatientsRequest());
      axios.get('https://jsonplaceholder.typicode.com/users') // Fake API
        .then((response) => {
  
          const patients = response.data.map((patient) => ({
  
            id: patient.id,
  
            name: patient.name,
  
            email: patient.email,
  
          }));

          dispatch(fetchPatientsSuccess(patients));

      })

      .catch((error) => {

        const errorMsg = error.message;

        dispatch(fetchPatientsFailure(errorMsg));

      });

  };

};

export const updatePatient = (patient) => {

  return (dispatch) => {

    // Simulate an API call to update patient

    setTimeout(() => {

      dispatch(updatePatientSuccess(patient));

    }, 1000);

  };

};