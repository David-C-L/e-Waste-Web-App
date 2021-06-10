import React, { useState } from 'react';
import './SearchMarket.css'

function SearchMarket(props) {


    const [search, setSearch] = useState("")

    const handleTextChange = (event) => {
        setSearch(event.target.value)
    }

    const applySearch = () => {
        props.setSearch(search)
        props.setRefresh(true)
    }

    const cancel = () => {
        props.setSearch("")
        setSearch("")
        props.setRefresh(true)
    }

    


    return (
        <div className="SearchBar">
            <div className="SearchMarket">
                <textarea className="SearchText" type="text" value={search} onChange={handleTextChange} placeholder="Search"/>
            </div>
            <div className="SearchButtons">
                <button className="Search" type="submit" onClick={applySearch}>Search</button>
                <button className="Cancel" type="button" onClick={cancel}>Cancel</button>
            </div>
        </div>
    )
}


export default SearchMarket;