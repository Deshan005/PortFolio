import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      label: "LinkedIn",
      icon: <FaLinkedin size={22} />,
      href: "https://www.linkedin.com/in/deshan-wijethunga/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      label: "GitHub",
      icon: <FaGithub size={22} />,
      href: "https://github.com/deshan005",
    },
    {
      id: 3,
      label: "Mail",
      icon: <HiOutlineMail size={22} />,
      href: "mailto:deshanw77@gmail.com",
    },
    {
      id: 4,
      label: "Resume",
      icon: <BsFillPersonLinesFill size={22} />,
      href: "Deshan_CV.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col top-[30%] left-0 fixed z-50">
        <ul>
          {links.map(({ id, label, icon, href, style, download }) => (
            <li
              key={id}
              className={
                `flex justify-between items-center w-40 h-14 px-4 ml-[-100px] 
                hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 text-white` +
                ` ${style}`
              }
            >
              <a
                href={href}
                className="flex justify-between items-center w-full"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {label} {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="lg:hidden fixed bottom-4 inset-x-0 px-4 z-50">
        <div className="flex justify-around bg-gray-800 text-white rounded-xl shadow-md py-2">
          {links.map(({ id, icon, href, download }) => (
            <a
              key={id}
              href={href}
              className="flex flex-col items-center text-xs"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default SocialLinks;
