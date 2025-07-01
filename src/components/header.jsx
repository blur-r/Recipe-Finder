import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header>
                <div className="navbar-brand">
                    <Link to="/" className="app-name">RecipeFinder</Link>
                </div>
                <div>
                    <Link to="/favorites" className="fav-header">Favorite</Link>
                </div>
            </header>

        </>
    )
}

export default Header;