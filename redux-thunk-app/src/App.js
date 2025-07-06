import React from 'react';
import { Provider } from 'react-redux';
import globalStore from './redux/globalStore';
import PatientList from './components/PatientList';

const App = () => {
  return (
    <Provider store={globalStore}>
      <div>
        <h1>Hospital Management System</h1>
        <PatientList />
      </div>
    </Provider>
  );
};

export default App;