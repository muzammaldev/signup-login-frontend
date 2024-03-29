import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

type Props = {
  btnContent: string;
  className: string;
};

const Button = ({ btnContent, className }: Props) => {
  return (
    <button
      className={`${className} flex items-center gap-3 bg-[#00e5ff] px-4 py-1 rounded-full`}
    >
      {btnContent}
      {/* <Image width={17} height={17} src={"/image/greaterThen.png"} alt={""} /> */}
      <FaArrowRight />
    </button>
  );
};

export default Button;
