import Link from 'next/link';

import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillInstagram
} from "react-icons/ai";

const Social = () => {
  return (
    <div className="text-3xl flex justify-center gap-12 text-gray-700 my-4">
      <Link legacyBehavior href="https://www.linkedin.com/in/ordsec/">
        <a target="_blank">
          <AiFillLinkedin />
        </a>
      </Link>
      <Link legacyBehavior href="https://github.com/ordsec/">
        <a target="_blank">
          <AiOutlineGithub />
        </a>
      </Link>
      <Link legacyBehavior href="https://www.instagram.com/deus_ex_makina_67/">
        <a target="_blank">
          <AiFillInstagram />
        </a>
      </Link>
    </div>
  );
}

export default Social;