import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {format} from 'date-fns';
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/Navbar/Navbar";

//styles
import './css/List.css';

const List = () => {

    const location = useLocation();

    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [options, setOptions] = useState(location.state.options);

    return (
        <div>
            <Navbar/>
            <Header type='list'/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h2 className="listSearchTitle">Szukaj</h2>
                        <div className="listSearchItem">
                            <label>Cel podróży:</label>
                            <input type="text" placeholder={destination}/>
                        </div>
                        <div className="listSearchItem">
                            <label>Termin podróży:</label>
                            <span>{`${format(date[0].startDate, 'dd/MM/yyyy')} do ${format(date[0].endDate, 'dd/MM/yyyy')}`}</span>
                        </div>
                    </div>
                    <div className="listResult">Elo</div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default List;
