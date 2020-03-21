import React from 'react';
import './homepage-styles.scss';
const HomePage = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">SCRUBS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">LAB COATS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">SHOES</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">STETHOSCOPES</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">ACCESSORIES</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage;