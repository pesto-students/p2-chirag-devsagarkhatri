import React from 'react';

const About=()=>{
    return ( 
        <div className="container">
            <div className="mt-4 p-5 text-white rounded svgbg ">
                <h1>About <i>URLZip</i></h1>
            </div>
            <div className="mt-4 p-5 text-black rounded bg-light">
                <p>URLZip is a project created for shortening and easy sharing of Uniform resource locators accross devices in seconds. This inturn helps your cater your clients and increase your brand outreach on the internet to expand your userbase.</p>
            </div>
            <div className="mt-4 p-5 text-black rounded bg-light">
                <p>We use the shrtcode API to store and zip the URLs entered by the users. For more information on this API, visit <a href="https://shrtco.de/docs/">this link</a>.</p>
            </div>
            <div className="mt-4 p-5 text-primary rounded bg-light border border-primary">
                <h3>Thank you for visiting us !</h3>
            </div>
        </div>
     );
}

export default About;