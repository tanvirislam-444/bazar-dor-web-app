const Footer = () => {
  return (
    <footer className="mx-3 sm:mx-6 md:mx-10 lg:mx-20 py-6 sm:py-8">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-3 md:gap-6">
        <p className="text-sm sm:text-base  text-gray-700">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>

        <p className="text-sm sm:text-base text-gray-700 md:text-right">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
  );
};

export default Footer;