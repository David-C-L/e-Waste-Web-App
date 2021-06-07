import './Home.css'
import React, { useState } from 'react';


function SearchPosts(props) {

    const [searchTerm, setSearchTerm] = useState("");

    const handleCreatePost = (event) => {
        props.setCreatePost(true)
    }


    const handleTextChange = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <div className="SearchPosts">
            <button className="CreatePostButton" type="button" onClick={handleCreatePost}>Create new Post!</button>
            <textarea className="SearchPost" type="text" onChange={handleTextChange} placeholder="Search"/>
            <button className="SearchSubmit" type="submit">Search</button>
        </div>
    )
}

export default SearchPosts;