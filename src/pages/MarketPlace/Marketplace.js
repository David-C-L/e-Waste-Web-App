import './Marketplace.css';
import { useState } from 'react'
import Listings from './Listings';
import SearchMarket from './SearchMarket'


function Marketplace() {

    const [listings, setListings] = useState([]);
    const [search, setSearch] = useState("");
    const [refresh, setRefresh] = useState(true)


    return (
        <div className='Market'>
            <header className="Market-header">
                <div className="Conatiner" style={{width: "90%"}}>
                    <SearchMarket search={search} setSearch={setSearch} setRefresh={setRefresh} />
                    <Listings listings={listings} setListings={setListings} setRefresh={setRefresh} refresh={refresh} search={search} />
                </div>
            </header>
        </div>
    );
}

export default Marketplace;