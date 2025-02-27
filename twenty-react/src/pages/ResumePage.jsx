// dowloadable resume 
import React from 'react';
import myPdf from '../assets/Silvia_V_Web_Developer2025.pdf'
import pdfLogo from '../assets/pdf-svgrepo-com.svg'

export default function ResumePage() {

    return (
        <>

            <div>
                {/*  Resume */}
                <div className="text-center">
                <h2 className="text-3xl font-bold text-center">Download Resume</h2>
                    <a href={myPdf} download='resume.pdf' >
                        <img 
                        src={pdfLogo}
                        style={{ width: "50px", 
                        height: "auto" }} />
                    </a>
                </div>
                
                {/* skills demo */}
                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Skills & Expertise</h3>
                    <div className="relative overflow-hidden">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-marquee">
                            <div className="p-4 border border-gray-300 rounded-lg">
                                <p className="font-bold">Backend Development</p>
                                <p>Node.js, Express</p>
                            </div>
                            <div className="p-4 border border-gray-300 rounded-lg">
                                <p className="font-bold">Database Management</p>
                                <p>MongoDB, Mongoose, PostgreSQL</p>
                            </div>
                            <div className="p-4 border border-gray-300 rounded-lg">
                                <p className="font-bold">API Development</p>
                                <p>RESTful services, GraphQL</p>
                            </div>
                            <div className="p-4 border border-gray-300 rounded-lg">
                                <p className="font-bold">Version Control</p>
                                <p>Git, GitHub, VS Code</p>
                            </div>
                            <div className="p-4 border border-gray-300 rounded-lg">
                                <p className="font-bold">Frontend Development</p>
                                <p>React</p>
                            </div>
                            <div className="p-4 border border-gray-300 rounded-lg">
                                <p className="font-bold">UI/UX Design</p>
                                <p>Tailwind CSS, Bootstrap</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience */}
                <section className="bg-opacity-10 p-6 rounded-lg shadow-lg border border-slate-400 backdrop-blur-md">
                    <h3 className="text-3xl font-bold mb-4">Professional Experience</h3>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="font-bold text-2xl">Freelance</div>
                            <div className="text-gray-500">Remote | Present</div>
                            <div className="text-md font-bold">MERN Stack Developer</div>
                            <ul className="list-disc pl-8">
                                <li>Custom web applications for entrepreneurs looking to increment their income</li>
                                <li>Responsive and scalable frontend interfaces with React</li>
                            </ul>
                        </div>

                        <div className="space-y-2">
                            <div className="font-bold text-2xl">Hispand</div>
                            <div className="text-gray-500">Remote | 2021-2024</div>
                            <div className="text-md font-bold">Customer Support Specialist</div>
                        </div>

                        <div className="space-y-2">
                            <div className="font-bold text-2xl">AALL INSURANCE</div>
                            <div className="text-gray-500">Remote | 2021-2024</div>
                            <div className="text-md font-bold">Upfront Underwritter</div>
                        </div>
                    </div>
                </section>

                {/*  Education */}
                <section className="bg-opacity-10 p-6 rounded-lg shadow-lg border border-slate-400 backdrop-blur-md">
                    <h3 className="text-2xl font-semibold">Education</h3>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <div className="font-bold text-lg">Certificate in Full Stack Web Development</div>
                            <div className="text-gray-500">UC Berkeley Extension | 2024</div>
                        </div>

                        <div className="space-y-2">
                            <div className="font-bold text-lg">Database Developer Practitioner</div>
                            <div className="text-gray-500">De Anza College | Currently Enrolled</div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}

