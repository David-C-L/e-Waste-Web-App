import defaultListing from '../../images/laptop.jpg';
import './ListingDetails.css';
import {Link} from 'react-router-dom'

function ListingDetails() {
    return ( 
        <>
            <img src={defaultListing} className='DefaultListingPicture'/>
            <h3 className="Title">A Lovely Laptop</h3>
            <p className="Description"> 15" HP, only three years old. </p>
            <p className="TimeRemaining"> 01:01:01:01 </p>
            <Link className='MessageOwner' to='/'> Message the owner</Link>
        </>
    )
}

export default ListingDetails;