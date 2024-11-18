// dowloadable resume 
import React from 'react';
import myPdf from '../assets/resume.pdf'

export default function ResumePage () {


    return(
        <div className='resume-container'>
            <h2>Resume Heading</h2>
            <p>Download my <a href={myPdf} download='resume.pdf'>Resume</a></p>

        </div>
    )
}