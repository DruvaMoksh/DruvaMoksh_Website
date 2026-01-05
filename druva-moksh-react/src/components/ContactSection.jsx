import { motion } from 'framer-motion';

const ContactSection = () => {
    return (
        <div className="contact-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-7">
                        <motion.div
                            className="section-title text-left"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h5 className="section-sub-title">CONTACT US</h5>
                            <h1 className="section-main-title">D-32/12, Adyar Avenue,IITM,Chennai-600036</h1>
                            <h1 className="section-main-title"><a href="mailto:druvamoksh@gmail.com">druvamoksh@gmail.com</a></h1>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
