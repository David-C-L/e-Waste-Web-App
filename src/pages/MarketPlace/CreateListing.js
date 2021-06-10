import './CreateListing.css'

import { useState } from 'react'
import axios from 'axios'


function CreateListing(props) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [dateTime, setDateTime] = useState("")

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    const handleDateTimeChange = (event) => {
        setDateTime(event.target.value + ":00")
    }

    const submit = (event) => {
        props.setRefresh(true)
        props.setSearchBar(true)

        axios.post('https://drp21-backend.herokuapp.com/api/v1/listings', {
            title: title,
            description: description,
            availableUntil: dateTime,
            owner: "joe@bloggs.com"
        }, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'text/html; charset=UTF-8'
        });

        event.preventDefault();
    }

    const cancel = () => {
        props.setSearchBar(true)
    }


    return (
        <div className="Create">
            <div className="ListingFields">
                <div className="ListingTop">
                    <textarea className="ListingTitle" type="text" onChange={handleTitleChange} value={title} placeholder="title" />
                    <input className="DateTime" type="datetime-local" onChange={handleDateTimeChange} />
                </div>
                <div className="ListingBottom">
                    <textarea className="ListingDescription" type="text" onChange={handleDescriptionChange} value={description} placeholder="description" />
                </div>
            </div>
            <div className="Buttons">
                <button className="SubmitList" type="submit" onClick={submit}>Submit</button>
                <button className="CancelList" type="submit" onClick={cancel}>Cancel</button>
            </div>
        </div>
    )
}

export default CreateListing