import axios from 'axios';
import { useState } from 'react';
import './CreateAccount.css';

function CreateAccount () {
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [charity, setCharity] = useState(false);

  const handleEmailInput = event => {
    setEmail(event.target.value);
  }

  const handleFirstnameInput = event => {
    setFirstname(event.target.value);
  }

  const handleSurnameInput = event => {
    setSurname(event.target.value);
  }

  const handleCharity = event => {
    setCharity(!charity);
    setFirstname('');
    setSurname('');
  }

  const handleSubmit = () => {
    if (email && firstname && (surname || charity)) {
      axios.post('https://drp21-backend.herokuapp.com/api/v1/users/', {
        'email': email,
        'firstname': firstname,
        'surname': surname,
        'charity': charity
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
        
        <label className='CharityText' for='charityBox'>
          Do you represent a charity?
        </label>
        <input id='charityBox' type='checkbox' value={charity} onChange={handleCharity}/> 
        <br/><br/>
        <label for='emailInput'> Email Address: </label>
        <input id='emailInput' className='CreateAccountInput' 
          type='text' placeholder='Please enter your email address.'
          onChange={handleEmailInput}
        />
        <br/> <br/>
        { charity 
          ? <>
            <label for='charityInput'> Charity name: </label>
            <input  id='charityInput' className='CreateAccountInput' 
              type='text' placeholder="Please enter your charity's name." 
              onChange={handleFirstnameInput}
            />
            </>
          : <>
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
            /></>
        }
        <button className='CreateAccountButton' onClick={handleSubmit}>Sign Up!</button>
      </div>
    </div>
  );
}

export default CreateAccount;