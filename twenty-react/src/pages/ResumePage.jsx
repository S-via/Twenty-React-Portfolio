// dowloadable resume 
import React from 'react';
import myPdf from '../assets/Silvia_V_Web_Developer2025.pdf'
import pdfLogo from '../assets/pdf-svgrepo-com.svg'

export default function ResumePage() {

    return (
        <div className="resume-container">
            <div className="card w-75 mb-3">
                <div className="card-body">


                    <h2>Resume</h2>
                    <p>Download My Resume
                        <a href={myPdf} download='resume.pdf'> 
                            <img src ={pdfLogo} style={{width:"50px",height:"auto"}}/></a>
                    </p>
                    <section>
                        <h3>Key Skills:</h3>
                        <ul>
                            <li> Communication: Both verbal and written communication to effectively interact with customers and colleagues, and convey complex information clearly.
                            </li>
                            <li> Product knowledge: Deep understanding of products and policies to address customer inquiries and provide accurate information.
                            </li>
                            <li>Customer service orientation: Ability to prioritize customer needs, empathize with their concerns, and provide timely and satisfactory solutions.
                            </li>
                            <li>Problem-solving skills: Capacity to analyze customer issues, identify root causes, and propose appropriate resolutions within the framework of policies.
                            </li>
                        </ul>
                    </section>


                    <section>
                        <h3> Technical Skills:</h3>
                        <ul>
                            <li>Languages: JavaScript, HTML, CSS </li>
                            <li>Frameworks: Node.js, Express</li>
                            <li>Databases:  PostgreSQL </li>
                            <li>Tools: Git, VS Code</li>
                            <li>Other: APIs, RESTful services, Agile methodologies</li>


                        </ul>
                    </section>

                </div>
            </div>
        </div>
    );
}

