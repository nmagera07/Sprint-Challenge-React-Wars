import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return(
        <div className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/characters">Star Wars API</Link>
            <Link to="/dogAPI">Dog API</Link>

            <h2>Welcome to APIs!</h2>
        </div>
    )
}

export default Nav