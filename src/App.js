import logo from './logo.svg';
import './App.css';
import ComponenteB from './components/container/comp_a';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteB></ComponenteB>
      </header>
    </div>
  );
}

export default App;
