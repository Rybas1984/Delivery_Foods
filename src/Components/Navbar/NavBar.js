import {NavLink} from "react-router-dom";
import style from './Navbar.module.css';

function Navbar() {
    return (
        <div className={style.container}>

                <NavLink to="/" className={navData => navData.isActive ? style.active : ''}>About</NavLink>


                <NavLink to="/shops" className={navData => navData.isActive ? style.active : ''}>Shops</NavLink>


                <NavLink to="/shoppingCart" className={navData => navData.isActive ? style.active : ''}>Shopping Cart</NavLink>

                <NavLink to="/contacts" className={navData => navData.isActive ? style.active : ''}>Contacts</NavLink>

        </div>
    );
}

export default Navbar;