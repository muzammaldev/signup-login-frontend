"use client";
import { Footer, Header } from "@/components/ui";
import UserProfiles from "@/components/ui/UserProfiles";
import { usePathname } from "next/navigation";
import React from "react";
import { ToastContainer } from "react-toastify";

type Props = {
  children: React.ReactNode;
};

const MainLayout = (props: Props) => {
  const { children } = props;
  const pathname = usePathname();

  return (
    <div>
      <div className="flex w-full bg-gray-200">
        <UserProfiles />
        <main
          className={`w-full p-2 ${pathname == "/chatApp" ? "h-[94vh] " : ""}`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
