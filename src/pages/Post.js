import './Post.css';
import UserDetails from './UserDetails';

function Post(props) {

    return (
        <div key={props.id} className="Post">
            <div className="Left-section">
                <UserDetails/>
            </div>
            <div className="Right-section">
                <div className="Category">
                    <p className="Category-text">{props.category}</p>
                </div>
                <h6 className="Title">{props.text}</h6>
                <p className="Post-body"> This is example text. </p>
            </div>

        </div>
    )
}

export default Post;