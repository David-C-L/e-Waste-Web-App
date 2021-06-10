import axios from 'axios';
import { useContext, useState } from 'react';
import { UserContext } from '../UserContext';

function LoginPage() {
  const { user, setUser } = useContext(UserContext); 
  const [input, setInput] = useState('');

  const handleInput = event => {
    setInput(event.target.value);
  };

  const attemptLogin = email => {
    axios.get(`https://drp21-backend.herokuapp.com/api/v1/users/${email}`)
      .then(response => {
        setInput('');
        setUser(response.data);
      })
      .catch(error => setInput('Account does not exist.')) 
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
            <h2>Login:</h2>
            <input type='text' onChange={handleInput} value={input} placeholder='Please enter your email.'/>
            <button onClick={() => attemptLogin(input)}>login</button>
          </>
      }
    </div>
  );
}

export default LoginPage;