import './CreateComment.css';
import React, { useState } from 'react';
import axios from 'axios'

function CreateComment(props) {
    const [description, setDescription] = useState("")

    const handleTextChange = (event) => {
        setDescription(event.target.value)

    }

    const handleCancel = () => {
        setDescription("")
        props.setCreateComment(false)
    }

    const handleSubmit = (event) => {
        //POST method
        props.setCreateComment(false)

        axios.post(`https://drp21-backend.herokuapp.com/api/v1/comments`, {
            post: props.id,
            author: "joe@bloggs.com",
            body: description
        }, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'text/html; charset=UTF-8'
        });

        props.setReload(true)
        event.preventDefault();
    }

    return (
        <div className="CreateComment">
            <div className="CommentBody">
                <textarea className="CommentText"
                    type="text"
                    onChange={handleTextChange}
                    value={description}
                    placeholder="Create Comment" />
            </div>
            <div className="SubmitButton">
                <button className="CommentButton"
                    type="submit"
                    onClick={handleSubmit}>
                    Comment
                </button>
                <button className="CancelComment"
                    type="button"
                    onClick={handleCancel}>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default CreateComment;