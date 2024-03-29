import Image from "next/image";
import React from "react";

type Props = {
  heading: string;
  desc: string;
  imgSrc: string;
  className: string;
};

const ChatDemo = ({ heading, desc, imgSrc, className }: Props) => {
  return (
    <div className="lg:flex gap-5 px-12 items-center py-7 ">
      <div className={`lg:w-1/2 ${className} `}>
        <h1 className="font-bold text-2xl">{heading}</h1>
        <p className="py-5">{desc}</p>
      </div>

      <Image
        className="lg:w-1/2 w-full"
        src={imgSrc}
        alt=""
        width={600}
        height={600}
      />
    </div>
  );
};

export default ChatDemo;
