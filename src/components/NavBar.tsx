import { toggleDarkMode } from '../utils/toggleDarkMode'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 sticky top-0 z-[999]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
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
                    <ul className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
                        <li>
                            <a href="">Projects</a>
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
                        <li>
                            <Link to="skills">Skills</Link>
                        </li>
                        <li>
                            <a href="#journey">Journey</a>
                        </li>
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                        {/* 
                    <li>
                        <a href="#skills">Skills</a>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li>
                                    <a>Submenu 1</a>
                                </li>
                                <li>
                                    <a>Submenu 2</a>
                                </li>
                            </ul>
                        </details> 
                    </li>
                        */}
                    <li>
                            <Link to="skills">Skills</Link>
                        </li>
                        <li>
                            <a href="#journey">Journey</a>
                        </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
            </div>

            <div className="navbar-end pr-4">
                <input
                    type="checkbox"
                    className="toggle dark:border-[#00D6C1] dark:bg-[#00D6C1]"
                    onClick={() => toggleDarkMode()}
                />
                {/* <a className="btn">Button</a> */}
            </div>
        </div>
    )
}

export default NavBar
