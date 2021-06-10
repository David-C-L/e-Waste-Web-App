import React, { useState } from 'react';
import './Post.css';
import Comments from './Comments'
import UserDetails from './UserDetails';
import PostDetails from './PostDetails';

function Post(props) {

    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <div>
            <div key={props.id} className="Post">
                <div className="Left-section">
                    <UserDetails email={props.authorEmail} />
                    <PostDetails date={props.date} time={props.time} />
                </div>
                <div className="Right-section">
                    <div className="Category">
                        <p className="Category-text">{props.category}</p>
                    </div>
                    <button className="Comment-button"
                        onClick={() => setIsCollapsed(!isCollapsed)}>
                        {isCollapsed ? 'Show' : 'Hide'} Comments
                    </button>
                    <h6 className="Title">{props.title}</h6>
                    <p className="Post-body"> {props.text} </p>
                </div>

            </div>

            <div className="Comment-section">
                {isCollapsed ? <div/> : <Comments/>}
            </div>
        </div>

    )
}

export default Post;