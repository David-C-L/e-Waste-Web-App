import './Home.css';
import logo from '../images/recycle-logo.png';
import React, { useState } from 'react';
import MultiSelect from './MultiSelect'
import axios from 'axios'
import Posts from './Posts'

function Home() {

    const [category, setCategory] = useState([])
    const [description, setDescription] = useState("")
    const [createPost, setCreatePost] = useState(false)

    const ops = [
        { value: 'recycle', label: 'Recycle' },
        { value: 'reuse', label: 'Reuse' },
        { value: 'reduce', label: 'Reduce' }
    ];

    const handleSelectChange = (event) => {
        setCategory(event.map(e => e.label).join(", "))
    }

    const handleTextChange = (event) => {
        setDescription(event.target.value)
    }

    const handleSubmit = (event) => {
        //POST method
        setCreatePost(false)

        axios.post('https://drp21-backend.herokuapp.com/api/v1/posts', {
            category: category,
            text: description
        }, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'text/html; charset=UTF-8'
        });

        event.preventDefault();
    }

    const handleCreatePost = (event) => {
        setCreatePost(true)
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
        <div className="Home">
            <header className="Home-header">
                <div className="Feed" style={{ width: "80%" }}>
                    {
                        createPost
                            ? <div>
                                <MultiSelect options={ops} styles={styles} value={category} onChange={handleSelectChange} />
                                <input type="text" onChange={handleTextChange} value={description} />
                                <button type="submit" onClick={handleSubmit}>Post</button>
                            </div>
                            : <div>
                                <button className="Button" type="button" onClick={handleCreatePost}>Create new Post!</button>
                            </div>}
                    <Posts />
                </div>
            </header>
        </div>
    );
}

export default Home;
