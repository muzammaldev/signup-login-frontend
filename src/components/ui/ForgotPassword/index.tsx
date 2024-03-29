"use client";
import EyeIcon from "@/components/common/Icons/Eyes";
import { cookies } from "@/utils/cookies";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type ForgotPasswordData = {
  email: string;
};

const ForgotPassword = () => {
  const { register, handleSubmit } = useForm<ForgotPasswordData>();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onForgotPassword = (item: any) => {
    console.log(item);
    axios
      .post("http://localhost:3001/user/forgotPassword", item)
      .then((resp) => {
        if (resp.data) {
          router.push("/varifcation");
          setLoading(true);
        }
      })
      .catch((error) => {
        // toast.error(error.response.data.message);
        toast.error("User Not Found");
      });
  };

  return (
    <div>
      <section className="bg-gray-200 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Forgot Password
              </h1>
              <form
                onSubmit={handleSubmit(onForgotPassword)}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="example@gmail.com"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-black bg-[#00e5ff] focus:border  focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {loading ? "loading..." : "Next"}
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    href="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
