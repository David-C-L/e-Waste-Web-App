import './NavBar.css';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../UserContext';

function NavBar() {

  const { user, setUser } = useContext(UserContext); 

  return (
    <div className='NavBar'>
      <p>
        <Link className='NavBarLink' to='/'>Home</Link>
        <Link className='NavBarLink' to='/market'>Marketplace</Link>
        <Link className='NavBarLink' to='/requests'>Requests</Link>
        <Link className='NavBarLink' to='/feed'>Repair Forum</Link>
        { user !== null
          ? <button onClick={() => setUser(null)}> logout </button>
          : <Link className='NavBarLink' to='/login'>Login</Link>
        }
      </p>
    </div>
  );
}

export default NavBar;