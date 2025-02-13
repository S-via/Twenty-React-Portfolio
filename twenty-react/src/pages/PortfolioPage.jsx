/* titled images of six of the developer’s applications 
with links to both the deployed applications and the corresponding GitHub repositories  */
// PARENT 
import React from 'react';
import Project from '../components/Project';
import myImage from '../assets/blogyou.png'
import myImage2 from '../assets/main.png'
import myImage3 from '../assets/Image-8.png'
import myImage4 from '../assets/Image-11.png'
import myImage5 from '../assets/Image-12.png'


export default function Portfolio() {

    const card = [
        {
            image: myImage,
            deployed: 'https://s-via.github.io/Four-Personal-Blog/',
            repo: 'https://github.com/S-via/Four-Personal-Blog'

        },
        {
            image: myImage2,
            deployed: 'https://s-via.github.io/Fourteen-Tech-Blog/',
            repo: 'https://github.com/S-via/Fourteen-Tech-Blog'
        },
        {
            image:myImage3,
            deployed:'https://s-via.github.io/Nineteen-Text-Editor/',
            repo:'https://github.com/S-via/Nineteen-Text-Editor.git'
        },
        {
            image:myImage4,
            deployed:'https://s-via.github.io/Digital-Journey/',
            repo:'https://github.com/S-via/Digital-Journey.git'
        },
        {
            image:myImage5,
            deployed:'https://s-via.github.io/Eleven-Note-Taker/',
            repo:'https://github.com/S-via/Eleven-Note-Taker.git'
        }
    ]


    return (
        <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
            { card.map((card,index) => (
            <Project
            key={index}
                image={card.image}
                deployed={card.deployed}
                repo={card.repo} 
                />))}


        </div>
        </div>
    )
}