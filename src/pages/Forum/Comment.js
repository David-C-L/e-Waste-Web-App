import './Comment.css'
import UserDetails from './UserDetails';
import PostDetails from './PostDetails';
import Video from './Video';

function Comment(props) {

    return (
        <div key={props.id} className="Comment">
            <div className="Left-section">
                <UserDetails email={props.authorEmail} />
                <PostDetails dateTime={props.dateTime} />
            </div>
            <div className="Right-section">
                <p className="Comment-body"> {props.body} </p>
                <div className="VideoSection">
                    <Video url="https://www.youtube.com/watch?v=A0y6XfnyPT4" />
                </div>
            </div>

        </div>
    )
}

export default Comment