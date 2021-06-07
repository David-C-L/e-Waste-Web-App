import defaultProfile from '../images/default-profile-picture.jpg';
import './UserDetails.css';

function UserDetails() {
    return (
        <img src={defaultProfile} className='ProfilePicture'/>
    );
}

export default UserDetails;