import {useState} from 'react';
import {useLocation} from 'react-router-dom';
import {format} from 'date-fns';
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/Navbar/Navbar";
import {DateRange} from 'react-date-range';

//styles
import './css/List.css';
import SearchItem from '../../components/searchItem/SearchItem';

const List = () => {

    const location = useLocation();

    const [destination,
        setDestination] = useState(location.state.destination);
    const [date,
        setDate] = useState(location.state.date);
    const [options,
        setOptions] = useState(location.state.options);
    const [openDate,
        setOpenDate] = useState(false);

    return (
        <div>
            <Navbar/>
            <Header type='list'/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearchContainer">
                        <h2 className="listSearchTitle">Szukaj</h2>
                        <div className="listSearchItem">
                            <label>Cel podróży:</label>
                            <input type="text" placeholder={destination}/>
                        </div>
                        <div className="listSearchItem">
                            <label>Termin podróży:</label>
                            <span className='listSearchDate' onClick={() => setOpenDate(!openDate)}>
                                {`${format(date[0].startDate, 'dd/MM/yyyy')} do ${format(date[0].endDate, 'dd/MM/yyyy')}`}</span>
                            {openDate && <DateRange
                                onChange={(item) => setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}
                                className='headerDateRange'/>}
                        </div>
                        <div className="listSearchItem">
                            <label>Opcje</label>
                            <div className="listSearchOptions">
                                <span className="listSearchOptionsText">
                                    Min. cena:
                                    <small> (za noc)</small>
                                </span>
                                <input type="number" className='listSearchOptionsInput'/>
                            </div>
                            <div className="listSearchOptions">
                                <span className="listSearchOptionsText">
                                    Max. cena:
                                    <small> (za noc:)</small>
                                </span>
                                <input type="number" className='listSearchOptionsInput'/>
                            </div>
                            <div className="listSearchOptions">
                                <span className="listSearchOptionsText">
                                    Dorośli:
                                </span>
                                <input
                                    type="number"
                                    className='listSearchOptionsInput'
                                    placeholder={options.adults}
                                    min='1'/>
                            </div>
                            <div className="listSearchOptions">
                                <span className="listSearchOptionsText">
                                    Dzieci:
                                </span>
                                <input
                                    type="number"
                                    className='listSearchOptionsInput'
                                    placeholder={options.children}
                                    min='0'/>
                            </div>
                            <div className="listSearchOptions">
                                <span className="listSearchOptionsText">
                                    Pokoje:
                                </span>
                                <input
                                    type="number"
                                    className='listSearchOptionsInput'
                                    placeholder={options.room}
                                    min='1'/>
                            </div>
                        </div>
                        <button className='listSearchContainerBtn'>Szukaj</button>
                    </div>
                    <div className="listResult">
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default List;
