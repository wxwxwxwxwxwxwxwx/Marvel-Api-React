import {useState} from 'react';
import ErrorMessage from '../errorMessage/ErrorMessage';

const ErrorBoundary = (props) => {

    const [error, setError] = useState(false);

    try {
        if (error) {
            return <ErrorMessage/>
        }

        return props.children;
    } catch (e) {
        console.log(e);
        setError(true)
    }
}

export default ErrorBoundary;