import style from './Nav.module.css';
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from 'react-router-dom';

const Nav= ({onSearch}) => {
    return(
        <nav className={style.nav} >
            <button><NavLink to='/about'>About</NavLink></button>
            <button><NavLink to='/home' >Home</NavLink></button>
            <button><NavLink to='/favorites'>Favorites</NavLink></button>
        <SearchBar  onSearch={onSearch}/>
        </nav>
    )
}

export default Nav