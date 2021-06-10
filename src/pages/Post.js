
import React, { useState } from 'react';
import './Post.css';
import CreateComment from './CreateComment'
import Comments from './Comments'
import UserDetails from './UserDetails';
import PostDetails from './PostDetails';
import './Post.css';

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
        <div className="FullPost">
            <div key={props.id} className="Post">
                <div className="Left-section-post">
                    <UserDetails email={props.authorEmail} />
                    <PostDetails date={props.date} time={props.time} />
                </div>

                <div className="Center-section-post">
                    <h6 className="TitleOfPost">{props.title}</h6>
                    <p className="Post-body"> {props.text} </p>
                </div>
                <div className="Right-section-post">
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
                        <CreateComment setReload={setReload}
                            setCreateComment={setCreateComment}
                            id={props.id} />
                        <Comments reload={reload}
                            setReload={setReload}
                            updateDisplay={updateDisplay}
                            setGetReq={setGetReq}
                            getReq={displayComments}
                            id={props.id}
                            comments={props.comments} />
                    </div>}
            </div>
        </div>

    )
}

export default Post;