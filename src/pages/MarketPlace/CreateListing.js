import './CreateListing.css'

import { useState } from 'react'


function CreateListing(props) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleTitleChange = (event) => {
        setTitle(event)
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    const submit = () => {

    }

    const cancel = () => {
        props.setSearchBar(true)
    }


    return (
        <div className="Create">
            <div className="ListingText">
                <textarea className="ListingTitle" type="text" onChange={handleTitleChange} value={title} placeholder="title" />
                <textarea className="ListingDescription" type="text" onChange={handleDescriptionChange} value={description} placeholder="description" />
            </div>

            <div className="Buttons">
                <button className="SubmitList" type="submit" onClick={submit}>Submit</button>
                <button className="CancelList" type="submit" onClick={cancel}>Cancel</button>
            </div>
        </div>
    )
}

export default CreateListing