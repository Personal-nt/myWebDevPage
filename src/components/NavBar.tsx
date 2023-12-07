import { Link } from 'react-router-dom'
import DarkModeSwitcher from './DarkModeSwitcher'
import { HashLink } from 'react-router-hash-link'

const NavBar = () => {
    return (
        <div className="navbar sticky top-0 z-[999] bg-base-100 px-2">
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
                            <HashLink to="/#journey">Journey</HashLink>
                        </li>
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                        <Link to="contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">
                    NT
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
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
                        <HashLink to="/#journey">Journey</HashLink>
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
