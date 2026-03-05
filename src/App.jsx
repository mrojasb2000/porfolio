import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/Profile';
import './App.css';
import logo from './assets/logo.svg';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
          <Routes>
            <Route path="/" element={<Profile username="octocat" />} />
          </Routes>
      </BrowserRouter>
    </div>
  );    
}

export default App;
