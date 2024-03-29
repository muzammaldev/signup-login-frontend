"use client";
import useScrollDirection from "@/hooks/useScrollDirection";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import Profile from "../Profile";
import { jwtDecode } from "jwt-decode";
import { usePathname } from "next/navigation";

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

type User = {
  email: string;
  name: string;
};

const Header = () => {
  const [navShow, setNavShow] = useState(false);
  const [profileShow, setProfileShow] = useState(false);

  const pathname = usePathname();

  return (
    <>
      <nav
        className={` bg-[#00e5ff] flex justify-between px-10 py-4 items-center xs:block xs:px-0  border-b border-[#4bcedd]`}
      >
        {/* <Image
          className="xs:w-12 xs:ml-10"
          width={70}
          height={70}
          src="/image/logo.webp"
          alt=""
        /> */}
        <h1 className="text-black font-bold shadow-md w-fit xs:ml-8">
          Chat <span className="text-red-500 text-xl ">App</span>
        </h1>
        <ul
          className={`${
            navShow ? "" : "xs:hidden"
          } flex gap-10 items-center xs:block xs:absolute xs:bg-slate-200 xs:w-full xs:top-14 xs:px-5 pr-14`}
        >
          {Navigation.map((navi, index) => (
            <>
              <li key={index} className="cursor-pointer hover:underline xs:p-6">
                <Link href={navi.href}>{navi.name}</Link>
              </li>
            </>
          ))}
        </ul>
      </nav>
      <div
        onClick={() => {
          setProfileShow(!profileShow);
        }}
        className="w-12 h-12 absolute right-8 top-1 xs:right-16 bg-gray-200 flex justify-center items-center rounded-full"
      >
        <FaUser />
      </div>
      <Image
        onClick={() => {
          // alert(22);
          setNavShow(!navShow);
        }}
        className="absolute right-6 top-4 hidden xs:block"
        width={23}
        height={23}
        src={"/image/humburger.png"}
        alt={""}
      />
      {profileShow && pathname == "/chatApp" ? <Profile /> : ""}
    </>
  );
};
export default Header;
