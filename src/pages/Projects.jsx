import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import placeholder images
import lynoraImg from '../assets/images/lynoraai.png';
import sensurairImg from '../assets/images/brand-img6.png';
import playfulPythonImg from '../assets/images/brand-img5.png';
import oncofocusImg from '../assets/images/blue_logo1.jpeg';
import mitkatImg from '../assets/images/MitKat-Logo-2022-Image.png';
import vaanMegamImg from '../assets/images/logo (1).svg';
import abhayaImg from '../assets/images/Capury-logo-50ht.webp';
import aktriosImg from '../assets/images/Logo-Transparent-Horizontal.svg';
import axelerateImg from '../assets/images/5ee774755ac120d454cfd81c_logo.png';
import queerInkImg from '../assets/images/unnamed.png';
import projectAgentsImg from '../assets/images/The_Product_Artisan.png';
import marinePalsImg from '../assets/images/marinepals.png';
import drishtiImg from '../assets/images/drishti.webp';
import svceImg from '../assets/images/svce.png';
import kripayaImg from '../assets/images/kripaya.svg';
import metaImg from '../assets/images/meta.jpeg';
import musicTemple from '../assets/images/musictemple.webp'


const Projects = () => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const heroRef = useRef(null);

    // Vanta Effect for Hero
    useEffect(() => {
        if (!vantaEffect && window.VANTA) {
            setVantaEffect(window.VANTA.DOTS({
                el: heroRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0xff6a00,
                color2: 0xff6a00,
                backgroundColor: 0x020617,
                size: 2.80,
                spacing: 35.00,
                showLines: false // Dots only for the "particle" look
            }));
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    // Data for Success Stories
    const successStories = [
        {
            category: "Telecommunication",
            title: "Lynora",
            desc: "A sweedish project where we designed an AI-driven assistant to analyze and interpret RFP and procurement documentation for a telecommunications-focused enterprise. Delivered a compliance intelligence solution embedded within familiar business tools, enabling automated requirement validation, faster bid reviews, and reduced manual effort for sales and commercial teams. ",
            stack: ["Python", "React", "NLP", "AWS"],
            link: "https://lynoraai.com/",
            image: lynoraImg
        },
        {
            category: "Saas",
            title: "Sensurair",
            desc: "Built a time-series forecasting system to estimate air quality metrics using historical environmental data. Trained and deployed a short-term predictive model to forecast PM2.5 levels by combining meteorological signals with pollution indicators, enabling data-driven air quality monitoring.",
            stack: [ "Python","Machine Learning", "Time Series Forecasting", "Cpanel"],
            link: "https://sensurair.com/",
            image: sensurairImg
        },
        {
            category: "Teaching",
            title: "Playful Python",
            desc: "Created a personalized learning platform to help users study, practice, and assess programming concepts interactively. Developed an adaptive learning system with multiple engagement modes—concept exploration, guided practice, and evaluation—designed to improve conceptual clarity and skill mastery.",
            stack: ["Python", "NLP"],
            link: "https://www.playfulpython.com/#",
            image: playfulPythonImg
        },
        {
            category: "Pharma/Healthcare",
            title: "OnCofocus",
            desc: "Designed a large-scale conversational assistant capable of reasoning over structured pharmaceutical datasets. Implemented a hybrid retrieval and reasoning architecture that enables accurate querying and insight generation across high-volume tabular datasets.",
            stack: ["Python", "NLP", "FastAPI", "LLM"],
            link: "https://www.oncofocus.com/",
            image: oncofocusImg
        },
        {
            category: "Consulting",
            title: "Mitkat",
            desc: "Built an automated system to monitor and analyze activity patterns across specific online communities for incident detection. Developed a domain-focused data intelligence engine that identifies emerging signals and anomalies in public digital forums, enabling timely alerts and situational awareness.",
            stack: ["Python", "Automation", "AWS", "NLP"],
            link: "https://mitkatadvisory.com/",
            image: mitkatImg
        },
        {
            category: "Telecommunication",
            title: "Vaan Megam",
            desc: "Developed a technical support assistant trained on industry-standard 5G specifications to aid internal teams and users. Implemented a retrieval-based AI system that contextualizes complex telecom documentation, allowing users to quickly query and understand 5G standards with high accuracy.",
            stack: ["LLM", "Python", "MongoDB", "RAG"],
            link: "https://www.vaanmegam.net/",
            image: vaanMegamImg
        },
        {
            category: "Marine",
            title: "Project Ani-Srini",
            desc: "Developed a digital onboarding platform for the shipping industry to manage seafarer intake and documentation workflows. Delivered an HR intelligence platform that streamlines candidate verification, credential extraction, and filtering based on rank, location, and specialization.",
            stack: ["React", "OCR", "Python", "Document Parsing"],
            link: "https://www.marinepals.com/",
            image: marinePalsImg
        },
        {
            category: "Healthcare",
            title: "Abhaya",
            desc: "Designed a predictive analytics pipeline to assess patient health indicators from biomedical sensor data. Implemented an early-warning system that analyzes real-time vitals to detect abnormal patterns and support proactive healthcare interventions.",
            stack: ["Python", "Predictive Modeling", "Sensor Data Processing"],
            link: "https://www.capury.in/",
            image: abhayaImg
        },
        {
            category: "Manufacturing",
            title: "Aktrios",
            desc: "Built a real-time fault detection framework using sensor telemetry for infrastructure monitoring. Developed a smart event-driven monitoring system that prioritizes alerts and triggers predictive maintenance workflows based on anomaly severity.",
            stack: ["Python", "Anomaly Detection Models", "Cloud-based Monitoring Systems"],
            link: "https://astrikos.ai/",
            image: aktriosImg
        },
        {
            category: "Retail",
            title: "QueerInk",
            desc: "Created a digital marketplace for purchasing and publishing electronic books.Delivered an end-to-end content commerce platform supporting digital distribution, transactions, and content management for niche readership communities.",
            stack: ["React", "Node.js", "MongoDB", "Cloud Hosting"],
            link: "#",
            image: queerInkImg
        },
        {
            category: "FinTech",
            title: "Axelerate",
            desc: "Built an automated evaluation engine for assessing student submissions against predefined benchmarks. Implemented an AI-based grading system that semantically compares student responses with reference material to produce accuracy scores and detailed feedback.",
            stack: ["Python", "NLP"],
            link: "#",
            image: axelerateImg
        },
        {
            category: "Teaching",
            title: "Rajgigs",
            desc: "Developed educational content and instructional workflows for teaching AI/ML concepts through hands-on coding. Designed an interactive ed-tech framework combining conceptual learning with practical implementation to improve learner engagement and outcomes.",
            stack: ["Python", "NLP", "Semantic Similarity Models"],
            link: "#"
        },
        // {
        //     category: "Manufacturing",
        //     title: "Sivasubra",
        //     desc: "Created a defect detection system for the automotive manufacturing domain using image-based inspection. Applied transfer learning techniques to classify defective components in real time, improving quality assurance efficiency on production lines.",
        //     stack: ["React", "Node.js", "Python"],
        //     link: "#"
        // },
        {
            category: "Saas",
            title: "Project Agents",
            desc: "Designed a unified framework enabling large language models to securely interact with enterprise systems and tools. Built a modular MCP-based ecosystem allowing controlled access to databases, APIs, and services with fine-grained permissions, observability, and workflow automation—significantly reducing integration complexity.",
            stack: ["React", "Python"],
            link: "https://www.rajesh-chandran.com/PodcastArtisanPodcast",
            image: projectAgentsImg
        },
        {
            category: "Saas",
            title: "Euclid",
            desc: "Developed a synthetic data generation platform to support testing, experimentation, and model training needs. Implemented a configurable data synthesis engine capable of producing realistic numerical, categorical, and unstructured datasets under strict validation constraints.",
            stack: ["Python", "AI"],
            link: "#"
        },
        // {
        //     category: "Government",
        //     title: "Sindhu",
        //     desc: "Built a computer vision system to monitor elderly residents and detect safety-related incidents. Deployed an ensemble-based vision pipeline for activity recognition and object detection, enabling automated alerts while preserving privacy.",
        //     stack: ["Python", "AI", "Computer Vision"],
        //     link: "#"
        // },
        {
            category: "Manufacturing",
            title: "Kripaya Solutions",
            desc: "Developed a predictive system to analyze incident causality within organizational workflows. Trained a supervised learning model that identifies fault origins and contributing factors, incorporating contextual reasoning for explainable outcomes.",
            stack: ["Python", "Machine Learning"],
            link: "https://www.kripya.com/",
            image: kripayaImg
        },
        {
            category: "Fashion/Clothing",
            title: "SVCE Wearables",
            desc: "Built a personalized recommendation engine for apparel selection based on user preferences. Implemented a hybrid recommendation system combining collaborative signals and content similarity to predict purchase likelihood.",
            stack: ["Python", "User Behavior Anaytics", "Coolaborative Filtering"],
            link: "https://www.svce.ac.in/",
            image: svceImg
        },
        {
            category: "Cyber Security",
            title: "Metavertua CEO",
            desc: "Designed a unified multimodal intelligence pipeline to extract structured insights from images. Built a multimodal processing framework integrating vision-language models for object detection, scene understanding, and semantic summarization, supported by retrieval-augmented reasoning.",
            stack: ["Python", "RAG"],
            link: "#",
            image: metaImg
        },
        {
            category: "Music",
            title: "Music Temple",
            desc: "Created a software tool capable of interpreting and transforming musical notation. Developed a notation intelligence module that maps symbolic music inputs into machine-readable formats for further manipulation and playback.",
            stack: ["Python"],
            link: "https://musictemple.in/",
            image: musicTemple
        },
        {
            category: "Marine",
            title: "Marine Pals",
            desc: "Built a conversational assistant trained on domain-specific shipping documentation. Implemented a document-aware AI assistant that enables maritime professionals to query operational manuals and uploaded records efficiently.",
            stack: ["Python", "NLP"],
            link: "https://www.marinepals.com/",
            image: marinePalsImg
        },
        {
            category: "Manufacturing",
            title: "DrishtiGochar",
            desc: "Developed a conversational interface for querying equipment and spare-part databases. Built a natural language to structured-query system with validation and retry mechanisms, enabling accurate inventory insights and procurement guidance.",
            stack: ["Python", "NLP", "SQL"],
            link: "https://swayatt.com/",
            image: drishtiImg
        }
    ];

    return (
        <div style={{ backgroundColor: '#020617', color: '#fff', overflowX: 'hidden' }}>
            <Navbar />

            {/* --- HERO SECTION --- */}
            <div ref={heroRef} style={{ padding: '160px 0 100px', textAlign: 'center', position: 'relative', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span style={{
                            border: '1px solid #ff3c00',
                            borderRadius: '30px',
                            padding: '8px 25px',
                            color: '#ff3c00',
                            textTransform: 'uppercase',
                            fontSize: '14px',
                            letterSpacing: '1px',
                            display: 'inline-block',
                            marginBottom: '20px',
                            fontWeight: '600'
                        }}>
                            Portfolio
                        </span>
                        <h1 style={{ fontSize: '64px', fontWeight: '700', marginBottom: '20px', color: '#fff' }}>
                            Our <span style={{ color: '#ff3c00' }}>Projects</span>
                        </h1>
                        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '18px', color: '#cbd5e1', lineHeight: '1.6' }}>
                            Delivering intelligent, scalable solutions that transform businesses through cutting-edge technology and innovative engineering.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container" style={{ paddingBottom: '100px' }}>

                {/* --- FEATURED CASE STUDY (Temporarily Hidden) --- */}
                {/* 
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        backgroundColor: '#0f172a',
                        borderRadius: '24px',
                        padding: '60px',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        marginBottom: '100px',
                        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.3)'
                    }}
                >
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <span style={{
                                backgroundColor: '#431407',
                                color: '#ff7c33',
                                padding: '6px 16px',
                                borderRadius: '6px',
                                fontSize: '13px',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                marginBottom: '20px',
                                display: 'inline-block'
                            }}>
                                Featured Case Study
                            </span>
                            <h2 style={{ fontSize: '42px', fontWeight: '700', marginBottom: '30px', lineHeight: '1.2' }}>
                                Intelligent Manufacturing Optimization
                            </h2>

                            <h5 style={{ color: '#ff3c00', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '10px' }}>Problem</h5>
                            <p style={{ color: '#94a3b8', marginBottom: '25px', lineHeight: '1.6' }}>
                                A leading manufacturer struggled with inefficient production scheduling, resulting in 30% equipment downtime and delayed deliveries.
                            </p>

                            <h5 style={{ color: '#ff3c00', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '10px' }}>Solution</h5>
                            <p style={{ color: '#94a3b8', marginBottom: '30px', lineHeight: '1.6' }}>
                                We developed an AI-powered optimization system using machine learning to predict maintenance needs and optimize production schedules in real-time.
                            </p>

                            <div className="d-flex flex-wrap gap-2">
                                {['Python', 'TensorFlow', 'React', 'PostgreSQL', 'AWS', 'Docker'].map((tech, i) => (
                                    <span key={i} style={{
                                        backgroundColor: 'rgba(255,255,255,0.05)',
                                        padding: '6px 14px',
                                        borderRadius: '20px',
                                        fontSize: '14px',
                                        color: '#cbd5e1',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-5 offset-lg-1">
                            <div style={{ backgroundColor: '#020617', padding: '40px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <h4 style={{ color: '#ff3c00', marginBottom: '25px', fontSize: '18px', fontWeight: '700', textTransform: 'uppercase' }}>Impact</h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {[
                                        "Reduced equipment downtime by 45%",
                                        "Improved delivery times by 35%",
                                        "Increased overall productivity by 28%",
                                        "ROI achieved within 6 months"
                                    ].map((item, i) => (
                                        <li key={i} style={{ marginBottom: '15px', color: '#e2e8f0', display: 'flex', alignItems: 'flex-start' }}>
                                            <i className="fa fa-check-circle" style={{ color: '#ff3c00', marginRight: '12px', marginTop: '4px' }}></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    width: '100%',
                                    marginTop: '30px',
                                    background: 'linear-gradient(90deg, #ff3c00 0%, #ff6a00 100%)',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '18px',
                                    color: '#fff',
                                    fontWeight: '700',
                                    fontSize: '16px',
                                    cursor: 'pointer'
                                }}
                            >
                                View Full Case Study <i className="fa fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
                */}


                {/* --- MORE SUCCESS STORIES GRID --- */}
                {/* <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '15px' }}>Our Success Stories</h2>
                    <p style={{ color: '#94a3b8', fontSize: '18px' }}>Explore our portfolio of innovative solutions across diverse industries</p>
                </div> */}

                <div className="row">
                    {successStories.map((story, i) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={i}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                style={{
                                    backgroundColor: '#0f172a',
                                    borderRadius: '16px',
                                    padding: '30px',
                                    height: '100%',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <div>
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <div style={{
                                            width: 'auto',
                                            minWidth: '40px',
                                            height: '40px',
                                            borderRadius: '8px',
                                            backgroundColor: story.image ? '#fff' : '#2a1a15',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#ff3c00',
                                            overflow: 'hidden',
                                            padding: story.image ? '5px 10px' : '0'
                                        }}>
                                            {story.image ? (
                                                <img src={story.image} alt={story.title} style={{ height: '100%', maxWidth: '100px', objectFit: 'contain' }} />
                                            ) : (
                                                <i className="fa fa-code"></i>
                                            )}
                                        </div>
                                        <span style={{
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            padding: '4px 12px',
                                            borderRadius: '20px',
                                            fontSize: '12px',
                                            color: '#cbd5e1'
                                        }}>
                                            {story.category}
                                        </span>
                                    </div>

                                    <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '15px' }}>{story.title}</h3>
                                    <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px' }}>{story.desc}</p>

                                    <div className="d-flex flex-wrap gap-2 mb-4">
                                        {story.stack.map((tech, idx) => (
                                            <span key={idx} style={{
                                                backgroundColor: '#1e293b',
                                                color: '#cbd5e1',
                                                fontSize: '12px',
                                                padding: '4px 10px',
                                                borderRadius: '4px'
                                            }}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', marginTop: 'auto' }}>
                                    <h6 style={{ color: '#ff3c00', fontSize: '14px', fontWeight: '700', marginBottom: '5px' }}>
                                        {story.metric}
                                    </h6>
                                    <div className="d-flex justify-content-end">
                                        <a href={story.link} style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>
                                            Learn more about the company <i className="fa fa-arrow-right" style={{ marginLeft: '5px' }}></i>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>


                {/* --- BOTTOM CTA --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        marginTop: '80px',
                        padding: '80px',
                        backgroundColor: '#0f172a',
                        borderRadius: '24px',
                        textAlign: 'center',
                        border: '1px solid rgba(255,255,255,0.05)',
                        background: 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)'
                    }}
                >
                    <h2 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '20px', color: '#fff' }}>Have a project in mind?</h2>
                    <p style={{ color: '#94a3b8', fontSize: '18px', maxWidth: '600px', margin: '0 auto 40px' }}>
                        Let's build something intelligent together. Our team is ready to transform your vision into reality.
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                        <Link to="/contact" style={{
                            backgroundColor: '#ff3c00',
                            color: '#fff',
                            padding: '16px 32px',
                            fontWeight: '700',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            display: 'inline-block'
                        }}>
                            Get In Touch <i className="fa fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                        </Link>
                        <Link to="/services" style={{
                            backgroundColor: 'transparent',
                            color: '#fff',
                            border: '1px solid rgba(255,255,255,0.2)',
                            padding: '16px 32px',
                            fontWeight: '700',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            display: 'inline-block'
                        }}>
                            View Our Services
                        </Link>
                    </div>
                </motion.div>

            </div>

            <Footer />
        </div>
    );
};

export default Projects;
