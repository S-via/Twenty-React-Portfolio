// projects will be used to export props to porfolio 
import React from 'react';


export default function Project({image,deployed,repo}){
    
    return (
        <div>
            <h2>Portfolio Heading</h2>
            <div className='img-container'>
        
            <img src ={image} alt='project'/>
            <a href ={deployed}> Deployed</a>
            <a href ={repo} target="blank" >Repo</a> 

            </div>
            {/*  add hover css over images */}
            {/* fix sizing image  */}
           
        </div>
    );
}
