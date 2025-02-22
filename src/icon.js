import logo from './logo.svg';
import './icon.css';

function icon() {
  return (
    <div className="icon">
      <header className="icon-header">
        <img src={logo} className="icon-logo" alt="logo" />
        <p>
          Edit <code>src/icon.js</code> and save to reload.
        </p>
        <a
          className="icon-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default icon;
