import logo from './logo.svg';
import './App.css';
import IsPalindrome from './isPalindrome';
import Button from './Button';
import Login from './login';
import Counterfunction from './counterfunction';
import Counter from './counter';
import DisplayDropdown from './DisplayDropdown';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"











    
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      <IsPalindrome> </IsPalindrome>
      <Button> </Button>
      <Login> </Login>
      <Counterfunction> </Counterfunction>
      <Counter> </Counter>
      <DisplayDropdown> </DisplayDropdown>
    </div>
  );
}

export default App;
