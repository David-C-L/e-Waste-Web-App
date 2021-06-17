import React, { useContext, useEffect } from 'react';
import axios from 'axios'
import Post from './Post'
import { RepairPost } from '../../RepairPost'

function Posts(props) {
    // const {posts, setPosts } = useContext(RepairPost)

    useEffect(() => {
        if (props.reload) {
            // GET request using axios inside useEffect React hook
            axios.get('https://drp21-backend.herokuapp.com/api/v1/posts')
                // .then(response => );
                .then(response => {
                    // setPosts(response)
                    props.updateDisplay(response)
                })
        }
        props.setReload(false)
    }, [props]);

    console.log(props.getReq)
    return (
        <div>
            {props.getReq.data === undefined || props.getReq.data.length === 0
                ? <p>No Posts Found</p>
                : props.getReq.data.map(ele =>
                    <Post
                        id={ele.id}
                        category={ele.category}
                        title={ele.title}
                        text={ele.text}
                        date={ele.dateStr}
                        time={ele.timeStr}
                        authorEmail={ele.authorEmail}
                        comments={ele.comments}
                    />
                )}
        </div>
    )
}

export default Posts;