import './SearchPosts.css'
import React, { useState } from 'react';


function SearchPosts(props) {

    const [search, setSearch] = useState("")

    const handleCreatePost = (event) => {
        props.setCreatePost(true)
    }

    const handleTextChange = (event) => {
        setSearch(event.target.value)
    }
    
    const applySearch = () => {
        props.setSearchTerm(search)
        props.setReload(true)
        props.filterDisplay()
    }
    
    const cancel = () => {
        props.setSearchTerm("")
        setSearch("")
        props.setReload(true)
    }

    return (
        <div className="SearchPosts">
            <div className="CreatePostButton">
                <button className="CreateButton" type="button" onClick={handleCreatePost}>Create new Post!</button>
            </div>
            <div className="SearchPost">
                <textarea className="SearchText" type="text" value={search} onChange={handleTextChange} placeholder="Search" />
            </div>
            <div className="SearchSubmit">
                <button className="Search" type="submit" onClick={applySearch}>Search</button>
                <button className="Cancel" type="button" onClick={cancel}>Cancel</button>
            </div>
        </div>
    )
}

export default SearchPosts;