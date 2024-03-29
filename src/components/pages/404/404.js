import { Helmet } from "react-helmet";
import {Link} from 'react-router-dom';

import ErrorMessage from "../../errorMessage/ErrorMessage";

import './404.scss';

const Page404 = () => {
    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="This page is not found"
                />
                <title>This page is not found</title>
            </Helmet>
            <div className="error">
                <ErrorMessage/>
                <Link className="error__btn" to="/Marvel-Api-React/">Back to main page</Link>
            </div>
        </div>
    )
}

export default Page404;