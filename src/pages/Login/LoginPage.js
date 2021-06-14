import axios from 'axios';
import './LoginPage.css';
import { useContext, useState } from 'react';
import { UserContext } from '../../UserContext';
import {Link} from 'react-router-dom'
import LoginDetails from './LoginDetails';

function LoginPage() {
  const { user, setUser } = useContext(UserContext); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePassword = event => {
    setPassword(event.target.value)
  };

  const handleEmail = event => {
    setEmail(event.target.value);
  };

  const attemptLogin = email => {
    axios.get(`https://drp21-backend.herokuapp.com/api/v1/users/${email}`)
      .then(response => {
        setUser(response.data);
        setEmail('');
        setPassword('');
      })
      .catch(() => {
        setEmail('');
        setPassword('');
      }) 
  };

  return (
    <div className='LoginPage' align='center'>
      {
        user
        ? <>
            <h2>Hi, {user.firstname}</h2> 
            <button onClick={() => setUser(null)}>logout</button> 
          </>
        : <>
            <LoginDetails
              email={email}
              handleEmail={handleEmail}
              password={password}
              handlePassword={handlePassword}
              attemptLogin={attemptLogin}
            />
            <div className='CreateAccountText'>
              <p>Don't have an account?
                <Link className='CreateAccountLink' to='/createAccount'>Click here to create one.</Link>
              </p>
            </div>
          </>
      }
    </div>
  );
}

export default LoginPage;