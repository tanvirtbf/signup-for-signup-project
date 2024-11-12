"use client";
import { useLoginUserMutation } from "@/lib/services/auth";
import { loginSchema } from "@/validation/schemas";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import EmailIcon from "../../../../public/FormEmailIcon.svg";
import PasswordIcon from "../../../../public/FormPasswordIcon.svg";
import Image from "next/image";

const initialValues = {
  email: "",
  password: "",
};

const Signup = () => {
  const [serverErrorMessage, setServerErrorMessage] = useState("");
  const [serverSuccessMessage, setServerSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [loginUser] = useLoginUserMutation();
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, action) => {
      setLoading(true);
      try {
        const response = await loginUser(values);
        if (response.data && response.data.status === "success") {
          setServerSuccessMessage(response.data.message);
          setServerErrorMessage("");
          action.resetForm();
          setLoading(false);
          router.push("/user/profile");
        }
        if (response.error && response.error.data.status === "failed") {
          setServerErrorMessage(response.error.data.message);
          setServerSuccessMessage("");
          setLoading(false);
        }
      } catch (error) {
        // console.log(error);
        setLoading(false);
      }
    },
  });
  const handleGoogleLogin = async () => {
    window.open(`http://localhost:8000/auth/google`, "_self");
  };

  return (
    <div className="w-full h-screen mt-12 flex items-center justify-center px-4 bg-[#1A1D26]">
      <div className="sm:w-[500px] w-full p-6 mx-auto  border-[#5E4D3F] border-[1.5px] relative rounded-sm">
        <div className="absolute -top-6 w-32 h-12  flex justify-center items-center bg-[#5E4D3F] rounded-md">
          <h2 className="text-3xl text-white text-center">Login</h2>
        </div>
        <h2 className="text-[#7C6A59] font-medium text-base my-4">
          Push Login Details
        </h2>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label
              className="text-base text-[#4B4C4C] font-medium"
              htmlFor="email"
            >
              Email
            </label>
            <div className="bg-[#4B4C4C] flex rounded-md py-1">
              <div className="flex justify-center items-center pl-4">
                <Image src={EmailIcon} alt="image" />
              </div>
              <input
                className="w-full text-white bg-[#4B4C4C] border-none border outline-none p-3 rounded-md placeholder:text-[#ffffffb7] placeholder:text-base"
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
              />
            </div>
            {errors.email && (
              <div className="text-sm text-red-500 px-2">{errors.email}</div>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="text-base text-[#4B4C4C] font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <div className="bg-[#4B4C4C] flex rounded-md py-1">
              <div className="flex justify-center items-center pl-4">
                <Image src={PasswordIcon} alt="image" />
              </div>
              <input
                className="w-full text-white bg-[#4B4C4C] border-none border outline-none p-3 rounded-md placeholder:text-[#ffffffb7] placeholder:text-base"
                type="password"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Enter Your Password"
              />
            </div>
            {errors.password && (
              <div className="text-sm text-red-500 px-2">{errors.password}</div>
            )}
          </div>
          <div className="mt-3">
            <button
              type="submit"
              className="bg-[#7C6A59] py-3 w-full rounded-lg hover:bg-[#666969] text-white text-2xl font-semibold"
            >
              Login
            </button>
          </div>
          <div className="flex justify-end gap-1 mt-2">
            <p className="text-[#4B4C4C] text-base font-medium ">
              Forgot your Password?
            </p>
            <Link
              className="text-[#7C6A59] hover:text-[#4B4C4C] text-base font-medium cursor-pointer"
              href="/account/reset-password-link"
            >
              Click
            </Link>
          </div>
        </form>
        {serverSuccessMessage && (
          <div className="text-sm text-green-500 font-semibold px-2 text-center">
            {serverSuccessMessage}
          </div>
        )}
        {serverErrorMessage && (
          <div className="text-sm text-red-500 font-semibold px-2 text-center">
            {serverErrorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;