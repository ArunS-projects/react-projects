import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserList from './components/UserList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Saga Example</h1>
        <UserList />
      </div>
    </Provider>
  );
};

export default App;