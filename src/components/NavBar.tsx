import { Link } from 'react-router-dom'
import DarkModeSwitcher from './DarkModeSwitcher'
import { HashLink } from 'react-router-hash-link'
import { useState } from 'react';

const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(true);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
        setTimeout(() => {
            setDropdownOpen(true);
        }, 100);
    };

    return (
        // <div className="navbar sticky top-0 z-[999] custom-text-bg px-2 h-[50px]">
          <div className="navbar text-black sticky top-0 z-[999] custom-text-bg bg-slate-200/70 dark:bg-slate-700/70 px-2 h-[50px] border border-[rgba(255,255,255,0.125)] backdrop-blur-[16px] backdrop-saturate-[180%]">
            <div className="navbar-start ">
            {/* <div className="scroll-watcher"></div> */}
                <div className="dropdown ">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                        id="dropdown-content"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className={`${dropdownOpen ? 'block' : 'hidden'} menu custom-text-bg dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box p-2 shadow only-txt dark:textColorDark`}
                    >
                        <li onClick={toggleDropdown}>
                            {/* <a href="/projects">TEST</a> */}
                            <Link to="projects">Projects</Link>
                        </li>
                        {/* <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li>
                                    <a>Submenu 1</a>
                                </li>
                                <li>
                                    <a>Submenu 2</a>
                                </li>
                            </ul>
                        </li> */}
                        <li onClick={toggleDropdown}>
                            <Link to="skills">Skills</Link>
                        </li >
                        <li onClick={toggleDropdown}>
                            <HashLink to="/journey">About me</HashLink>
                        </li>
                        <li onClick={toggleDropdown}>
                            <a>About</a>
                        </li>
                        <li onClick={toggleDropdown}>
                            <Link to="contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">
                    <img src="/images/nt-logo.png" alt="logo" className="h-8 w-8" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    <li>
                        {/* <details> */}
                        {/* <summary className=""> */}
                        <Link to="projects">Projects</Link>
                        {/* </summary> */}
                        {/* <ul className="bg-[#001412] p-2 text-slate-200 dark:bg-slate-200 dark:text-slate-800/60">
                                <li className="w-[115px] ">
                                    <Link to="/#topProjects">Top Projects</Link>
                                </li>
                            </ul> */}
                        {/* </details> */}
                    </li>

                    <li>
                        <Link to="skills">Skills</Link>
                    </li>
                    <li>
                        <HashLink to="/journey">About me</HashLink>
                    </li>
                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
                </ul>
            </div>

            <div className="navbar-end pr-4">
                <DarkModeSwitcher />
            </div>
        </div>
    )
}

export default NavBar
