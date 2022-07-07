//styles
import Featured from '../../components/featured/Featured';
import Footer from '../../components/footer/Footer';
import Form from '../../components/form/Form';
import Header from '../../components/header/Header';
import Navbar from '../../components/Navbar/Navbar';

import './Home.css'
const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/> {/* add more here */}
            </div>
            <Form/>
            <Footer/>
        </div>
    );
}

export default Home;
