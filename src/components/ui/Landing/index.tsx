import Banner from "@/components/common/Banner";
import ChatDemo from "@/components/common/ChatDemo";
import Image from "next/image";
import React from "react";

type Props = {};

const Landing = (props: Props) => {
  return (
    <>
      <Banner />
      <ChatDemo
        heading={"This is Chat App"}
        desc={
          "A chat app is a platform that enables users to communicate with eachother in real-time via text messages. It typically allows users tosend and receive messages, emojis, files, and sometimes make voice orvideo calls. Chat apps can be used for various purposes, includin personal communication, team collaboration, customer support, and more. They are often designed to be user-friendly and offer features such as message history, notifications, and group chats."
        }
        imgSrc={"/image/chatPic.PNG"}
        className={""}
      />
      <ChatDemo
        heading={"This is Chat App"}
        desc={
          "A chat app is a platform that enables users to communicate with eachother in real-time via text messages. It typically allows users tosend and receive messages, emojis, files, and sometimes make voice orvideo calls. Chat apps can be used for various purposes, includin personal communication, team collaboration, customer support, and more. They are often designed to be user-friendly and offer features such as message history, notifications, and group chats."
        }
        imgSrc={"/image/demoSignup.PNG"}
        className={"order-2"}
      />
      <ChatDemo
        heading={"This is Chat App"}
        desc={
          "A chat app is a platform that enables users to communicate with eachother in real-time via text messages. It typically allows users tosend and receive messages, emojis, files, and sometimes make voice orvideo calls. Chat apps can be used for various purposes, includin personal communication, team collaboration, customer support, and more. They are often designed to be user-friendly and offer features such as message history, notifications, and group chats."
        }
        imgSrc={"/image/chatLogin.PNG"}
        className={""}
      />
    </>
  );
};

export default Landing;
