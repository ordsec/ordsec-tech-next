/* eslint-disable react/jsx-no-target-blank */
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-slate-500 px-5 py-5 mb-12 flex justify-between w-full">
      <h1 className="text-md"><Link href="/">David Ordovskiy | OrdSec</Link></h1>
      <ul className="flex items-center">
        <li><Link href="/bio">Bio</Link></li>
        <li><a
          className="
                   bg-gradient-to-r
                  from-cyan-500
                  to-teal-500
                  text-white 
                  px-4 
                  py-2 
                  rounded-md 
                  ml-4
                "
          href="https://rebrand.ly/px3uw5m" target="_xyrblank">Resume</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;