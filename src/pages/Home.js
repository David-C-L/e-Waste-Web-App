import './Home.css';
import logo from '../images/recycle-logo.png';
import React, { useEffect, useState } from 'react';
import MultiSelect from './MultiSelect'
import axios from 'axios'


function Home() {

    const [category, setCategory] = useState([])
    const [description, setDescription] = useState("")


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
        alert('A form was submitted');

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
        <div className="Home">
            <header className="Home-header">
                <img src={logo} className="Home-logo" alt="logo" />
                <p>
                    An app to do with sustainability.
                    </p>
                <div>
                    <MultiSelect options={ops} styles={styles} value={category} onChange={handleSelectChange} />
                    <input type="text" onChange={handleTextChange} value={description} />
                    <button type="submit" onClick={handleSubmit}>Post</button>
                </div>
                <Posts />
            </header>
        </div>
    );
}
function Posts() {
    const [getReq, setGetReq] = useState({})

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('https://drp21-backend.herokuapp.com/api/v1/posts')
            .then(response => setGetReq(response));
        console.log(getReq)
    }, []);

    const noteRootStyle = {
        border: "2px #0af solid",
        borderRadius: 9,
        margin: 20,
        backgroundColor: "#efefef",
        padding: 6,
        color: "black"
    };

    return (
        <div style={{ width: 400 }}>
            {getReq.data === undefined ? <div></div> : getReq.data.map(ele =>
                <div key={ele.id} style={noteRootStyle}>
                    <h3>{ele.category}</h3>
                    <p>{ele.text}</p>
                </div>
            )}
        </div>
    )
}

export default Home;
