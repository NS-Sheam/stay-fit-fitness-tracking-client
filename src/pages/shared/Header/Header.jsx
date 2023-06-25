import { FaHome } from 'react-icons/fa';
import { AiFillDatabase } from 'react-icons/ai';
import { BiLogInCircle, BiLogOutCircle } from 'react-icons/bi';
import { CgCommunity, CgProfile } from 'react-icons/cg';
import { FcAbout } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Header = () => {
    const user = "slkfj";
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            console.log(scrollPosition);

            if (scrollPosition > 0) {
                setIsHeaderFixed(true);
            } else {
                setIsHeaderFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // console.log(isHeaderFixed);
    const profileSide =
        <>
            {
                user ?
                    <>
                        <li><Link><BiLogOutCircle /> <span className={`${isHeaderFixed ? "hidden" : "hidden md:block"}`}>Logout</span></Link></li>
                        <li><Link><CgProfile /> <span className={`${isHeaderFixed ? "hidden" : "hidden md:block"}`}>Profile</span></Link></li>
                    </>
                    :
                    <li><Link><BiLogInCircle /> <span className={`${isHeaderFixed ? "hidden" : "hidden md:block"}`}>Login</span></Link></li>
            }
        </>
    const listItem =
        <>
            <li><Link><FaHome /> <span className={`${isHeaderFixed ? "hidden" : "hidden md:block"}`}>Home</span></Link></li>
            <li><Link><AiFillDatabase /> <span className={`${isHeaderFixed ? "hidden" : "hidden md:block"}`}>Dashboard</span></Link></li>
            <li><Link><CgCommunity /> <span className={`${isHeaderFixed ? "hidden" : "hidden md:block"}`}>Community</span></Link></li>
            <li><Link><FcAbout /> <span className={`${isHeaderFixed ? "hidden" : "hidden md:block"}`}>About</span></Link></li>
            {profileSide}
        </>

    return (
        <div className='xl:mx-20 md:mx-10 mx-4 sm:mx-2'>
            <div className={`flex py-2 bg-gradient-to-r from-band-primary to-band-ternery ${isHeaderFixed ? "absolute left-4 top-1/2 rounded-2xl" : "xl:px-4 px-2 sm:px-1 rounded-b-2xl"}`}>
                <div className="navbar-start text-black">
                    <a className={`btn btn-ghost normal-case text-sm md:text-xl lg:text-2xl text-white font-bold ${isHeaderFixed && "hidden"}`}>stay fit</a>
                </div>
                <div className="navbar-center flex text-white">
                    <ul className={`menu menu-horizontal lg:text-xl ${isHeaderFixed && "flex-col p-0 gap-4"}`}>
                        {listItem}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;