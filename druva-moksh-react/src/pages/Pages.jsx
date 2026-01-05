import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PageLayout = ({ title }) => (
    <>
        <Navbar />
        <div className="container" style={{ padding: '150px 0', textAlign: 'center' }}>
            <h1>{title}</h1>
            <p>This page is under construction.</p>
        </div>
        <Footer />
    </>
);

// export const About = () => <PageLayout title="About Us" />;
export { default as About } from './About';
// export const Services = () => <PageLayout title="Services" />;
export { default as Services } from './Services';
// export const Projects = () => <PageLayout title="Projects" />;
export { default as Projects } from './Projects';
// export const Contact = () => <PageLayout title="Contact Us" />;
export { default as Contact } from './Contact';
