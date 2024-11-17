/* titled images of six of the developer’s applications 
with links to both the deployed applications and the corresponding GitHub repositories  */
// PARENT 
import React from 'react';
import Project from '../components/Project';
import myImage from '../assets/blogyou.png'
// expert learning example below 

export default function Portfolio() {

    const card = {
        image: myImage,
        deployed: 'https://s-via.github.io/Four-Personal-Blog/',
        repo: 'https://github.com/S-via/Four-Personal-Blog'

    }
    return (
        <div>
            <Project
            image={card.image}
            deployed={card.deployed}
            repo={card.repo}/>
            

        </div>
    )
}