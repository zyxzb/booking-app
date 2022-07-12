import {useState} from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Header from '../../components/header/Header.jsx';
import Form from '../../components/form/Form.jsx';
import Footer from '../../components/footer/Footer.jsx';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot, faBus, faCircleArrowLeft, faCircleArrowRight, faCircleXmark} from '@fortawesome/free-solid-svg-icons';

//style
import './css/Hotel.css'

const Hotel = () => {

    const [slideNumber,
        setSlideNumber] = useState(0);
    const [openSlider,
        setOpenSlider] = useState(false);

    const handleOpenImage = (index) => {
        setSlideNumber(index);
        setOpenSlider(!openSlider);
    }

    const hnadleMoveImage = (direction) => {
        let newSlideNumber;

        if (direction === 'left') {
            newSlideNumber = slideNumber === 0
                ? photos.length - 1
                : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === photos.length - 1
                ? 0
                : slideNumber + 1;
        }
        setSlideNumber(newSlideNumber);

    }

    const photos = [
        {
            src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&ixid' +
                    '=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        }, {
            src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid' +
                    '=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80'
        }, {
            src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid' +
                    '=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        }, {
            src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=Mn' +
                    'wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        }, {
            src: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-1.2.1&ixid' +
                    '=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
        }, {
            src: 'https://images.unsplash.com/photo-1622866306950-81d17097d458?ixlib=rb-1.2.1&ixid' +
                    '=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
        }, {
            src: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid' +
                    '=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        }, {
            src: 'https://images.unsplash.com/photo-1628592102751-ba83b0314276?ixlib=rb-1.2.1&ixid' +
                    '=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1697&q=80'
        }, {
            src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid' +
                    '=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80'
        }
    ];

    return (
        <div>
            <Navbar/>
            <Header type='list'/>
            <div className='hotelContainer'>
                {openSlider && <div className="slider">
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        className='sliderClose'
                        onClick={() => setOpenSlider(!openSlider)}/>
                    <FontAwesomeIcon
                        icon={faCircleArrowLeft}
                        className='sliderArrow arrowLeft'
                        onClick={() => hnadleMoveImage('left')}/>
                    <FontAwesomeIcon
                        icon={faCircleArrowRight}
                        className='sliderArrow arrowRight'
                        onClick={() => hnadleMoveImage('right')}/>
                    <div className="sliderWrapper">
                        <img
                            src={photos[slideNumber].src}
                            alt="apartament-img"
                            className='sliderImage'/>
                    </div>
                </div>}
                <div className='hotelWrapper'>
                    <button className='hotelWrapperBookNow'>Zarezerwuj!</button>
                    <h2 className='hotelTitle'>Jakiś tam apartament - Tytuł</h2>
                    <div className='hotelAdress'>
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>Warszawa, ul.Jakaś 56/90</span>
                    </div>
                    <span className='hotelDictance'><FontAwesomeIcon icon={faBus}/> Wyjątkowa lokalizacja - 800m od centrum</span>
                    <span className='hotelPrice'>Zarezerwuj już teraz za 149zł</span>
                    <div className='hotelImages'>
                        {photos.map((photo, index) => (
                            <div className="hotelImgWrapper" key={index}>
                                <img
                                    key={index}
                                    onClick={() => handleOpenImage(index)}
                                    src={photo.src}
                                    alt='img-house'
                                    className='hotelImage'/>
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsText">
                            <h3>Opis Hotelu</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus debitis
                                harum sunt repellendus sed et non ullam ab blanditiis nisi consectetur, incidunt
                                alias, exercitationem reiciendis id explicabo maiores ipsum illum quod?
                                Architecto quia, unde deleniti velit itaque saepe corrupti sapiente, delectus,
                                illo quibusdam repellat quisquam. Consectetur, dolorem eos omnis vitae, quae
                                optio nihil officiis pariatur dolore ex consequatur deserunt at rem laudantium
                                numquam quisquam, sed a distinctio temporibus ipsum molestias. Numquam eius
                                molestias sunt maiores explicabo amet vitae nulla velit sit doloremque quisquam,
                                aut atque hic architecto, odio vel obcaecati nostrum laboriosam? Obcaecati,
                                mollitia cum nisi deserunt necessitatibus odio adipisci!</p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h3>Idealny na 7 dni pobytu!</h3>
                            <span>Podsumowanie opisu - Lorem, ipsum dolor sit amet consectetur adipisicing
                                elit. Architecto.</span>
                            <h4>
                                <b>900zł</b>
                                <small> (7 dni)</small>
                            </h4>
                            <button>Zarezerwuj!</button>
                        </div>
                    </div>
                </div>

            </div>
            <Form/>
            <Footer/>
        </div>
    );
}

export default Hotel;
