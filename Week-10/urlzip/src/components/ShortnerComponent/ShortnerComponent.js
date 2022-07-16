import React, { useRef, useState } from 'react';
import loader from './../../assets/loaders/loader.svg';
import './../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './ShortnerComponent.css';

const ShortnerComponent=()=>{
    let [zipUrl,setZipUrl] =useState('shrtco.de/URLZip');
    let [fullUrl,setFullUrl]=useState('http://www.example.org/very/long/link.html');
    let [isLoading,setIsLoading] =useState(false);
    let url = useRef('');
    const getUrlZip=async(val)=>{
        // let val1 = 'https://cdn.filestackcontent.com/preview=css:%22https%3A%2F%2Fassets.teachablecdn.com%2Fcss%2Ffilestack-pdf-viewer.css%22/T2TGO1DnShm2YaEYrffC#page=1&zoom=auto,-35,792';
        setFullUrl("Running URLZip on the link provided...");
        try{
            setIsLoading(true);
            await fetch('https://api.shrtco.de/v2/shorten?url='+val).then((response)=>response.json()).then((data)=>{
                // console.log(data);
                setFullUrl(val);
                // setZipUrl(data.result.short_link)
                data.ok?setZipUrl(data.result.short_link):setZipUrl('inValid Url, see documentation');
            });
        }catch(err){
            return [err];
        }finally{
            setIsLoading(false);
        }
    }
    const handleSubmit=(e)=>{
        console.log(url.current.value);
        getUrlZip(url.current.value);
    }

    
    return ( 
        <> 
        <div className="svgbg my-3 p-4 rounded text-white row">                
                <input type="text"  ref={url} className="form-control col" placeholder='Shorten a link here' />
                <div className="btn btn-warning col-3 mx-3" onClick={(e)=>handleSubmit(e)}>Shorten It</div>
            </div>
            <div className="bg-info my-3 p-4 rounded text-white row">
                <div className="bg-transparent my-auto col text-truncate">{fullUrl}</div>
                <div className="bg-transparent my-auto col-3 mx-3 text-primary">
                    {isLoading?<img src={loader} height={"20px"} width={"auto"} alt="wait until the page loads"/>:zipUrl}
                </div>
                <div className="btn btn-warning col-1 mx-3" onClick={()=>navigator.clipboard.writeText(zipUrl)}>Copy</div>
            </div>
        </>
     );
}

export default ShortnerComponent;