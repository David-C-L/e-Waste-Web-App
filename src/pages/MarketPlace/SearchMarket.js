import React, { useState } from 'react';


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
            <div className="SearchButton">
                <button className="Search" type="submit" onClick={applySearch}>Search</button>
                <button className="Cancel" type="button" onClick={cancel}>Cancel</button>
            </div>
        </div>
    )
}


export default SearchMarket;