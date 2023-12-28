import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { FaPhoneAlt, FaAddressBook, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const formInputs = e.target;

        emailjs.sendForm('service_ku36vc7', 'template_cgjidpa', form.current, 'qmpxcd5n3RJFU_YTD')
            .then((result) => {
                Swal.fire(
                    'Thank You!',
                    'Email send successfully!',
                    'success'
                )
                formInputs.reset()
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contact' className='mt-16 lg:mt-32 text-center lg:text-left mb-16'>
            <h2 className='font-bold text-3xl lg:text-4xl text-center mb-12 lg:mb-16 border-b-4 border-warning w-[210px] mx-auto'>Contact Me</h2>

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-20'>
                <div>
                    <h2 className='text-lg lg:text-2xl mb-8 border-b-2 w-[200px] lg:w-[270px] mx-auto lg:mx-0' style={{ fontWeight: 900 }}>Contact Information</h2>
                    <p>Let's talk how I can help you to grow your business. I appreciate any kind of suggestions or feedback.</p>
                    <div className='grid lg:grid-cols-3 grid-cols-1 text-center gap-2 mt-8'>
                        <div className='border-2 p-3 lg:border-[#FBBD23] rounded-md'>
                            <FaPhoneAlt className='mx-auto mt-1 mb-3' size={24}></FaPhoneAlt>
                            <h3 className='text-lg' style={{ fontWeight: 700 }}>Phone</h3>
                            <p>+880 1763199000</p>
                        </div>
                        <div className='border-2 p-3 lg:border-[#FBBD23] rounded-md'>
                            <MdEmail className='mx-auto mt-1 mb-3' size={24}></MdEmail>
                            <h3 className='text-lg' style={{ fontWeight: 700 }}>Email</h3>
                            <p className='text-md'>mdmirnatul@gmail.com</p>
                        </div>
                        <div className='border-2 p-3 lg:border-[#FBBD23] rounded-md'>
                            <FaAddressBook className='mx-auto mt-1 mb-3' size={24}></FaAddressBook>
                            <h3 className='text-lg' style={{ fontWeight: 700 }}>Address</h3>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                    <h2 className='text-lg lg:text-2xl mx-auto mt-10 lg:mt-24 text-center' style={{ fontWeight: 900 }}>Connect Me With...</h2>
                    <div className='flex justify-center gap-10 mt-6'>
                        <FaFacebook size={46}></FaFacebook>
                        <FaGithub size={46}></FaGithub>
                        <FaLinkedin size={46}></FaLinkedin>
                        <FaTwitter size={46}></FaTwitter>
                    </div>
                </div>
                <div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='grid grid-cols-2 gap-2 lg:gap-5 my-2 lg:my-6'>
                            <div className=''>
                                <input type="text" name="from_name" id="" placeholder='Your Name...' className='w-full p-4 border-[1px] border-[#FBBD23] rounded-md' />
                            </div>
                            <div className=''>
                                <input type="email" name="from_email" id="" placeholder='Your Email...' className='w-full p-4 border-[1px] border-[#FBBD23] rounded-md' />
                            </div>
                        </div>
                        <div className='my-3 lg:my-6'>
                            <input type="text" name="from_subject" id="" placeholder='Email Subject...' className='w-full p-4 border-[1px] border-[#FBBD23] rounded-md' />
                        </div>
                        <div className='mt-3 lg:mt-6 mb-4'>
                            <textarea name="message" id="" placeholder='Write your message here...' rows={5} className='w-full p-4 border-[1px] border-[#FBBD23] rounded-md'></textarea>
                        </div>
                        <div className='text-center'>
                            <input type="submit" value="Send Email" className='btn btn-warning' />
                        </div>
                    </form>
                    <div className="divider my-3 lg:my-6">OR</div>
                    <div className='text-center'>
                        <h2 className='text-lg lg:text-xl'>Don't like form? Send me an <a href='mailto:mdmirnatulislam@gmail.com' className='text-warning underline cursor-pointer text-2xl lg:text-3xl'>Email.</a></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;