import {Link, NavLink, useLocation} from 'react-router-dom';
import './appHeader.scss';

const AppHeader = () => {

    const location = useLocation();
    console.log(location);



    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><NavLink 
                            style={({isActive}) => {
                                if (location.pathname.indexOf('/characters') > -1) {
                                    console.log(213);
                                    return {'color': '#9f0013'}
                                }
                                return {'color': isActive ? '#9f0013' : 'inherit'}

                            }}
                            to="/">Characters</NavLink></li>
                    /
                    <li><NavLink 
                        style={({isActive}) => ({'color': isActive ? '#9f0013' : 'inherit'})} 
                        to="/comics">Comics</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;