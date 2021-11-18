import Spinner from '../spinner/Spinner';
import PropTypes from 'prop-types';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';
import {useState, useEffect} from 'react';
import './comicsList.scss';
import uw from '../../resources/img/UW.png';
import xMen from '../../resources/img/x-men.png';

const ComicsList = (props) => {

    const [charList, setCharList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(1541);
    const [charEnded, setCharEnded] = useState(false);

    const {loading, error, getAllComics} = MarvelService();

    useEffect(() => {
        onRequest(true);
    }, []);

    const onRequest = (initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true)
        getAllComics(offset)
            .then(onCharListLoaded)
    }

    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 8) {
            ended = true;
        }

        setCharList([...charList, ...newCharList]);
        setNewItemLoading(false);
        setOffset(offset => offset + 9);
        setCharEnded(ended);
    }

    const renderItems = (arr) => {
        const items =  arr.map((item, i) => {
            // let imgStyle = {'objectFit' : 'cover'};
            // if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
            //     imgStyle = {'objectFit' : 'unset'};
            // }
            
            return (
                <li 
                    className={'comics__item'}
                    key={item.id}
                    // onClick={() => {
                    //     props.onCharSelected(item.id);
                    // }}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            props.onCharSelected(item.id);
                        }
                    }}
                    >
                        <img 
                            src={item.thumbnail} 
                            alt={item.title}
                            className="comics__item-img"
                            />
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.price}</div>
                </li>
            )
        });
        return (
            <ul className="comics__grid">
                {items}
            </ul>
        )
    }

    const items = renderItems(charList);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;

    return (
        <div className="comics__list">
            {errorMessage}
            {spinner}
            {items}
            <button 
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{'display': charEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}>
                <div className="inner">load more</div>
            </button>
        </div>

        
    )

    // return (
    //     <div className="comics__list">
    //         <ul className="comics__grid">
    //             <li className="comics__item">
    //                 <a href="#">
    //                     <img src={uw} alt="ultimate war" className="comics__item-img"/>
    //                     <div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
    //                     <div className="comics__item-price">9.99$</div>
    //                 </a>
    //             </li>
    //             <li className="comics__item">
    //                 <a href="#">
    //                     <img src={xMen} alt="x-men" className="comics__item-img"/>
    //                     <div className="comics__item-name">X-Men: Days of Future Past</div>
    //                     <div className="comics__item-price">NOT AVAILABLE</div>
    //                 </a>
    //             </li>
    //             <li className="comics__item">
    //                 <a href="#">
    //                     <img src={uw} alt="ultimate war" className="comics__item-img"/>
    //                     <div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
    //                     <div className="comics__item-price">9.99$</div>
    //                 </a>
    //             </li>
    //             <li className="comics__item">
    //                 <a href="#">
    //                     <img src={xMen} alt="x-men" className="comics__item-img"/>
    //                     <div className="comics__item-name">X-Men: Days of Future Past</div>
    //                     <div className="comics__item-price">NOT AVAILABLE</div>
    //                 </a>
    //             </li>
    //             <li className="comics__item">
    //                 <a href="#">
    //                     <img src={uw} alt="ultimate war" className="comics__item-img"/>
    //                     <div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
    //                     <div className="comics__item-price">9.99$</div>
    //                 </a>
    //             </li>
    //             <li className="comics__item">
    //                 <a href="#">
    //                     <img src={xMen} alt="x-men" className="comics__item-img"/>
    //                     <div className="comics__item-name">X-Men: Days of Future Past</div>
    //                     <div className="comics__item-price">NOT AVAILABLE</div>
    //                 </a>
    //             </li>
    //             <li className="comics__item">
    //                 <a href="#">
    //                     <img src={uw} alt="ultimate war" className="comics__item-img"/>
    //                     <div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
    //                     <div className="comics__item-price">9.99$</div>
    //                 </a>
    //             </li>
    //             <li className="comics__item">
    //                 <a href="#">
    //                     <img src={xMen} alt="x-men" className="comics__item-img"/>
    //                     <div className="comics__item-name">X-Men: Days of Future Past</div>
    //                     <div className="comics__item-price">NOT AVAILABLE</div>
    //                 </a>
    //             </li>
    //         </ul>
    //         <button className="button button__main button__long">
    //             <div className="inner">load more</div>
    //         </button>
    //     </div>
    // )
}

export default ComicsList;