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
import BannerBackground from '../../Banner/BannerBackground';
// ..
AOS.init();

const Home = () => {
    return (
        <BrowserRouter>
            <div>
                <div className='sticky top-0 z-50 bg-base-100 border-b-2 border-[#10B981]'>
                    <div className='max-w-[1500px] px-4 mx-auto '>
                        <Navbar></Navbar>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <BannerBackground></BannerBackground>
                    {/* <Banner></Banner> */}
                    {/* hello */}

                </div>
                <div className='max-w-[1400px] px-4 mx-auto'>
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
            </div>
        </BrowserRouter>
    );
};

export default Home;