import './Home.css';
import React, { useState } from 'react';
import Posts from './Posts'
import CreatePost from './CreatePost'
import SearchPosts from './SearchPosts';

function Home(props) {

    const [createPost, setCreatePost] = useState(false)
    const [getReq, setGetReq] = useState({})

    const ops = [
        { value: 'recycle', label: 'Recycle' },
        { value: 'reuse', label: 'Reuse' },
        { value: 'reduce', label: 'Reduce' }
    ];

    return (
        <div className="Home">
            <header className="Home-header">
                <div className="Feed" style={{ width: "90%" }}>
                    {
                        createPost
                            ? <CreatePost setCreatePost={setCreatePost} ops={ops}/>
                            : <SearchPosts setCreatePost={setCreatePost} getReq={getReq}/>
                    }
                    <Posts setGetReq={setGetReq} getReq={getReq}/>
                </div>
            </header>
        </div>
    );
}

export default Home;
