import React from 'react';
import withDataFetching from './components/DataFetching';
import DataDisplay from './components/DataDisplay';

const Data = withDataFetching('https://jsonplaceholder.typicode.com/posts')(DataDisplay);
const App = () => {
  return (
    <div>
      <h1>Data Fetching Example</h1>
      <Data/>
    </div>
  );
};

export default App;