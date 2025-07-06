import './App.css';
import CSSmodule from './CSSmodule';
import ExternalStyling from './ExternalStyling';
import InlineStyling from './InlineStyling';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Learn CSS Styling in React Apps
        There are 3 types of Styling:
        <li>Inline Styling</li>
        <li>External Styling</li>
        <li>Internal Styling</li>
        <u>Let's apply them <code>below</code>!</u>
        <InlineStyling/>
        <b>_________________________________________________________________</b>
        <ExternalStyling/>
        <b>_________________________________________________________________</b>
        <CSSmodule/>
        </header>
    </div>
  );
}

export default App;
