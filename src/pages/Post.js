import './Post.css';
import UserDetails from './UserDetails';
import PostDetails from './PostDetails';

function Post(props) {

    return (
        <div key={props.id} className="Post">
            <div className="Left-section">
                <UserDetails email={props.authorEmail} />
                <PostDetails date={props.date} time={props.time} />
            </div>
            <div className="Right-section">
                <div className="Category">
                    <p className="Category-text">{props.category}</p>
                </div>
                <h6 className="Title">{props.title}</h6>
                <p className="Post-body"> {props.text} </p>
            </div>

        </div>
    )
}

export default Post;