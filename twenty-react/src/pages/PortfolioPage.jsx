/* titled images of six of the developer’s applications 
with links to both the deployed applications and the corresponding GitHub repositories  */
// PARENT 
import React from 'react';
import Project from '../components/Project';
import myImage from '../assets/blogyou.png'
import myImage2 from '../assets/'
import myImage3 from '../assets/'
import myImage4 from '../assets/'
import myImage5 from '../assets/'

// expert learning example below 

export default function Portfolio() {

    const card = {
        image: myImage,
        deployed: 'https://s-via.github.io/Four-Personal-Blog/',
        repo: 'https://github.com/S-via/Four-Personal-Blog'

    }
    return (
        <div className='portfolio-container'>
            <Project
            image={card.image}
            deployed={card.deployed}
            repo={card.repo}/>
            

        </div>
    )
}