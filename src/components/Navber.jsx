import { Link, NavLink } from "react-router";

const Navber = () => {
    return (
        <div className="navbar shadow-lg work">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li className="text-gray-500"><Link to='/'>Home</Link></li>
                        <li className="text-gray-500"><Link to='/readList'>Read List</Link></li>
                        <li className="text-gray-500"><Link to='/rating'>Pages to Read</Link></li>
                        <li className="text-gray-500"><Link to='/test'>Test</Link></li>
                    </ul>
                </div>
                <a className="text-2xl font-semibold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="text-gray-500"><NavLink to='/'>Home</NavLink></li>

                    <li className="text-gray-500"><NavLink to='/readList'>Read List</NavLink></li>

                    <li className="text-gray-500"><NavLink to='/rating'>Pages to Read</NavLink></li>
                    <li className="text-gray-500"><NavLink to='/test'>Test</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn text-white mr-4 bg-[#23BE0A]">Button</a>
                <a className="btn text-white bg-[#59C6D2]">Button</a>
            </div>
        </div>
    );
};

export default Navber;