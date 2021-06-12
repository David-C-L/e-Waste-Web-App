import './CreateComment.css';
import React, { useContext, useState } from 'react';
import axios from 'axios'
import { UserContext } from '../UserContext';

function CreateComment(props) {
    const { user } = useContext(UserContext);

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
        setDescription("")
        props.setCreateComment(false)

        axios.post(`https://drp21-backend.herokuapp.com/api/v1/comments`, {
            post: props.id,
            author: user.email,
            body: description
        }, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'text/html; charset=UTF-8'
        });

        event.preventDefault();
        props.setReload(true);
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
            <div className="SubmitButtons">
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