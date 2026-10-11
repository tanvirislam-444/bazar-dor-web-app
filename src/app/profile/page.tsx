"use client";

import { authClient } from "@/lib/auth-client";
import { FiLogOut} from "react-icons/fi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  const handleSignOut = async () => {
    const {data,error} = await authClient.signOut();
     if(data){
        toast.success("সাইন আউট সম্পন্ন হয়েছে")
        router.push("/signin");
     }

    if (error) {
      toast.error("সাইন আউট করা যায়নি আবার চেষ্টা করুন।");
      return;
    }

  };

  const handleUpdate = async(e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries()) as {name:string}
    console.log(newUserData)
    await authClient.updateUser({
        ...newUserData
    })
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-3xl">
        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            আমার প্রোফাইল
          </h1>
          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        {/* User Information */}
        <section className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-3">

            <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-green-600 text-lg font-bold text-white">
              {user?.image ? (
                <Image
                  height={20}
                  width={20}
                  src={user.image}
                  alt={user.name || "Profile"}
                  className="h-full w-full object-cover"
                />
              ) : (
                user?.name?.slice(0, 1).toUpperCase() || ""
              )}
            </div>

              <div className="min-w-0">
                <h2 className="truncate text-lg font-bold text-gray-900 sm:text-xl">
                  {user?.name}
                </h2>
                <p className="break-all text-sm text-gray-500">
                  {user?.email}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleSignOut}
              className="btn w-full border-red-200 bg-white text-red-600 hover:border-red-300 hover:bg-red-50 sm:w-auto"
            >
              <FiLogOut size={20} className="text-red-600" />
              সাইন আউট
            </button>
          </div>
        </section>

        {/* Edit Profile Card */}
        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
          <h3 className="mb-6 flex items-center gap-2 border-b border-gray-100 pb-4 text-lg font-bold text-gray-900">
            আপনার নাম আপডেট করুন
          </h3>

          <form onSubmit={handleUpdate} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                নাম
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder={user?.name}
                className="input w-full border-gray-300 bg-gray-50 focus:border-green-600 focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div className="border-t border-gray-100 pt-5 flex justify-center">
              <button
                type="submit"
                className="btn w-full border-none bg-green-600 text-white hover:bg-green-700 "
              >
                আপডেট
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default ProfilePage;