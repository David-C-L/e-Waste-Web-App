import './PostDetails.css';

function PostDetails(props) {
    return (
        <p className="Date">{props.time} {props.date}</p>
    );
}

export default PostDetails;