import React, { useEffect } from 'react';
import axios from 'axios'
import Comment from './Comment'

function Comments(props) {


    useEffect(() => {
        if (props.reload) {
            // GET request using axios inside useEffect React hook
            axios.get(`https://drp21-backend.herokuapp.com/api/v1/posts/${props.id}`)
                .then(response => props.updateDisplay(response));
        } 
        props.setReload(false)
    }, [props]);

    return (
        <div>
            {props.getReq.comments === undefined || props.getReq.comments.length === 0
                ? <div className="No-comments">
                    <p>No Comments Found <br/> Be the first to comment!</p>
                  </div>
                : props.getReq.comments.map(ele =>
                    <Comment
                        id={ele.id}
                        text={ele.text}
                        date={ele.dateStr}
                        time={ele.timeStr}
                        authorEmail={ele.authorEmail}

                    />
                )}
        </div>
    )
}

export default Comments;