import './Home.css';
import logo from '../images/recycle-logo.png';
import React from 'react';
import Select from 'react-select';
import MultiSelect from './MultiSelect'


class Home extends React.Component {

    ops = [
        {value: 'recycle', label: 'Recycle'},
        {value: 'reuse', label: 'Reuse'},
        {value: 'reduce', label: 'Reduce'}
    ];

    constructor(props) {
        super(props);
        this.state = {
            category: [],
            description: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSelectChange(event) {
        console.log(event)
        this.setState({category: event})
    }

    handleTextChange(event) {
        this.setState({description: event.target.value})
    }

    handleSubmit(event) {
        alert('Post Submitted');
        console.log(this.state)
        event.preventDefault();
    }


    render() {
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
                        <MultiSelect options={this.ops} styles={styles} value={this.state.category} onChange={this.handleSelectChange}/>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" onChange={this.handleTextChange} value={this.state.description}/>
                            <input type="submit" value="Post" />
                        </form>
                    </div>

                </header>
            </div>
        );
    }
}

// function NewNoteButton() {
//     const { Frame, sync } = useEasybase();
  
//     const buttonStyle = {
//       left: 10,
//       top: 10,
//       fontSize: 21
//     }
  
//     const handleClick = () => {
//       const newCategory = prompt("Please enter a category for your note");
//       const newDescription = prompt("Please enter your description");
      
//       Frame().push({
//         Category: newCategory,
//         Description: newDescription,
//       })
      
//       sync();
//     }
  
//     return (<button style={buttonStyle} onClick={handleClick}>Add A New Post Below</button>)
//   }

// function Posts() {
//     const { Frame, sync, configureFrame } = useEasybase();

//     useEffect(() => {
//         configureFrame({ 
//             tableName: "drp21-database", 
//             limit: 10 });
//         sync();
//     }, [])

//     const noteRootStyle = {
//         border: "2px #0af solid",
//         borderRadius: 9,
//         margin: 20,
//         backgroundColor: "#efefef",
//         padding: 6,
//         color: "black"
//     }

//     return (
//         <div>
//             {Frame().reverse().map(ele =>
//                 <div style={noteRootStyle}>
//                     <h3>{ele.category}</h3>
//                     <p>{ele.description}</p>
//                 </div>
//             )}
//             {
//                 Frame().map(ele => console.log(ele))
//             }
//         </div>
//     )
// };

export default Home;

// =======
// import React, { useEffect } from 'react';
// import { EasybaseProvider, useEasybase } from 'easybase-react';
// import ebconfig from './../ebconfig';

// class Home extends React.Component {
// >>>>>>> Stashed changes