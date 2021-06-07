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
            <input className="SearchPost" type="text" onChange={handleTextChange}/>
            <button className="SearchSubmit" type="submit">Search</button>
        </div>
    )
}

export default SearchPosts;