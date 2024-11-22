// projects will be used to export props to porfolio 
import React from 'react';


export default function Project({ image, deployed, repo }) {

    return (
        <div className='card-images'>

            <div className='links'>
                <a href={deployed} alt='deployed'>Deployed</a>
                <a href={repo} alt="repo" target="blank" >Repo</a>
            </div>
            <div className='img-container'>
                <img src={image} alt='project' />

            </div>
            {/*  add hover css over images */}
            {/* fix sizing image  */}

        </div>
    );
}
