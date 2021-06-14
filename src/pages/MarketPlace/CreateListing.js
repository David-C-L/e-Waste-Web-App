import './CreateListing.css'
import { useState, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../../UserContext';

function CreateListing(props) {

    const { user } = useContext(UserContext);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [listingId, setListingId] = useState(null);
    const [imagesToUpload, setImagesToUpload] = useState([]);

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    const handleDateTimeChange = (event) => {
        setDateTime(event.target.value + ":00")
    }

    const handleFileSelected = event => {
      console.log('event.target.files: ' + event.target.files)
      console.log('event.target.files[0]: ' + event.target.files[0])
      setImagesToUpload(event.target.files);
      console.log('imagesToUpload: ' + imagesToUpload);
    }

    const handleCancel = (event) => {
        props.setSearchBar(true)
    }

    const submit = (event) => {
        props.setSearchBar(true)

        var id = null;

        axios.post('https://drp21-backend.herokuapp.com/api/v1/listings', {
            title: title,
            description: description,
            availableUntil: dateTime,
            owner: user.email
        }, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'text/html; charset=UTF-8'
        })
        .then(response => {
          id = response.data.id;
          console.log('response id: ' + response.data.id);

          for (var i = 0; i < imagesToUpload.length; i++) {
              const fd = new FormData();
              fd.append('photo', imagesToUpload[i]);
              console.log('images to upload: ' + imagesToUpload[i]);
              fd.append('listing', id);

              axios.post('https://drp21-backend.herokuapp.com/api/v1/uploadPhoto', fd, {
                'Content-Type': 'multipart/form-data'
              })
              .then(response => console.log(response.data));
          }
        });



        // if (imagesToUpload.length == 1) {
        //   url = 'https://drp21-backend.herokuapp.com/api/v1/uploadPhoto';
        // } else if (imagesToUpload.length > 1) {
        //   url = 'https://drp21-backend.herokuapp.com/api/v1/uploadMultiplePhotos';
        // }



        props.setRefresh(true)
        event.preventDefault();
    }

    const cancel = () => {
        props.setSearchBar(true)
    }


    return (
        user ?
            <div className="Create">
                <div className="ListingFields">
                    <div className="ListingTop">
                        <textarea className="ListingTitle" type="text" onChange={handleTitleChange} value={title} placeholder="title" />
                        <input className="DateTime" type="datetime-local" onChange={handleDateTimeChange} />
                    </div>
                    <div className="ListingBottom">
                        <textarea className="ListingDescription" type="text" onChange={handleDescriptionChange} value={description} placeholder="description" />
                        <div className="UploadSection">
                          <label for="photoUpload"> Upload Photos: </label> <br/><br/>
                          <input id="photoUpload" type="file" multiple onChange={handleFileSelected} />
                        </div>
                    </div>
                </div>
                <div className="Buttons">
                    <button className="SubmitList" type="submit" onClick={submit}>Submit</button>
                    <button className="CancelList" type="submit" onClick={cancel}>Cancel</button>
                </div>
            </div>
            :
            <div className='Login'>
                <h3 className='LoginText'> Please log in to create a post. </h3>
                <button className="Return" type="button" onClick={handleCancel}>Return</button>
            </div>
    )
}

export default CreateListing