import './Home.css';
import logo from '../images/recycle-logo.png';

function Home() {
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
            </header>
        </div>
    );
}

export default Home;