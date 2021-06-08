import React, { useEffect } from 'react';
import axios from 'axios'
import Post from './Post'

function Posts(props) {


    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('https://drp21-backend.herokuapp.com/api/v1/posts')
            .then(response => props.setGetReq(response));
    }, [props]);

    return (
        <div>
            {props.getReq.data === undefined
                ? <p>No Post... Yet</p>
                : props.getReq.data.map(ele => 
                    <Post
                        id={ele.id} 
                        category={ele.category} 
                        title={ele.title}
                        text={ele.text}
                        date={ele.date}
                        time={ele.time}
                        authorEmail={ele.authorEmail}
            
                    />
                )}
        </div>
    )
}

export default Posts;