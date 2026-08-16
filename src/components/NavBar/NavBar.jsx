import "./NavBar.css";



const NavBar = () => {
    return (
        <nav className="navbar">
            <div>
                <h1>RedditClient</h1>
            </div>
            <div className="search-bar">
                <input
                  type="search"
                  placeholder="search me"
                />
                <button>Search</button>
            </div>
            <div className="nav-buttons">
                <button>Log in</button>
                <button>Sign up</button>
            </div>
        </nav>        
    );

}

export default NavBar