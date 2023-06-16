import React from 'react';
import "./Collections.css"
import park from "../../../../assets/collectionsImages/park.jpeg"

const Collections = () => {
    return (
        <div className="collections">
            <div className="title">
                <hr />
                <span style={{backgroundColor: "rgb(233, 233, 233)"}}>Коллекции</span>
            </div>
            <div className='collection-items'>
                <a href=''>
                    <img src={park}></img>
                </a>
                <a href=''>
                    <img src={park}></img>
                </a>
                <a href=''>
                    <img src={park}></img>
                </a>
                <a href=''>
                    <img src={park}></img>
                </a>
                <a href=''>
                    <img src={park}></img>
                </a>
                <a href=''>
                    <img src={park}></img>
                </a>
                <a href=''>
                    <img src={park}></img>
                </a>
                <a href=''>
                    <img src={park}></img>
                </a>
            </div>
        </div>
    )
}

export default Collections;