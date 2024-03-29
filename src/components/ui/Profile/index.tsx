import { cookies } from "@/utils/cookies";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

type User = {
  email: string;
  name: string;
};

const Profile = () => {
  const [user, setUser] = useState<User>();
  const router = useRouter();

  const onLogout = () => {
    cookies.remove("token");
    router.push("/login");
    toast.info("Logged out successfully");
  };

  useEffect(() => {
    const myToken: any = localStorage.getItem("myUser");
    const decoded: any = jwtDecode(myToken);
    console.log(decoded, "decoded");
    setUser(decoded);
  }, []);
  return (
    // <div className={` w-60 h-60 absolute right-2 top-16 p-3 bg-[#00e5ff] z-10`}>
    //   <div className="flex items-center gap-3 mb-4">
    //     <div className="w-14 h-14 bg-gray-200 flex justify-center items-center rounded-full">
    //       <FaUser />
    //     </div>
    //     <h3 className="truncate font-bold">{user?.name}</h3>
    //   </div>
    //   <div>
    //     <span className="font-bold">Name :</span>
    //     <br />
    //     <span>{user?.name}</span>
    //     <br />
    //     <span className="font-bold">Email :</span>
    //     <br />
    //     <span>{user?.email}</span>
    //   </div>
    //   <button
    //     onClick={onLogout}
    //     className="px-5 py-2 bg-black text-white text-xs mt-3 hover:bg-red-500 transition-all duration-300 rounded-full"
    //   >
    //     Log Out
    //   </button>
    // </div>
    <div className="max-w-sm mx-auto bg-white px-10 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg absolute right-2 mt-2 z-10">
      <div className="border-b px-4 pb-6 ">
        <div className="text-center my-4 ">
          <img
            className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
            src="https://randomuser.me/api/portraits/women/21.jpg"
            alt=""
          />
          <div className="py-2">
            <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">
              {user?.name}
            </h3>
            <div className="inline-flex text-gray-700 dark:text-gray-300 items-center ">
              <svg
                className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
              >
                <path
                  className=""
                  d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                />
              </svg>
              Pakistan ,Lahore
            </div>
          </div>
        </div>
        <div className="flex gap-2 px-2">
          <button
            onClick={onLogout}
            className="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
