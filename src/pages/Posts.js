import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Post from './Post'

function Posts(props) {
    const [getReq, setGetReq] = useState({})

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('https://drp21-backend.herokuapp.com/api/v1/posts')
            .then(response => setGetReq(response));
    }, [getReq]);

    return (
        <div>
            {getReq.data === undefined
                ? <p>No Post... Yet</p>
                : getReq.data.map(ele => <Post id={ele.id} category={ele.category} text={ele.text} />
                )}
        </div>
    )
}

export default Posts;