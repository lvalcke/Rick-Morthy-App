import style from './NavBar.module.css'
import { Rick } from '../../data.js'
import SearchBar from '../SearchBar/SearchBar'

function NavBar (props){
    return (
        <nav className={style.nav}>
                <div>
                <img className={style.logo} src={Rick.image}  alt="loading" />
                </div>
                <img className={style.titulo} src="https://retromash.com/wp-content/uploads/2021/10/rickandmortybanner.jpg" width='600' height="600" alt="loading" />
                <SearchBar onSearch={props.onSearch} />
        </nav>
    );
} 

export default NavBar