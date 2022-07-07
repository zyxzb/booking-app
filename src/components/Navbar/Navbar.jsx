

//styles
import './css/Navbar.css';
const Navbar = () => {
    return (
        <navbar className='navbar'>
            <div className="navContainer">
                <div className='logo'>Booking App</div>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </navbar>
    );
}

export default Navbar;
