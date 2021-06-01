import './NavBar.css';
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div className='NavBar'>
      <p>
        <Link className='NavBarLink' to='/'>Home</Link>
        <Link className='NavBarLink' to='/login'>Login</Link>
      </p>
    </div>
  );
}

export default NavBar;