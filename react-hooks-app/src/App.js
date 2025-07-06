// import logo from './logo.svg';
import './App.css';
import CustomHookUseFetch from './CustomHookUseFetch';
import HooksBasics from './HooksBasics';
import Memoization from './Memoization';
import SumMemoization from './SumMemoization';
// import CounterComponent from './UseReducer';
// import ParentComponent from './ParentComponent';
// import UseContextAPI from './UseContextAPI';
// import UseState from './UseState';
// import UseEffect from './UseEffect';
// import UseRefHook from './useRefHook';

function App() {
  return (
    <div>
      <HooksBasics/>
      {/* <UseState/> */}
      {/* <UseEffect/> */}
      {/* <ParentComponent/> */}
      {/* <UseContextAPI/> */}
      {/* <UseRefHook/>
      <CounterComponent/> */}
      <Memoization/>
      Sum of two numbers using useMemo hook
      <SumMemoization/>
      <CustomHookUseFetch/>
    </div>
  );
}

export default App;
