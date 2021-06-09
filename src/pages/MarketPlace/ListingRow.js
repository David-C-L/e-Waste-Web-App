import Listing from './Listing';
import './ListingRow.css';

function ListingRow() {
    return (
        <div className='Row'>
            <Listing />
            <Listing />
            <Listing />
        </div>
    );
}

export default ListingRow;