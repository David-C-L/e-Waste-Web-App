import './Post.css';

function Post(props) {

    return (
        <div key={props.id} className="Post">
            <div className="Category">
                <p className="Category-text">{props.category}</p>
            </div>
            <p>{props.text}</p>
        </div>
    )
}

export default Post;