import defaultProfile from '../../images/laptop.jpg';
import './ListingDetails.css';
import {Link} from 'react-router-dom'

function ListingDetails() {
    return ( 
        <>
            <img src={defaultProfile} className='DefaultListingPicture'/>
            <p className="Description"> A Lovely Laptop </p>
            <p className="TimeRemaining"> Time Remaining: 1 Day, 1 Hour, 2 Mins, 7 Secs </p>
            <Link className='MessageOwner' to='/'>MessageOwner</Link>
        </>
    )
}

export default ListingDetails;