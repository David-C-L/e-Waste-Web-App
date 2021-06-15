import { useEffect, useState } from "react"
import axios from "axios"
import RequestRow from "./RequestRow";

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

function Requests(props) {

    const [listings, setListings] = useState([])

    useEffect(() => {
        if (props.refresh) {
            // TODO: GET request using axios to correct link
            axios.get('https://drp21-backend.herokuapp.com/api/v1/listings')
                .then(response => setListings(response.data));
        }
        console.log(listings)
        props.setRefresh(false)
    }, [props]);



    return (
        <div>
            {listings === null || listings === undefined || listings === []
                ? <p> No Listings </p>
                : splitArray(filter(listings, props.search), 3).map(listingGroup =>
                    <RequestRow listings={listingGroup} />)
            }
        </div>
    )
}

export default Requests