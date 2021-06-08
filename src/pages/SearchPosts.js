import './SearchPosts.css'
import React from 'react';


function SearchPosts(props) {

    const handleCreatePost = (event) => {
        props.setCreatePost(true)
    }

    const handleTextChange = (event) => {
        props.setSearchTerm(event.target.value)
    }

    const search = () => {
        props.setReload(true)
        props.filterDisplay()
    }
    
    const cancel = () => {
        props.setReload(true)
        props.setSearchTerm("")
    }

    return (
        <div className="SearchPosts">
            <div className="CreatePostButton">
                <button className="CreateButton" type="button" onClick={handleCreatePost}>Create new Post!</button>
            </div>
            <div className="SearchPost">
                <textarea className="SearchText" type="text" value={props.searchTerm} onChange={handleTextChange} placeholder="Search" />
            </div>
            <div className="SearchSubmit">
                <button className="Search" type="submit" onClick={search}>Search</button>
                <button className="Cancel" type="button" onClick={cancel}>Cancel</button>
            </div>
        </div>
    )
}

export default SearchPosts;