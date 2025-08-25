import React from 'react';
import './LeftSideBar.css'
import assets from "../../assets/assets.js";

const LeftSideBar = () => {
    return (
        <div className={'ls'}>
            <div className="ls-top">
                <div className="ls-nav">
                    <img src={assets.univaiLogo2} alt="app logo" className="logo"/>
                    <div className="menu">
                        <img src={assets.univaiIcon} alt="menu icon"/>
                    </div>
                </div>
                <div className="ls-search">
                    <img src={assets.univaiLogo2} alt="search icon"/>
                    <input type="text" placeholder={'Search...'}/>
                </div>
                <div className="ls-list">
                    {
                        Array(12).fill("").map((item, index)=>(

                            <div key={index} className="friends">
                                <img src={assets.univaiLogo2} alt="profile pic"/>
                                <div>
                                    <p>Richard Sanford</p>
                                    <span>Hello, How are you?</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default LeftSideBar;