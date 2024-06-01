import { Badge } from "antd";
import { Link, NavLink } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import 'animate.css';



const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(false);

    useEffect(() => {

        const handleNavbarBehavior = () => {
            if (window.scrollY > 200) {
                setActive(true)
            } else {
                setActive(false)
            }
        }

        window.addEventListener('scroll', handleNavbarBehavior);

        return () => {
            return window.removeEventListener('scroll', handleNavbarBehavior)

        }

    }, [])


    const link = <>

        <li>
            <NavLink to='/' className={({ isActive }) => isActive ? 'text-pink-400' : ''}>Home</NavLink>
        </li>
        <li>
            <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'text-pink-400' : ''}>Dashboard</NavLink>
        </li>
        <li className="hidden lg:inline-block">
            <NavLink to='/notification' className={`flex ${({ isActive }) => isActive ? 'text-pink-400' : ''}`}>
                <Badge count={0} showZero size="small" color="#223dff">
                    <IoIosNotificationsOutline className="text-2xl" />
                </Badge>
            </NavLink>
        </li>
        <li>
            <NavLink to='/login' className={({ isActive }) => isActive ? 'text-pink-400' : ''}>Login</NavLink>
        </li>

    </>


    return (
        <div className={` w-full ${active ? 'fixed duration-1000 z-50 animate__animated animate__fadeInDown ' : 'duration-1000 sticky z-50 a'} `}>
            <div className=" shadow-md z-50  bg-white">

                <div className={`flex items-center justify-between z-50 ${active ? 'px-2 py-4 lg:py-2' : 'px-2 lg:px-4 py-4'}`}>
                    <Link>
                        <h1 className="font-dongle text-4xl font-bold flex">Easy <span className=" text-pink-300">Parcel</span></h1>
                    </Link>

                    <div className={`hidden lg:inline-block `}>
                        <ul className="flex items-center gap-6">
                            {link}
                        </ul>
                    </div>

                    <div className="lg:hidden flex items-center gap-6">

                        <NavLink to='/notification' className={`flex ${({ isActive }) => isActive ? 'text-pink-400' : ''}`}>
                            <Badge count={0} showZero size="small" color="#223dff">
                                <IoIosNotificationsOutline className="text-2xl" />
                            </Badge>
                        </NavLink>

                        <div className="cursor-pointer p-2  rounded-md border-2 border-pink-200" onClick={() => setOpen(!open)}>
                            {
                                open ? <TfiClose /> : <CiMenuFries />
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={`absolute w-full py-4 px-2 bg-pink-50 flex flex-col -z-10 right-0 lg:hidden ${open ? "top-16 duration-1000" : "-top-96 duration-1000"
                }`}>

                <ul className=" bg-pink-50 flex flex-col -z-10 gap-2">
                    {link}
                </ul>
            </div>
        </div>

    );
};

export default Navbar;