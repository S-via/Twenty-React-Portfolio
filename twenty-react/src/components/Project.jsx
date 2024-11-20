// projects will be used to export props to porfolio 
import React from 'react';


export default function Project({image,deployed,repo}){
    
    return (
        <div>
            <h2>Portfolio Heading</h2>
            <div className='img-container'>
        
            <a href ={deployed} alt='deployed'>deployed</a>
            <a href ={repo} target="blank" >Repo</a>
            <img src ={image} alt='project'/>

            </div>
            {/*  add hover css over images */}
            {/* fix sizing image  */}
           
        </div>
    );
}
