import React, { useState } from 'react';
import './Post.css';
import Comments from './Comments'
import UserDetails from './UserDetails';
import PostDetails from './PostDetails';

function Post(props) {

    const [isCollapsed, setIsCollapsed] = useState(true);
    const [reload, setReload] = useState(true)
    const [createComment, setCreateComment] = useState(false)
    const [getReq, setGetReq] = useState({})
    const [displayComments, setDisplayComments] = useState([])

    function updateDisplay(event) {
        setGetReq(event)
        setDisplayComments(event)
    }

    return (
        <div>
            <div key={props.id} className="Post">
                <div className="Left-section">
                    <UserDetails email={props.authorEmail} />
                    <PostDetails date={props.date} time={props.time} />
                </div>
                <div className="Center-section">
                    <h6 className="Title">{props.title}</h6>
                    <p className="Post-body"> {props.text} </p>
                </div>
                <div className="Right-section">
                    <div className="Category">
                        <p className="Category-text">{props.category}</p>
                    </div>
                    <button className="Comment-button"
                            onClick={() => setIsCollapsed(!isCollapsed)}>
                            {isCollapsed ? 'Show' : 'Hide'} Comments
                    </button>

                </div>

            </div>

            <div className="Comment-section">
                {isCollapsed ?
                    <div /> :
                    <div>
                        {/* <CreateComment setReload={setReload}
                            setCreateComment={setCreateComment} /> */}
                        <Comments reload={reload}
                            setReload={setReload}
                            updateDisplay={updateDisplay}
                            setGetReq={setGetReq}
                            getReq={displayComments} />
                    </div>}
            </div>
        </div>

    )
}

export default Post;