"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
const SignUpPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signUp.email({
      ...user,
    });

    if (data) {
      toast.success("সফলভাবে সাইন আপ হয়েছে");
      redirect("/");
    }
    if (error) {
      toast.error("সাইন আপ ব্যর্থ হয়েছে অনুগ্রহ করে আবার চেষ্টা করুন");
    }
  };

  const handleGoogleSignIn = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
    });
    if (data) {
      toast.success("সফলভাবে সাইন ইন হয়েছে");
    }
    if (error) {
      toast.error("সাইন ইন ব্যর্থ হয়েছে অনুগ্রহ করে আবার চেষ্টা করুন");
    }
  };

  const handleGithubSignIn = async () => {
    const {data,error} = await authClient.signIn.social({
      provider: "github",
    });
       if (data) {
      toast.success("সফলভাবে সাইন ইন হয়েছে");
    }
    if (error) {
      toast.error("সাইন ইন ব্যর্থ হয়েছে অনুগ্রহ করে আবার চেষ্টা করুন");
    }

  };

  return (
    <div className="flex flex-col mt-10 px-4 mb-10">
      <div>
        <h1 className="text-2xl font-bold text-center mb-2">
          অ্যাকাউন্ট তৈরি করুন
        </h1>

        <p className="text-center text-base-content/70 mb-4">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>
      <div className="flex justify-center">
        <form onSubmit={onSubmit} className="w-full max-w-lg">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-2xl border p-5 sm:p-8 md:p-10">
            {/* Name */}
            <label className="font-semibold">নাম</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="আপনার নাম লিখুন "
              required
            />

            {/* Email */}
            <label className="font-semibold mt-3">ইমেইল</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="আপনার ইমেইল লিখুন "
              required
            />

            {/* Password */}
            <label className="font-semibold mt-3">পাসওয়ার্ড</label>
            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="পাসওয়ার্ড লিখুন"
              minLength={8}
              required
            />

            {/* Confirm Password */}
            <label className="font-semibold mt-3">
              পাসওয়ার্ড নিশ্চিত করুন
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="input w-full"
              placeholder="পাসওয়ার্ড আবার লিখে নিশ্চিত করুন"
              minLength={8}
              required
            />

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-neutral mt-6 w-full bg-green-600 text-white"
            >
              অ্যাকাউন্ট তৈরি করুন
            </button>

            <div className="divider">অথবা</div>

            {/* Google */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleGoogleSignIn}
                type="button"
                className="btn w-full min-w-0 gap-2 px-2 text-xs sm:text-sm whitespace-nowrap"
              >
                <FcGoogle size={20} className="shrink-0" />
                <span>Google দিয়ে চালিয়ে যান</span>
              </button>

              <button
                onClick={handleGithubSignIn}
                type="button"
                className="btn w-full min-w-0 gap-2 px-2 text-xs sm:text-sm whitespace-nowrap"
              >
                <FaGithub size={20} className="shrink-0" />
                <span>GitHub দিয়ে চালিয়ে যান</span>
              </button>
            </div>
            {/* Sign In */}
            <p className="text-center text-sm mt-6">
              অ্যাকাউন্ট আছে?{" "}
              <Link
                href="/signin"
                className="text-green-600 font-semibold no-underline hover:text-green-700"
              >
                সাইন ইন করুন
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
