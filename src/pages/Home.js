import './Home.css';
import React, { useState } from 'react';
import Posts from './Posts'
import CreatePost from './CreatePost'
import SearchPosts from './SearchPosts';
import Filter from './Filter'

function Home() {

    const [reload, setReload] = useState(true)
    const [createPost, setCreatePost] = useState(false)
    const [getReq, setGetReq] = useState({})
    const [displayPosts, setDisplayPosts] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [categoryFilter, setCategoryFilter] = useState([])
    const [filtered, setFiltered] = useState(false)


    function filterDisplay() {
        if (searchTerm !== "" && displayPosts.data !== undefined) {
            let tmp = []
            setFiltered(true)
            for (let data of displayPosts.data) {
                if ((data.text !== null && data.text.toLowerCase().includes(searchTerm.toLowerCase()))
                    || (data.title !== null && data.title.toLowerCase().includes(searchTerm.toLowerCase()))) {
                    tmp.push(data)
                }
            }
            setDisplayPosts({ data: tmp })
        }
        if (displayPosts.data !== undefined && categoryFilter.length !== 0) {
            setFiltered(true)
            let tmp = []
            for (let data of displayPosts.data) {
                let add = true
                for (let filter of categoryFilter) {
                    if (!data.category.toLowerCase().includes(filter.toLowerCase())) {
                        add = false
                    }
                }
                if (add) {
                    tmp.push(data)
                }
            }
            setDisplayPosts({ data: tmp })

        }
    }


    function updateDisplay(event) {
        setGetReq(event)
        setDisplayPosts(event)
        setFiltered(false)
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
                    {createPost
                        ? <CreatePost setReload={setReload} setCreatePost={setCreatePost} ops={ops} />
                        : <SearchPosts setReload={setReload} filterDisplay={filterDisplay} setSearchTerm={setSearchTerm} setCreatePost={setCreatePost} getReq={getReq} searchTerm={searchTerm} />
                    }
                    <Filter ops={ops} setCategoryFilter={setCategoryFilter} setReload={setReload} filterDisplay={filterDisplay} categoryFilter={categoryFilter} />
                    {searchTerm !== "" && filtered ? <p>Showing search results for term: {searchTerm}</p> : <div></div>}
                    <Posts reload={reload} setReload={setReload} updateDisplay={updateDisplay} setGetReq={setGetReq} getReq={displayPosts} />
                </div>
            </header>
        </div>
    );
}

export default Home;
