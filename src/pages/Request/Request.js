import './Request.css';

function Request(props) {

    let borderColor = null
    if (props.listing.ownerCharity) {
        borderColor = "#42f548"
    } else {
        borderColor = "#0af"
    }

    var style = {
        borderColor : borderColor
    }

    // TODO: Change to match requests 
    return (
        <div className='Request' style={style}>
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

export default Request;