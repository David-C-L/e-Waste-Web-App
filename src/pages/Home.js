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

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('Post Submitted');
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
                        <MultiSelect options={this.ops} styles={styles}/>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text"/>
                            <input type="submit" value="Post" />
                        </form>
                    </div>
                </header>
            </div>
        );
    }
}

export default Home;