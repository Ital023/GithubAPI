import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="gapi-header-primary">
            <div className="gapi-container">
                <Link to={"/"}>
                <h1 className="gapi-icon-primary">Github API</h1>
                </Link>
            </div>
        </header>
    );
}
