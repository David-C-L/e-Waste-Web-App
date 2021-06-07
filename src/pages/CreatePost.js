import './Home.css';
import './CreatePost.css';
import React, { useState } from 'react';
import MultiSelect from './MultiSelect'
import axios from 'axios'

function CreatePost(props) {
    const [category, setCategory] = useState([])
    const [description, setDescription] = useState("")


    const handleSelectChange = (event) => {
        setCategory(event.map(e => e.label).join(", "))
    }

    const handleTextChange = (event) => {
        setDescription(event.target.value)
    }

    const handleCancel = (event) => {
        props.setCreatePost(false)
    }

    const handleSubmit = (event) => {
        //POST method
        props.setCreatePost(false)

        axios.post('https://drp21-backend.herokuapp.com/api/v1/posts', {
            category: category,
            text: description
        }, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'text/html; charset=UTF-8'
        });

        event.preventDefault();
    }

    const styles = {
        option: provided => ({
            ...provided,
            color: 'black'
        }),
        control: provided => ({
            ...provided,
            color: 'black'
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'black'
        })
    }

    return (
        <div className="CreatePost">
            <div className="CategorySelection">
                <h3 class="CategoryHeading">Select Category</h3>
                <MultiSelect options={props.ops} styles={styles} value={category} onChange={handleSelectChange} />
            </div>
            <textarea class="PostText" type="text" onChange={handleTextChange} value={description} placeholder="Create Post" />
            <div className="PostToFeed">
                <button class="PostButton" type="submit" onClick={handleSubmit}>Post</button>
                <button class="CancelPost" type="button" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    )
}

export default CreatePost;