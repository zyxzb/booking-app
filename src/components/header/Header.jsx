import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faBed,
    faPlane,
    faCar,
    faLocationDot,
    faTaxi,
    faCalendarDays,
    faPerson
} from '@fortawesome/free-solid-svg-icons';
import {DateRange} from 'react-date-range';
import {format} from 'date-fns';
// import bgImage from '../../images/1.jpg';

//styles
import './css/Header.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Header = ({type}) => {
    const [destination, setDestination]= useState('')
    const [openDate,
        setOpenDate] = useState(false);
    const [date,
        setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const navigate = useNavigate()

    const [openOptions,
        setOpenOptions] = useState(false);
    const [options,
        setOptions] = useState({adults: 2, children: 0, room: 1});

    const handleOptions = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev,
                [name]: operation === 'i'
                    ? options[name] + 1
                    : options[name] - 1
            }
        })
        // if (options[name] === 0 && operation === 'd') {     return options[name] += 1
        // }
    }

    const handleSearch = () => {
        navigate('/hotels', {state: {destination, date, options}})
    } 

    return (
        <header className='header'>
            <div className={ type ==='list' ? "headerContainer listMode" : "headerContainer"}>
                <div className='headerList'>
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed}/>
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane}/>
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar}/>
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi}/>
                        <span>Airport taxis</span>
                    </div>
                </div>
                {type !== 'list' && 
                <> 
                <h1 className='headerTitle'>Apartamenty Warszawa</h1>
                <p className='headerDescription'>Wyjątkowe mieszkania w samym sercu Warszawy.
                    Idealne dla jednej osoby lub pary. Apartamenty są w pełni wyposażone. Wiele
                    restauracji i sklepów w okolicy. Budynki z całodobową ochroną i monitoringiem. W
                    pobliżu galerie handlowe. Dobra komunikacja z całą Warszawą, lotniskiem Chopina
                    i Modlinem. Bardzo blisko przystanki komunikacji miejskiej.</p>
                <button className='headerButton'>Logowanie / Rejestracja</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className='headerIcon'/>
                        <input
                            className='headerSearchInput'
                            type="text"
                            placeholder=' Dokąd się wybierasz?'
                            onChange={(e) => setDestination(e.target.value)}
                            />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon
                            icon={faCalendarDays}
                            className='headerIcon'
                            onClick={() => setOpenDate(!openDate)}/>
                        <span className='headerSearchText' onClick={() => setOpenDate(!openDate)}>
                            {`${format(date[0].startDate, 'dd/MM/yyyy')} do ${format(date[0].endDate, 'dd/MM/yyyy')}`}
                        </span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='headerDateRange'/>}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
                        <span className='headerSearchText' onClick={() => setOpenOptions(!openOptions)}>
                            {`
                            ${options.adults > 1
                                ? `${options.adults} dorosłych `
                                : `${options.adults} dorosły`} /
                            ${options.children === 1
                                    ? `${options.children} dziecko `
                                    : `${options.children} dzieci`} /
                            ${options.room > 1
                                        ? `${options.room} pokoje `
                                        : `${options.room} pokój`}
                            `}</span>
                        {openOptions && (
                            <div className="options">
                                <div className="optionItem">
                                    <span className="optionText">Dorosły</span>
                                    <div className="optionsItemsContainer">
                                        <button
                                            disabled={options.adults <= 1}
                                            className='optionCounterButton'
                                            onClick={() => handleOptions('adults', 'd')}>-</button>
                                        <span className='optionCounterNumber'>{options.adults}</span>
                                        <button
                                            className='optionCounterButton'
                                            onClick={() => handleOptions('adults', 'i')}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Dzieci</span>
                                    <div className="optionsItemsContainer">
                                        <button
                                            disabled={options.children <= 0}
                                            className='optionCounterButton'
                                            onClick={() => handleOptions('children', 'd')}>-</button>
                                        <span className='optionCounterNumber'>{options.children}</span>
                                        <button
                                            className='optionCounterButton'
                                            onClick={() => handleOptions('children', 'i')}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Pokoje</span>
                                    <div className="optionsItemsContainer">
                                        <button
                                            disabled={options.room <= 1}
                                            className='optionCounterButton'
                                            onClick={() => handleOptions('room', 'd')}>-</button>
                                        <span className='optionCounterNumber'>{options.room}</span>
                                        <button
                                            className='optionCounterButton'
                                            onClick={() => handleOptions('room', 'i')}>+</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="headerSearchItem">
                        <button className='headerButton' onClick={handleSearch}>Szukaj</button>
                    </div>
                </div>
            </>}
        </div>
    </header>
    );
}

export default Header;
