import React, { Component } from 'react'

const SidebarCard = (props) => {
        return (
    <li className="result-item">
        <a>
            <h3>{props.post.title}</h3>
            <div className="tem-detail">
                <div className="description">
                    <h5>
                        <a href="https://goo.gl/maps/iYbLT7nEF1SaTg2p8" target="_blank"><i className="map-marker"></i>63 Birch Street</a>
                    </h5>
                    <div className="label-org">ST. Anthony's</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis, arcu non hendrerit imperdiet,
                     metus odio scelerisque elit, sed lacinia odio est ac felis. Nam ullamcorper hendrerit ullamcorper. Praesent quis arcu quis 
                     leo posuere ornare eu in purus. Nulla ornare rutrum condimentum. Praesent eu pulvinar velit. Quisque non finibus purus, eu 
                     auctor ipsum.</p>
                </div>
            </div>
        </a>
        
    </li>

        )
    
}
export default SidebarCard;