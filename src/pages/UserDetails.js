import axios from 'axios';
import { useState } from 'react';
import defaultProfile from '../images/default-profile-picture.jpg';
import './UserDetails.css';

function UserDetails(props) {

  const [name, setName] = useState('no name');

  if (props.email !== null) {
    axios.get(`https://drp21-backend.herokuapp.com/api/v1/users/${props.email}`)
      .then(response => {
        console.log(response.data.firstname);
        setName(`${response.data.firstname} ${response.data.surname}`);
      });
  }
  
    return (
        <>
            <img src={defaultProfile} className='ProfilePicture'/>
            <p className="Username"> {name} </p>
        </>
    );
}

export default UserDetails;