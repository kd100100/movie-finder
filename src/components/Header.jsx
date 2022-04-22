/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useContext } from "react";
import Logo from "../assets/logo.png";
import { MovieContext } from "../context/MovieContext";

function Header() {
    const { state, setSearch, setSortOrder, setType, setIsAdding } = useContext(MovieContext)

    const [scroll, setScroll] = useState(false);

    // Scrolling Behaviiour
    useEffect(() => {
        window.addEventListener("scroll", function () {
            let scrollpos = window.scrollY;
            let windowWidth = window.innerWidth;
            if (scrollpos > 50 && windowWidth > 992) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        });
    });

    return (
        <header className={scroll ? "header-flex" : ""}>
            <div className="logo">
                <img src={Logo} alt="Logo" width="320" height="75" />
            </div>
            <nav className="navbar">
                <ul type="none" className="nav-list">
                    <li>
                        <button
                            className={`nav-link ${
                                state.type === "All" ? "active" : ""
                            }`}
                            onClick={() => setType("All")}
                        >
                            All
                        </button>
                    </li>
                    <li>
                        <button
                            className={`nav-link ${
                                state.type === "Reality" ? "active" : ""
                            }`}
                            onClick={() => setType("Reality")}
                        >
                            Reality
                        </button>
                    </li>
                    <li>
                        <button
                            className={`nav-link ${
                                state.type === "Scripted" ? "active" : ""
                            }`}
                            onClick={() => setType("Scripted")}
                        >
                            Scripted
                        </button>
                    </li>
                </ul>
                <div className="nav-link hamburger-icon">&#9776;</div>
                <div>
                    <input
                        type="text"
                        value={state.search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="search"
                        placeholder="Search Movies..."
                    />
                    <select
                        className="sort"
                        value={state.sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="ascending">A - Z</option>
                        <option value="descending">Z - A</option>
                    </select>
                    <button className="add-button" onClick={() => setIsAdding()}>Add Movie</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
