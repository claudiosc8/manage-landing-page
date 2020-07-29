import React, {useState} from 'react';
import logo from './images/logo.svg'
import devices from './images/illustration-devices.svg'
import './App.scss';

function App() {

  const [showMenu, setShowMenu] = useState(false)

  return (
      
      <React.Fragment>
      <header className='container'>
        <div className='logo'><img src={logo} alt='Logo'/></div>
        <nav>
          <ul className={`nav-links condensed${showMenu ? ' show' : ''}`}>
            <li className='nav-link'>Product</li>
            <li className='nav-link'>Features</li>
            <li className='nav-link'>Pricing</li>
            <li className='divider'></li>
            <li className='nav-link'>Login</li>
          </ul>
          <div className={`mobile-menu-wrapper${showMenu ? ' active' : ''}`} onClick={() => setShowMenu(!showMenu)}>
            <div className={`mobile-menu`}></div>
          </div>
        </nav>
      </header>
      <div className='container'>
        <div className='col text'>
          <div className='row'>
            <span className='condensed hightlight'>New</span>
            <span className='condensed tagline'>Monograph dashboard</span>
          </div>
          <h1 className='condensed'>Powerful insights into your team</h1>
          <div className='description'>Project planning and time tracking for agile teams</div>
          <div className='row'>
            <div className='button condensed'>Schedule a demo</div>
            <span className='secondary condensed'>to see a preview</span>
          </div>
        </div>
        <div className='col illustration'>
        <img src={devices} alt='Illustration Devices' />
        </div>
      </div>
      </React.Fragment>
  );

}

export default App;
