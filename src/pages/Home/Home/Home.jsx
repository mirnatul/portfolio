import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../../../components/shared/Navbar';
import About from '../../About/About';
import Banner from '../../Banner/Banner';
import Contact from '../../Contact/Contact';
import Footer from '../../Footer/Footer';
import Projects from '../../Projects/Projects';
import Services from '../../Services/Services';
import Skills from '../../Skills/Skills';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar></Navbar>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <Banner></Banner>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <About></About>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <Skills></Skills>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <Services></Services>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <Projects></Projects>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <Contact></Contact>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <Footer></Footer>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Home;