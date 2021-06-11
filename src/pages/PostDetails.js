import './PostDetails.css';

function PostDetails(props) {
    return (
        <p className="Date">{props.time} <br/> {props.date}</p>
    );
}

export default PostDetails;