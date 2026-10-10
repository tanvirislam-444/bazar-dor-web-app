import Image from "next/image";
import NavLinks from "./NavLinks";
import HeaderButton from "./HeaderButton";
import Link from "next/link";

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
              <Link href={"/"} className="font-bold text-lg sm:text-xl md:text-2xl">
                বাজার দর
              </Link>

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

         <HeaderButton/>
      </div>
    </header>
  );
};

export default Header;
