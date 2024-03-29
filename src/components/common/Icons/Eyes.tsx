import React from "react";
import { BsEyeSlash } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";

type Props = {
  open: boolean;
};

const EyeIcon = (props: Props) => {
  return props.open ? <BsEyeSlash /> : <IoEyeSharp />;
};

export default EyeIcon;
