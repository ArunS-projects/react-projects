// import logo from './logo.svg';
import './App.css';
import ClipboardEvents from './Components/ClipboardEvents';
import FormEvents from './Components/FormEvents';
import KeyboardEvents from './Components/KeyboardEvents';
import MouseEvents from './Components/MouseEvents';

function App() {
  return (
    <div className="App-header">
      <h3 className='h3'>Here we will learn event handling in ReactJS<br/>Types of Events in ReactJS:</h3>
        <ol type ='1'>
          <li>Mouse Events</li>
          <li>Keyboard Events</li>
          <li>Form Events</li>
          <li>Focus Events</li>
          <li>Clipboard Events</li>
        </ol>
      <MouseEvents/>
      <KeyboardEvents/>
      <FormEvents/>
      <ClipboardEvents/>
    </div>
  );
}

export default App;
