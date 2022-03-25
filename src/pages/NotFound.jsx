import { Link } from "react-router-dom";

const NotFound = () => {
    console.log("reload notfound");

    return (
        <div className="basic-container">
            <h2>Page Not Found</h2>
            <button className="btn-return">
                <Link to="/">Kembali ke Dashboard</Link>
            </button>
        </div>
    );
}

export default NotFound;