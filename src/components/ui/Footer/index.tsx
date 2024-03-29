import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaTwitter } from "react-icons/fa6";

type Props = {};

const Footer = (props: Props) => {
  const Navigation = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Blogs",
      href: "",
    },
    {
      name: "About US",
      href: "",
    },
    {
      name: "Contact US",
      href: "",
    },
  ];

  return (
    <footer className="bg-[#4bcedd] shadow dark:bg-gray-900">
      <div className="w-full px-12 mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <h1 className="text-black font-bold shadow-md w-fit xs:ml-8">
            <span className="text-white">Chat</span>{" "}
            <span className="text-red-500 text-xl ">App</span>
          </h1>
          <ul className="flex xs:pl-4 xs:pt-2 gap-9 items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {Navigation.map((navi, index) => (
              <li key={index} className="text-white">
                <Link href={navi.href}>{navi.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link href={"/"} className="hover:underline">
            Chat App
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
