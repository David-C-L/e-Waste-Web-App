import './Home.css';
import React, { useState } from 'react';
import logo from '../../images/recycle-logo.png'

function Home() {

    return (
        <div className="Home">
            <header className="Home-header">
                <div className="HomeContainer" style={{ width: "90%" }}>
                    <p>This is some text!</p>
                    <img src={logo} className="Home-logo" alt="logo" />
                </div>
            </header>
        </div>
    );
}

export default Home;
