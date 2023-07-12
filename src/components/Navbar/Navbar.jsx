import './NavbarStyles.css';
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
import { navbarData } from '../../fakeData';
function Navbar() {
    return (
        <div className='navbar'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} height={'50px'} width={'50px'} alt='Company logo' />
                <div className='logo-text'>King Arthur's Bakery</div>
            </div>
            <div style={{ display: 'flex' }}>
                {
                    navbarData.map((item) => {
                        return (
                            <Link to={item.to}>
                                <div className='navbar-item'>{item.title}</div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Navbar