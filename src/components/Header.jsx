import Link from './Link';
import './Header.css';

function Header({ logo }) {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <Link
          url="https://reactjs.org"
          title="Learn React"
        >
          Learn React
        </Link>
    </header>
  );
}

export default Header;