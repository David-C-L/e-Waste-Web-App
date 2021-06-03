import './Home.css';
import logo from '../images/recycle-logo.png';
import React, { useState } from 'react';
import Select from 'react-select';
import MultiSelect from './MultiSelect'


function Home() {

    const [category, setCategory] = useState([])
    const [description, setDescription] = useState("")

    const ops = [
        { value: 'recycle', label: 'Recycle' },
        { value: 'reuse', label: 'Reuse' },
        { value: 'reduce', label: 'Reduce' }
    ];

    const handleSelectChange = (event) => {
        setCategory(event)
    }

    const handleTextChange = (event) => {
        setDescription(event.target.value)
    }

    const handleSubmit = (event) => {
        alert('Post Submitted');
        console.log(category)
        console.log(description)
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
        <div className="Home">
            <header className="Home-header">
                <img src={logo} className="Home-logo" alt="logo" />
                <p>
                    An app to do with sustainability.
                    </p>
                <div>
                    <MultiSelect options={ops} styles={styles} value={category} onChange={handleSelectChange} />
                    <form onSubmit={handleSubmit}>
                        <input type="text" onChange={handleTextChange} value={description} />
                        <input type="submit" value="Post" />
                    </form>
                </div>

            </header>
        </div>
    );
}

export default Home;
