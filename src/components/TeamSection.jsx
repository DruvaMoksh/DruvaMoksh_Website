import React from 'react';
import { motion } from 'framer-motion';
import naveenImg from '../assets/images/inner/Naveen.png';
import nivedhithaImg from '../assets/images/inner/Nivedhitha.png';
import premImg from '../assets/images/inner/Prem.png';
import sankalpImg from '../assets/images/inner/sankalp.png';

const TeamSection = () => {
    const team = [
        {
            name: "Naveen",
            role: "Developer",
            linkedin: "http://www.linkedin.com/in/nvn-india",
            img: naveenImg,
            text: "Working at Druva Moksh has been a valuable experience, building Vue.js components and collaborating on real-world projects."
        },
        {
            name: "Nivedhitha",
            role: "Developer",
            linkedin: "https://www.linkedin.com/in/nivedita-jayaswal/",
            img: nivedhithaImg,
            text: "Working at Dhruva Moksha has been both technically enriching and professionally fulfilling, with visible impact from my contributions."
        },
        {
            name: "Prem",
            role: "AI/ML Engineer",
            linkedin: "https://www.linkedin.com/in/prem-kumar-sharma-a499b1201",
            img: premImg,
            text: "Working at Dhruva MokshAI has been a rewarding journey with hands-on AI/ML projects, constant learning, and room to innovate."
        },
        {
            name: "Sankalp",
            role: "Collaborator",
            linkedin: "https://www.linkedin.com/in/sankalp-kumaraswamy/",
            img: sankalpImg,
            text: "What stands out at Druva Moksh is the collaborative spirit and the drive to build meaningful, real-world solutions."
        }
    ];

    return (
        <div className="team-area" style={{ padding: '80px 0', backgroundColor: '#020617' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mb-5">
                            <h5 className="" style={{ color: '#ff3c00', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px', fontWeight: 'bold', fontSize: '14px' }}>OUR TEAM MEMBERS</h5>
                            <h1 className="" style={{ color: '#fff', fontSize: '36px', fontWeight: '700' }}>Dedicated Team Members</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {team.map((member, index) => (
                        <motion.div
                            className="col-xl-3 col-lg-4 col-md-6"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <motion.div
                                className="single-team-box text-center mb-4"
                                whileHover={{ y: -10 }}
                                style={{
                                    backgroundColor: '#0f172a',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    padding: '30px',
                                    height: '100%',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <div className="single-team-thumb mb-4">
                                    <img src={member.img} alt={member.name} style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #ff3c00', padding: '3px' }} />
                                </div>

                                <div className="team-content">
                                    <h4 style={{ marginBottom: '5px' }}>
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#fff', fontWeight: '700', fontSize: '20px' }}>
                                            {member.name}
                                        </a>
                                    </h4>
                                    <span style={{ display: 'block', color: '#ff3c00', fontSize: '14px', marginBottom: '15px', fontWeight: '500' }}>{member.role}</span>
                                    <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.6', marginBottom: '0' }}>{member.text}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
