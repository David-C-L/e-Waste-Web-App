import Listing from './Listing';
import './ListingRow.css';

function ListingRow(props) {
    return (
        <div className='Row'>
            <>
            { 
            props.listings.length > 0
                ? <Listing listing={props.listings[0]}/>
                : <></> 
            }
            {
            props.listings.length > 1
                ? <Listing listing={props.listings[1]}/>
                : <></> 
            }
            {
            props.listings.length > 2
                ? <Listing listing={props.listings[2]}/>
                : <></> 
            }
            </>
        </div>
    );
}

export default ListingRow;