import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from 'react-router-dom'
import Menu from './menu/menu'

function App() {
  return (
    <div className="App">
      <Menu />
      
    </div>
  );
}

export default App;
