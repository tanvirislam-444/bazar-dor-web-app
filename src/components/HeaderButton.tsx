
"use client";

import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { FiLogOut } from "react-icons/fi";
import toast from "react-hot-toast";

const HeaderButton = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = async () => {
    const { data,error } = await authClient.signOut();
    if (data){
      toast.success('সাইন আউট সফল হয়েছে ')
    }
    if (!error) {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      {user ? (
        <div>
          {/* Profile Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 rounded-full p-2 hover:bg-gray-100"
          >
            {/* User Initial */}
            <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-green-600 text-lg font-bold text-white">
              {user.name?.slice(0, 1).toUpperCase() ||""}
            </div>

            {/* User Name */}
            <span className="hidden font-medium text-gray-800 sm:block">
              {user.name}
            </span>

            {/* Dropdown Arrow */}
            <span className="text-gray-500">▼</span>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 top-full z-50 mt-2 w-72 max-w-[calc(100vw-2rem)] rounded-xl border border-gray-200 bg-white p-2 shadow-xl">
              {/* User Information */}
              <div className="border-b border-gray-200 px-3 py-3">
                <p className="font-semibold text-gray-900">
                  {user.name}
                </p>

                <p className="mt-1 break-all text-sm text-gray-500">
                  {user.email}
                </p>
              </div>

              {/* My Profile */}
              <Link
                href="/profile"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left hover:bg-gray-100"
              >
                <span>👤</span>
                <span>আমার প্রোফাইল</span>
              </Link>

              {/* Sign Out */}
              <button
                type="button"
                onClick={handleSignOut}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-red-600 hover:bg-red-50"
              >
                 <FiLogOut size={20} className="text-red-600" />
                <span>সাইন আউট</span>
              </button>
            </div>
          )}
        </div>
      ) : (
        /* User is not logged in */
        <div className="flex shrink-0 gap-1 sm:gap-2">
          <Link
            href="/signin"
            className="btn border-none bg-white text-xs sm:text-sm"
          >
            সাইন ইন
          </Link>

          <Link
            href="/signup"
            className="btn border-none bg-[#05893E] text-xs text-white sm:text-sm"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default HeaderButton;

