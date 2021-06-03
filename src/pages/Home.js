import './Home.css';
import logo from '../images/recycle-logo.png';
import React, { useState } from 'react';
import MultiSelect from './MultiSelect'
import axios from 'axios'


function Home() {

    const [category, setCategory] = useState([])
    const [description, setDescription] = useState("")
    const [getReq, setGetReq] = useState({})

    // useEffect(() => {
    //     // GET request using fetch inside useEffect React hook
    //     fetch('https://drp21-backend.herokuapp.com/api/v1/posts')
    //         .then(response => response.json())
    //         .then(data => setGetReq(data));

    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);

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

            </header>
        </div>
    );
}

export default Home;

// axois.post('https://drp21-backend.herokuapp.com/api/v1/posts', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     // We convert the React state to JSON and send it as the POST body
//     body: JSON.stringify({
//         category: category,
//         text: description
//     })
// }).then(function (response) {
//     console.log(response)
//     return response.json();
// });