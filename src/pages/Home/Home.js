import './Home.css';
import React, { useState } from 'react';
import logo from '../../images/recycle-logo.png'
import { useHistory } from "react-router-dom";

function Home() {

    const history = useHistory();

    const routeChangeMarketplace = () => {
        let path = `market`;
        history.push(path);
    }

    const routeChangeRepairForum = () => {
        let path = `feed`;
        history.push(path);
    }

    const routeChangeLogin = () => {
        let path = `login`;
        history.push(path);
    }

    return (
        <div className="Home">
            <header className="Home-header">
                <div className="HomeContainer" style={{ width: "90%" }}>
                    <img src={logo} className="Home-logo" alt="logo" />
                    <p>ReusingElectronicsAndOtherStuff</p>
                    <div className="Home-redirects">
                        <button className="Home-btn" onClick={routeChangeMarketplace}>Marketplace</button>
                        <button className="Home-btn" onClick={routeChangeRepairForum}>Repair Forum</button>
                        <button className="Home-btn" onClick={routeChangeLogin}>Login</button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Home;
