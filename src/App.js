import logo from './jumno.svg';
import Header from "./header";
import './App.css';
import './icon.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      </main>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p>
          <code>Welcome to my website!!</code>
          </p>
        <a
          className="App-link"
          href="https://dining.tufts.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tufts dining
        </a>
      </header>
    </div>
  );
}

export default App;
