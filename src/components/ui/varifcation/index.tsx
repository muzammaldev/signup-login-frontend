"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import OTPInput from "react-otp-input";

const VerifyCode = () => {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const onVerify = () => {
    setLoading(true);
    axios
      .post("http://localhost:3001/user/forgotPassVerifyCode", {
        varifcationCode: otp,
      })
      .then((resp) => {
        if (resp.data) {
          router.push("/login");
          toast.success("Verification Success");
        }
      })
      .catch((error) => {
        toast.error("User Not Found");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <section className="bg-gray-200 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Verification
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
                  containerStyle="flex justify-center"
                  inputStyle="mx-2 w-18 h-13 text-center text-4xl border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />

                <button
                  onClick={onVerify}
                  type="button"
                  className="w-full text-black bg-[#00e5ff] focus:border focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {loading ? "Loading..." : "Next"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VerifyCode;
