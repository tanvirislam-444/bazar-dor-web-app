import Image from "next/image";

const Banner = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="mx-3 sm:mx-6 md:mx-10 lg:mx-20 mt-6 sm:mt-8 lg:mt-10 bg-[#F0F5F0] rounded-2xl flex flex-col md:flex-row justify-between items-center overflow-hidden">

      <div className="w-full md:w-1/2 px-5 sm:px-8 py-6 sm:py-8">
        
        <p className="bg-[#E1F1E7] w-fit px-4 py-2 text-[#05893E] mb-5 text-center rounded-2xl text-sm">
          {date}
        </p>

        <h1 className="font-bold text-2xl w-200 sm:text-3xl lg:text-4xl pb-6">
          আজকের বাজারের দাম এক নজরে
        </h1>

        <p className="text-gray-500 lg:w-150 max-w-xl pb-5 text-sm sm:text-base leading-7">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>

        <button className="btn bg-[#05893E] text-white border-none text-xs sm:text-sm">
          সব পণ্য দেখুন
        </button>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <Image
          className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain"
          height={500}
          width={500}
          src="/bazar-hero.png"
          alt="hero-img"
        />
      </div>
    </div>
  );
};

export default Banner;