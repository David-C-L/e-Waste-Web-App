import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Posts() {
    const [getReq, setGetReq] = useState({})

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('https://drp21-backend.herokuapp.com/api/v1/posts')
            .then(response => setGetReq(response));
        console.log(getReq)
    }, [getReq]);

    const noteRootStyle = {
        border: "2px #0af solid",
        borderRadius: 10,
        margin: 10,
        backgroundColor: "#efefef",
        padding: 2,
        color: "black",
    };

    return (
        <div style={{ width: 400 }}>
            {getReq.data === undefined ? <div></div> : getReq.data.map(ele =>
                <div key={ele.id} style={noteRootStyle}>
                    <h3>{ele.category}</h3>
                    <p>{ele.text}</p>
                </div>
            )}
        </div>
    )
}

export default Posts;