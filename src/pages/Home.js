import './Home.css';
import React, { useState } from 'react';
import Posts from './Posts'
import CreatePost from './CreatePost'
import SearchPosts from './SearchPosts';
import Filter from './Filter'

function Home(props) {

    const [reload, setReload] = useState(true)
    const [createPost, setCreatePost] = useState(false)
    const [getReq, setGetReq] = useState({})
    const [displayPosts, setDisplayPosts] = useState([])
    const [searchTerm, setSearchTerm] = useState("");


    function filterDisplay() {
        if (searchTerm !== "" && displayPosts.data !== undefined) {
            var tmp = []
            for (let i = 0; i < displayPosts.data.length; i++) {
                if (displayPosts.data[i].text !== undefined && displayPosts.data[i].text !== null) {
                    if (displayPosts.data[i].text.includes(searchTerm)) {
                        tmp.push(displayPosts.data[i])
                    }
                } else if (displayPosts.data[i].title !== undefined && displayPosts.data[i].title !== null) {
                    if (displayPosts.data[i].title.includes(searchTerm)) {
                        tmp.push(displayPosts.data[i])
                    }
                }
            }
            setDisplayPosts({data: tmp})
        }
    }

    function updateDisplay(event) {
        setGetReq(event)
        setDisplayPosts(event)
        filterDisplay()
    }

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
                            ? <CreatePost setReload={setReload} setCreatePost={setCreatePost} ops={ops} />
                            : <SearchPosts setReload={setReload} filterDisplay={filterDisplay} setSearchTerm={setSearchTerm} setCreatePost={setCreatePost} getReq={getReq} searchTerm={searchTerm}/>
                    }
                    <Filter ops={ops} />
                    {/* <Posts updateDisplay={updateDisplay} setGetReq={setGetReq} getReq={getReq}/> */}
                    <Posts reload={reload} setReload={setReload} updateDisplay={updateDisplay} setGetReq={setGetReq} getReq={displayPosts} />
                </div>
            </header>
        </div>
    );
}

export default Home;
