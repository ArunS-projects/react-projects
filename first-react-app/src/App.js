// import logo from './logo.svg';
import './App.css';
import ClassComponents from './ClassComponents';
import ClassNameAttribute from './ClassNameAttribute';
import ConditionalRendering from './ConditionalRendering';
import ConditionalRenderingTernaryOperator from './ConditionalRenderingTernaryOperator';
// import DataTransferUsingProps from './DataTransferUsingProps';
import FunctionalComponents from './FunctionalComponents';
import Incrementor from './Incrementor';
import JSXfragment from './JSXfragment';
import State1 from './State1';
import StateInFunctionalComponent from './StateInFunctionalComponents';
import UpdateElement from './UpdateElement';

function App() {
  return (
    <div className="App">
      {/* <h1>
        Successfully started my first react application!
        Let's look at the commands used so far.
        <ul>Commands in sequence:</ul>
        <li>npx create-react-app pass_app_name_here</li>
        <li>cd folder_name</li>
        <li>npm start: used to start the development server</li>
        <br></br>
      Following these steps will render the react on browser. 
      </h1>
      <h2>------------Class Component Text below because ClassComponents is called after this statement----------------</h2> */}

      <ClassComponents/>
      <FunctionalComponents/>
      <UpdateElement/>
      <JSXfragment/>
      <ClassNameAttribute/>
      <ConditionalRendering/>
      <ConditionalRenderingTernaryOperator/>
      <State1/>
      <ConditionalRenderingTernaryOperator/>
      <StateInFunctionalComponent/>
      <Incrementor/>
      {/* DataTransferUsingProps called in ClassComponent. and working */}
      {/* <DataTransferUsingProps/> */}
    </div>
  );
}

export default App;
