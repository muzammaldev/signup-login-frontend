import React from "react";
import { Button } from "..";
import Image from "next/image";
import { url } from "inspector";
import Link from "next/link";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div
      style={{
        backgroundImage: "url('/image/bannerImg.webp')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="flex px-12 py-20 bg-[#00e5ff] justify-between items-center "
    >
      <div className="lg:w-1/2">
        <h1 className="font-bold text-2xl text-[#00e5ff] shadow-sm w-fit">
          Welcome to Your Chat App!
        </h1>
        <p className="py-3 text-white">
          This is a chat app where you can communicate with others in
          real-time.To get started, simply select a chat room or start a new
          conversation.
        </p>
        <Link href={"/signup"}>
          <Button
            btnContent={"Go to Chat"}
            className={
              "text-white font-bold hover:bg-red-700 transition duration-300  "
            }
          />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
