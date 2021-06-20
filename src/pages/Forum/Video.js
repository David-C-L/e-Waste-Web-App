
function Video(props) {

    const id = props.url.split("v=")[1];

    return (
        <div>
            <iframe className="Video"
                src={"https://www.youtube.com/embed/" + id}
                frameborder='0'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title='video' />
        </div>
    )
}

export default Video