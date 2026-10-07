import Image from "next/image";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <div className="flex justify-between mx-20 items-center ">
      <div className="flex items-center">
        <div className="mr-2">
          <Image
            className="bg-[#05893E] w-10 h-10 rounded-sm"
            height={50}
            width={50}
            src={"/logo-icon.png"}
            alt="logo"
          />
        </div>
        <div>
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-lg">
            বাজার দর
          </h1>

          <p className="text-xs sm:text-sm md:text-base lg:text-sm">{date}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="btn bg-white border-none">সাইন ইন</button>
        <button className="btn bg-[#05893E] text-white">সাইন আপ</button>
      </div>
    </div>
  );
};

export default Header;
