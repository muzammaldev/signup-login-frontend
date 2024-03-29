import ChatApp from "@/components/ui/ChatApp";
import MainLayout from "@/mainLyout/page";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <MainLayout>
      <ChatApp />
    </MainLayout>
  );
};

export default Page;
