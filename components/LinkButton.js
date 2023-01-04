/* eslint-disable react/jsx-no-target-blank */
import Link from 'next/link';

const LinkButton = ({ dest, value, newTab }) => {
  return (
    <Link className="
                  bg-gradient-to-r
                from-cyan-500
                to-teal-500
                text-white 
                px-4 
                py-2 
                rounded-md 
              "
      href={dest} target={ newTab ? "_blank" : ""}>{value}</Link>
  );
}

export default LinkButton;