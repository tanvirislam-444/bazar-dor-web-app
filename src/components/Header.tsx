import Image from "next/image";
import NavLinks from "./NavLinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="mx-3 mt-3 sm:mx-6 md:mx-10 lg:mx-20">
      <div className="flex justify-between items-start gap-2">

        {/* Left section */}
        <div className="min-w-0 flex-1">

          {/* Logo + Title + Date */}
          <div className="flex items-center">
            <div className="mr-2 shrink-0">
              <Image
                className="bg-[#05893E] w-10 h-10 rounded-sm"
                height={500}
                width={500}
                src="/logo-icon.png"
                alt="logo"
              />
            </div>

            <div className="min-w-0">
              <h1 className="font-bold text-lg sm:text-xl md:text-2xl">
                বাজার দর
              </h1>

              <p className=" text-xs sm:text-sm md:text-base truncate">
                {date}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 overflow-x-auto">
            <NavLinks />
          </div>
        </div>

        {/* Right section */}
        <div className="flex gap-1 shrink-0">
          <button className="btn bg-white border-none text-xs sm:text-sm">
            সাইন ইন
          </button>

          <button className="btn bg-[#05893E] text-white border-none text-xs sm:text-sm">
            সাইন আপ
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
