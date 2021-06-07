import defaultProfile from '../images/default-profile-picture.jpg';
import './UserDetails.css';

function UserDetails() {
    return (
        <>
            <img src={defaultProfile} className='ProfilePicture'/>
            <p className="Username"> Joe Bloggs </p>
        </>
    );
}

export default UserDetails;