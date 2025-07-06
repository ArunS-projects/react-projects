import { FETCH_PATIENTS_REQUEST, FETCH_PATIENTS_SUCCESS, FETCH_PATIENTS_FAILURE, UPDATE_PATIENT_SUCCESS } from './actions';
  const initialState = {

    loading: false,

    patients: [],

    error: '',

  };

 

  const patientReducer = (state = initialState, action) => {

    switch (action.type) {

      case FETCH_PATIENTS_REQUEST:

        return { ...state, loading: true };

      case FETCH_PATIENTS_SUCCESS:

        return { loading: false, patients: action.payload, error: '' };

      case FETCH_PATIENTS_FAILURE:

        return { loading: false, patients: [], error: action.payload };

      case UPDATE_PATIENT_SUCCESS:

        return {

          ...state,

          patients: state.patients.map((patient) =>

            patient.id === action.payload.id ? action.payload : patient

          ),

        };

      default:

        return state;

    }

  };

 

  export default patientReducer;

