import './Listing.css';
import defaultListing from '../../images/noImageAvailable.png';

function Listing(props) {

    const url = props.listing.photos.length 
        ? `https://drp21-backend.herokuapp.com/api/v1/downloadPhoto/${props.listing.photos[0].id}`
        : defaultListing;

    return (
        <div className='Listing'>
            <img src={url} className='DefaultListingPicture' alt="img"/>
            <h3 className="Title">{props.listing.title}</h3>
            <p className="Description"> {props.listing.description} </p>
            <div id='bottom'>
            {/* <p className="TimeRemaining"> Available until: {props.listing.timeRemaining} </p> */}
            <p className="TimeRemaining"> Available until: {props.listing.availableUntil} </p>
                <p className="TimeRemaining"> {props.listing.ownerEmail} </p>
                {/* <Link className='MessageOwner' to='/'>Message the owner</Link> */}
            </div>
        </div>
    );
}

export default Listing;