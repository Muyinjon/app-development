import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = function () {
return (
    <>
<nav className="navbar">
    <div className="logo">
    <Link>Muyinjon</Link>
    </div>

    <div className="btngroup">
    <button>
        <Link to="/">Home</Link>
    </button>
    <button>
        <Link to="about">About</Link>
    </button>
    <button>
        <Link to="contacts">Contact</Link>
    </button>
    </div>
</nav>
<Outlet />
    </>

);
};
export default Navbar;
