import './Home.css';
import logo from '../images/recycle-logo.png';
import React from 'react';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('Post Submitted');
        event.preventDefault();
    }

    render() {
        return (
            <div className="Home">
                <header className="Home-header">
                    <img src={logo} className="Home-logo" alt="logo" />
                    <p>
                        An app to do with sustainability.
            </p>
                    <a
                        className="Home-link"
                        href="https://gitlab.doc.ic.ac.uk/g205001021/drp21"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        create a post
            </a>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Post:
                    <input type="text" />
                        </label>
                        <input type="submit" value="Post" />
                    </form>
                </header>
            </div>
        );
    }
}

export default Home;