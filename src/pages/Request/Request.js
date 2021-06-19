import './Request.css';

function Request(props) {

    let borderColor = null
    if (props.listing.ownerCharity) {
        borderColor = "#42f548"
    } else {
        borderColor = "#0af"
    }

    var style = {
        borderColor: borderColor
    }

    // TODO: Change to match requests 
    return (
        <div className='Request' style={style}>
            <h3 className="Title">{props.listing.title}</h3>
            <p className="Description"> {props.listing.description} </p>
            <div id='bottom'>
                {props.listing.ownerCharity
                    ? <p className="CharityRequest" style={{color: "red"}}>CHARITY REQUEST</p>
                    : <div />
                }
                {/* <p className="TimeRemaining"> Available until: {props.listing.timeRemaining} </p> */}
                <p className="TimeRemaining"> {props.listing.ownerCharity ? 'Available indefinitely' : 'Available until: ' + props.listing.availableUntil} </p>
                <p className="TimeRemaining"> {(props.listing.ownerCharity ? 'Contact charity: ' : '') + props.listing.ownerEmail} </p>
                {/* <Link className='MessageOwner' to='/'>Message the owner</Link> */}
            </div>
        </div>
    );
}

export default Request;