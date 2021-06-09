import './Listing.css';
import defaultListing from '../../images/laptop.jpg';
import { Link } from 'react-router-dom'


function Listing(props) {
    console.log("listing: " + props.listing)
    return (
        <div className='Listing'>
            <img src={defaultListing} className='DefaultListingPicture' />
            <h3 className="Title">{props.listing.title}</h3>
            <p className="Description"> {props.listing.description} </p>
            <div id='bottom'>
                <p className="TimeRemaining"> {props.listing.timeRemaining} </p>
                <Link className='MessageOwner' to='/'>Message the owner</Link>
            </div>
        </div>
    );
}

export default Listing;