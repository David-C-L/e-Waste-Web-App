import './Comment.css'
import './Post.css'
import UserDetails from './UserDetails';
import PostDetails from './PostDetails';

function Comment(props) {

    return (
        <div key={props.id} className="Comment">
            <div className="Left-section">
                <UserDetails email={props.authorEmail} />
                <PostDetails date={props.date} time={props.time} />
            </div>
            <div className="Right-section">
                <p className="Post-body"> {props.text} </p>
            </div>

        </div>
    )
}

export default Comment