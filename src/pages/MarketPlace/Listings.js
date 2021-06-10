import { useEffect } from 'react';
import ListingRow from './ListingRow';
import axios from 'axios';

function splitArray(array, groupSize) {
    const numGroups = Math.ceil(array.length / groupSize);
    return new Array(numGroups)
        .fill('')
        .map((_, i) => array.slice(i * groupSize, (i + 1) * groupSize));
}

function filter(listings, search) {
    if (search !== "") {
        return listings.filter(e => e.title.toLowerCase().includes(search.toLowerCase())
            || e.description.toLowerCase().includes(search.toLowerCase()))
    }
    return listings
}

function Listings(props) {

    //TODO: GET request to fetch listings and display
    useEffect(() => {
        if (props.refresh) {
            // GET request using axios inside useEffect React hook
            axios.get('https://drp21-backend.herokuapp.com/api/v1/listings')
                .then(response => props.setListings(response.data));
        }
        props.setRefresh(false)
    }, [props]);

    return (
        <div className="Listings">
            { props.listings === null || props.listings === undefined
                ? <p> No Listings </p>
                : splitArray(filter(props.listings, props.search), 3).map(listingGroup =>
                    <ListingRow listings={listingGroup} />)
            }
        </div>
    );
}

export default Listings;
