import axios from 'axios';
import { useState } from 'react';
import './CreateAccount.css';

function CreateAccount () {
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailInput = event => {
    setEmail(event.target.value);
  }

  const handleFirstnameInput = event => {
    setFirstname(event.target.value);
  }

  const handleSurnameInput = event => {
    setSurname(event.target.value);
  }

  const handlePasswordInput = event => {
    setPassword(event.target.value);
  }

  const handleSubmit = () => {
    if (email && firstname && surname && password) {
      axios.post('https://drp21-backend.herokuapp.com/api/v1/users/', {
        'email': email,
        'firstname': firstname,
        'surname': surname
      })
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
    } else {
      console.log('empty');
    }
  }

  return (
    <div className='CreateAccountPage' align='center'>
      <h2>Create an account</h2>
      <div className='CreateAccountForm'>
      <label for='emailInput'> Email Address: </label>
        <input id='emailInput' className='CreateAccountInput' 
          type='text' placeholder='Please enter your email address.'
          onChange={handleEmailInput}
        />
        <br/><br/>
        <label for='firstNameInput'> First name: </label>
        <input  id='firstNameInput' className='CreateAccountInput' 
          type='text' placeholder='Please enter your firstname.' 
          onChange={handleFirstnameInput}
        />
        <br/><br/>
        <label for='surnameInput'> Surname: </label>
        <input id='surnameInput' className='CreateAccountInput'
          type='text' placeholder='Please enter your surname.'
          onChange={handleSurnameInput}
        />
        <br/><br/>
        <label for='passwordInput'> Password: </label>
        <input id='passwordInput' className='CreateAccountInput'
          type='password' placeholder='Please enter your password.'
          onChange={handlePasswordInput}
        />
        <button className='CreateAccountButton' onClick={handleSubmit}>Sign Up!</button>
      </div>
    </div>
  );
}

export default CreateAccount;