import logo from './logo.svg';
import './App.css';
import ExUseState from './component/ExUseState';
import ExContext from './component/ExContext';
import ExUseRef from './component/ExUseRef';
import ExUseReducer from './component/ExUseReducer';

function App() {
  return (
    <div className='App'>
      <ExUseState></ExUseState>

      <ExContext></ExContext>

      <ExUseRef></ExUseRef>

      <ExUseReducer></ExUseReducer>
    </div>
  );
}

export default App;
