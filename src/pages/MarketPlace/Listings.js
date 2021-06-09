import { useState, useEffect } from 'react';
import ListingRow from './ListingRow';
import axios from 'axios';

function splitArray(array, groupSize) {
    const numGroups = Math.ceil(array.length / groupSize);
    return new Array(numGroups)
        .fill('')
        .map((_, i) => array.slice(i * groupSize, (i + 1) * groupSize));
}

function Listings() {

    const [listings, setListings] = useState([]);

    //TODO: GET request to fetch listings and display
    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('https://drp21-backend.herokuapp.com/api/v1/listings')
            .then(response => setListings(response.data));
    }, [listings]);

    console.log(splitArray(listings, 3));

    return (
        <div className="Listings">
        { listings === null || listings === undefined
            ? <p> No Listings </p>
            : splitArray(listings, 3).map(listingGroup => 
                <ListingRow listings={listingGroup}/>)
        }
        </div>
    );
}

export default Listings;