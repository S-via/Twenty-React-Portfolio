// dowloadable resume 
import React from 'react';
import myPdf from '../assets/resume.pdf'

export default function ResumePage() {


    return (
        <div className='resume-container'>
            <h2>Resume Heading</h2>
            <p>Download my <a href={myPdf} download='resume.pdf'>Resume</a></p>

            <p> Communication: Both verbal and written communication to effectively interact with customers and colleagues, and convey complex information clearly.
                Product knowledge: Deep understanding of products and policies to address customer inquiries and provide accurate information.
                Customer service orientation: Ability to prioritize customer needs, empathize with their concerns, and provide timely and satisfactory solutions.
                Problem-solving skills: Capacity to analyze customer issues, identify root causes, and propose appropriate resolutions within the framework of policies.
                Attention to detail: Diligence in delicate processes
                Adaptability: Flexibility to handle diverse customer situations, navigate through different scenarios, and adjust to evolving policies or procedures.
                Time management: Efficiently manage tasks, prioritize workload, and meet service level agreements while delivering high-quality customer service.
                Conflict resolution: Capability to manage and de-escalate conflicts or disputes, while maintaining professionalism and adhering to guidelines.
                Technology proficiency: Competence in using software systems, customer relationship management (CRM) tools, and other digital platforms to streamline customer interactions and administrative tasks.
                
                Technical Skills:
                Languages: JavaScript, HTML, CSS
                Frameworks: Node.js, Express
                Databases:  PostgreSQL.
                Tools: Git, VS Code
                Other: APIs, RESTful services, Agile methodologies</p>

        </div>
    )
}