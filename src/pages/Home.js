import './Home.css';
import React, { useState } from 'react';
import Posts from './Posts'
import CreatePost from './CreatePost'
import SearchPosts from './SearchPosts';

function Home() {

    const [createPost, setCreatePost] = useState(false)

    return (
        <div className="Home">
            <header className="Home-header">
                <div className="Feed" style={{ width: "80%" }}>
                    {
                        createPost
                            ? <CreatePost setCreatePost={setCreatePost} />
                            : <SearchPosts setCreatePost={setCreatePost} />
                    }
                    <Posts />
                </div>
            </header>
        </div>
    );
}

export default Home;
