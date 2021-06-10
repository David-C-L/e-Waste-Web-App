import React, { useEffect } from 'react';
import axios from 'axios'
import Comment from './Comment'

function Comments(props) {


    useEffect(() => {
        if (props.reload) {
            // GET request using axios inside useEffect React hook
            axios.get('https://drp21-backend.herokuapp.com/api/v1/posts')
                .then(response => props.updateDisplay(response));
        } 
        props.setReload(false)
    }, [props]);

    return (
        <div>
            {props.getReq.data === undefined || props.getReq.data.length === 0
                ? <p>No Comments Found /n Be the first to comment!</p>
                : props.getReq.data.map(ele =>
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