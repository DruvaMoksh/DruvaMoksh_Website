import React from 'react';
import Navbar from '../components/Navbar';
import Breadcrumb from '../components/Breadcrumb';
import ServiceGrid from '../components/ServiceGrid';
import Footer from '../components/Footer';

const Services = () => {
    return (
        <>
            <Navbar />
            <Breadcrumb title="Services" />
            <ServiceGrid />
            <Footer />
        </>
    );
};

export default Services;
