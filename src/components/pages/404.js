import { Helmet } from "react-helmet";
import {Link} from 'react-router-dom';

import ErrorMessage from "../errorMessage/ErrorMessage";

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
            <div>
                <ErrorMessage/>
                <Link to="/">Back to main page</Link>
            </div>
        </div>
    )
}

export default Page404;