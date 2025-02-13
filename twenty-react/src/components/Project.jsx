// projects will be used to export props to porfolio 
import React from 'react';


export default function Project({ image, deployed, repo }) {

    return (
        <>
            <div className="relative group overflow-hidden rounded-lg shadow-lg ">

                <img src={image} className="w-full h-full object-cover transition duration-300 transform group-hover:scale-105" alt='project' />

                <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20">

                    <a href={deployed} target="_blank" rel="noopener noreferrer" className="text-white text-lg font-semibold bg-blue-500 px-4 py-2 rounded-lg m-2 hover:bg-blue-700 transition-opacity duration-300">Deployed</a>
                    <a href={repo} target="_blank" rel="noopener noreferrer" className="text-white text-lg font-semibold bg-gray-700 px-4 py-2 rounded-lg m-2 hover:bg-gray-900 transition-opacity duration-300"> Repo</a>
                </div>
            </div>

        </>
    );
}
