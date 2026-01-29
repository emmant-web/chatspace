import { Link } from "react-router";

function NotFoundPage(){
    return(
        <div>
            404 page not found
            <Link to="/">Home</Link>
        </div>
    )
}


export default NotFoundPage;