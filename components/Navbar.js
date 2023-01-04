/* eslint-disable react/jsx-no-target-blank */
import Link from 'next/link';

import LinkButton from './LinkButton';

const Navbar = () => {
  return (
    <nav className="bg-slate-400 px-5 py-5 flex justify-between w-full">
      <h1 className="text-md font-semibold md:text-xl"><Link href="/">David Ordovskiy | OrdSec</Link></h1>
      <ul className="flex items-center">
        <li><Link href="/bio">Bio</Link></li>
          <li className="ml-4">
            <LinkButton dest="https://rebrand.ly/px3uw5m" value="Resume" newTab={true} />
          </li>
      </ul>
    </nav>
  );
};

export default Navbar;