//style
import './css/SearchItem.css';

const SearchItem = () => {
    return (
        <div className='searchItem'>
            <img
                src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="place-img"
                className='searchItemImg'/>
            <div className="searchItemDescription">
                <h2 className='searchItemDescriptionTitle' >Jakiś tam apartament</h2>
                <span className='searchItemDescriptionDistance'>800m do centrum</span>
                <span className='searchItemDescriptionSubtitle'>Apartament dwupokojowy <b>&#183;</b> 1 łazienka <b>&#183;</b>  30m<sup>2</sup></span>
                <span className='searchItemDescriptionCancle'>Darmowe odwołanie rezerwacji</span>
                <span className='searchItemDescriptionCancleSubtitle'>Rezerwacje możesz odwołać do 24h</span>
            </div>
            <div className="searchItemDetails">
                <div className="searchItemDetalsRating">
                    <span>Znakomity</span>
                    <button>8.8</button>
                </div>
                <div className="searchItemDetailsTexts">
                    <span className="searchItemDetailsTextsPrice">
                        149zł
                    </span>
                    <span className="searchItemDetailsTextsInfo">
                        Zawiera opłaty i podatek
                    </span>
                    <button className='searchItemDetailsButton'>Sprawdź dostępność</button>
                </div>
            </div>
        </div>
    );
}

export default SearchItem;
