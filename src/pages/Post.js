
function Post(props) {

    const noteRootStyle = {
        border: "2px #0af solid",
        borderRadius: "1ex",
        marginBottom: "1ex",
        backgroundColor: "#efefef",
        padding: 2,
        color: "black"
    };

    return (
        <div key={props.id} style={noteRootStyle}>
            <h3>{props.category}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default Post;