// dowloadable resume 
import React from 'react';
import myPdf from '../assets/Silvia_V_Web_Developer2025.pdf'
import pdfLogo from '../assets/pdf-svgrepo-com.svg'

export default function ResumePage() {

    return (
        <>

            <div>
                <h2>Resume</h2>
                <a href={myPdf} download='resume.pdf'>
                    <img src={pdfLogo} style={{ width: "50px", height: "auto" }} /></a>

                <section>
                    <h3> Skills & Expertise</h3>
                    <ul>
                        {/* Add in a box  */}
                        <li>Backend Development: Node.js, Express</li>
                        {/* Add in a box  */}
                        <li>Database Management: MongoDB, Mongoose, PostgreSQL </li>
                        {/* Add in a box  */}
                        <li>API Development: RESTful services, GraphQL </li>
                        {/* Add in a box  */}
                        <li>Version Control: Git, GitHub, VS Code</li>
                        {/* Add in a box  */}
                        <li>Frontend Development: React</li>
                        {/* Add in a box  */}
                        <li>UI/UX Design: Tailwind CSS, Bootstrap </li>
                    </ul>
                </section>
                <section>
                    <h3>Professional Experience</h3>
                    <ul>
                        {/* box */}
                        <li>Freelance</li>
                        <li>Remote</li>
                        <li>2024-Present</li>
                       {/* bold */}
                        <li>MERN Stack Developer</li>
                        <li>Custom web applications for upcoming entreprnuers looking to increment their income</li>
                        <li>Responsive and scalable frontend interfaces with React</li>

                       {/*  box */}
                       <li>Hispand</li>
                       <li>Remote</li>
                       <li>2021-2024</li>
                       {/* bold */}
                       <li>Customer Support Specialist</li>
                       <li></li>

                       {/*  box */}
                       <li>AALL Insurance</li>
                       <li>Remote</li>
                       <li>2021-2024</li>
                       {/* bold */}
                       <li>Upfront Underwritter</li>
                       <li></li>
                        
                    </ul>
                    </section>
                    <section>
                        <h3>Education</h3>
                        <ul>
                            {/* box */}
                            <li>Certificate in Full Stack Web Development</li>
                            <li>UC Berkeley Extension</li>
                            <li>2024</li>

                            {/* box */}
                            <li>Database Developer Practitioner</li>
                            <li>De Anza College</li>
                            <li>Currently Enrolled</li>
                        </ul>
                    </section>

            </div>

        </>
    );
}

