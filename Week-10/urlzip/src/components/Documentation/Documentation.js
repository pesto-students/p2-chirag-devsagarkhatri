import React from 'react'
import response from './../../assets/images/response_code.png';
function Documentation() {
    return ( 
        <div className="container">
            <div className="mt-4 p-5 text-white rounded svgbg ">
                <h1>URLZip API Documentation</h1>
                <p>Courtesy : <a href="https://shrtco.de/docs/" style={{color:"white",textDecoration:"none"}}>shrtcode API</a></p>
            </div>
            <div className="mt-4 p-5 text-black rounded bg-light">
                <h3>API Base</h3>
                <div className="p-3 bg-secondary text-white rounded">
                    https://api.shrtco.de/v2/
                </div>
                <p>All API Methods support GET and POST Requests.</p>
            </div>
            <div className="mt-4 p-5 text-black rounded bg-light">
                <h3>Rate Limits</h3>
                <p>The number of request is limited to 1 request per second, per IP address.</p>
            </div>
            <div className="mt-4 p-5 text-black rounded bg-light">
                <h3>Terms of Use</h3>
                <p>By using our API you agree to our terms of service. This API is based on fair use policy</p>
            </div>
            <div className="mt-4 p-5 text-black rounded bg-light">
                <h3>Errors</h3>
                <p>All unsuccessful API calls return an error message along with an <b>error_code</b>. See the table below to learn more about the meaning of each <b>error_code</b>:</p>
                <table >
                    <thead>
                        <th>error_code</th>
                        <th>Error</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                1
                            </td>
                            <td>
                                No URL specified ("url" parameter is empty)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                2
                            </td>
                            <td>
                                Invalid URL submitted
                            </td>
                        </tr>
                        <tr>
                            <td>
                                3
                            </td>
                            <td>
                                Rate limit reached. Wait a second and try again
                            </td>
                        </tr>
                        <tr>
                            <td>
                                4
                            </td>
                            <td>
                                IP-Address has been blocked because of violating our terms of service
                            </td>
                        </tr>
                        <tr>
                            <td>
                                5
                            </td>
                            <td>
                                shrtcode code (slug) already taken/in use
                            </td>
                        </tr>
                        <tr>
                            <td>
                                6
                            </td>
                            <td>
                                Unknown error
                            </td>
                        </tr>
                        <tr>
                            <td>
                                7
                            </td>
                            <td>
                                No code specified ("code" parameter is empty)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                8
                            </td>
                            <td>
                                Invalid code submitted (code not found/there is no such short-link)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                9
                            </td>
                            <td>
                                Missing required parameters
                            </td>
                        </tr>
                        <tr>
                            <td>
                                10
                            </td>
                            <td>
                                Trying to shorten a disallowed Link. 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="mt-4 p-5 text-black rounded bg-light">
                <h3>Shortening a Link</h3>
                <div className="p-3 bg-secondary text-white rounded">
                    /shorten
                </div>
                <p>The number of request is limited to 1 request per second, per IP address.</p>
                <h4>Example</h4>
                <div className="p-3 bg-secondary text-white rounded">
                    <b>GET/POST : </b>https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html
                </div><br/>
                <h4>Response</h4>
                <div className="p-3 bg-secondary text-white rounded">
                    <img src={response} alt="" hieght="auto" width="50%"/>      
                </div>
            </div>
            <br/><br/>
        </div>
     );
}

export default Documentation;