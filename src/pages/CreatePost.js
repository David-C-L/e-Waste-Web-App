import './CreatePost.css';
import React, { useState } from 'react';
import MultiSelect from './MultiSelect'
import axios from 'axios'

function CreatePost(props) {
    const [category, setCategory] = useState([])
    const [description, setDescription] = useState("")
    const [title, setTitle] = useState("")
    

    const handleSelectChange = (event) => {
        setCategory(event.map(e => e.label))
        console.log(category)
    }

    const handleTextChange = (event) => {
        setDescription(event.target.value)
        
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
        
    }

    const handleCancel = (event) => {
        props.setCreatePost(false)
    }

    const handleSubmit = (event) => {
        //POST method
        props.setCreatePost(false)

        axios.post('https://drp21-backend.herokuapp.com/api/v1/posts', {
            category: category.join(", "),
            title: title,
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
                <h3 className="CategoryHeading">Select Category</h3>
                <MultiSelect options={props.ops} styles={styles} value={category} onChange={handleSelectChange} />
            </div>
            <div className="PostBody">
                <textarea className="PostTitle" type="text" onChange={handleTitleChange} value={title} placeholder="Title"/>
                <textarea className="PostText" type="text" onChange={handleTextChange} value={description} placeholder="Create Post" />
            </div>
            <div className="SubmitButton">
                <button className="PostButton" type="submit" onClick={handleSubmit}>Post</button>
                <button className="CancelPost" type="button" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    )
}

export default CreatePost;