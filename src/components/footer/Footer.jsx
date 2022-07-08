import React from 'react';

//style
import '../footer/css/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
                <div className='footerSection'>
                    <p className='title'>Booking App</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut non debitis quae tempore repellendus quod nam natus adipisci sapiente.</p>
                    <p>&copy; {new Date().getFullYear()} | All Right Reserved </p>
                </div>
                <div className='footerSection'>
                    <p className='title'>Kontakt</p>
                    <p><a href="mailto:bookingappxxx@gmail.com">bookingappxyz@gmail.com</a></p>
                    <p><a href="tel:+123 456 789">+48 123 456 789</a></p>
                </div>
                <div className='footerSection'>
                    <p className='title'>Na skróty</p>
                    <p><a href="">Apartamenty dwópokojowe</a></p>
                    <p><a href="">Apartamenty trzypokojowe</a></p>
                </div>
        </div>
    );
}

export default Footer;
