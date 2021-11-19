import Spinner from '../spinner/Spinner';
import PropTypes from 'prop-types';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './comicsList.scss';

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
        const items =  arr.map((item) => {

            return (
                <li 
                    className='comics__item'
                    key={item.id}
                    >
                    <Link to={`/comics/${item.id}`}>
                        <img 
                            src={item.thumbnail} 
                            alt={item.title}
                            className="comics__item-img"
                            />
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.price}</div>
                    </Link>
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
                onClick={() => onRequest(false)}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

ComicsList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default ComicsList;