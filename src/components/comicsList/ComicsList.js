import Spinner from '../spinner/Spinner';
import PropTypes from 'prop-types';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './comicsList.scss';

const ComicsList = () => {

    const [comicList, setComicList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(1541);
    const [comicEnded, setComicEnded] = useState(false);

    const {loading, error, getAllComics} = MarvelService();

    useEffect(() => {
        onRequest(true);
    }, []);

    const onRequest = (initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true)
        getAllComics(offset)
            .then(onComicListLoaded)
    }

    const onComicListLoaded = (newComicList) => {
        let ended = false;
        if (newComicList.length < 8) {
            ended = true;
        }

        setComicList([...comicList, ...newComicList]);
        setNewItemLoading(false);
        setOffset(offset => offset + 8);
        setComicEnded(ended);
    }

    const renderItems = (arr) => {
        const items =  arr.map((item) => {

            return (
                <li 
                    className='comics__item'
                    key={item.id}
                    >
                    <Link to={`/Marvel-Api-React/comics/${item.id}`}>
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

    const items = renderItems(comicList);

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
                style={{'display': comicEnded ? 'none' : 'block'}}
                onClick={() => onRequest(false)}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

ComicsList.propTypes = {
    onComicSelected: PropTypes.func
}

export default ComicsList;