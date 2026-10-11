
import Link from "next/link";
import { FaHome, FaArrowRight } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { GiCarrot, GiTomato, GiBroccoli } from "react-icons/gi";

const NotFound = () => {
  return (
    <main className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-linear-to-br from-[#F7FAF7] via-white to-[#E8F5E9] px-4 py-16">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-green-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-lime-100/60 blur-3xl" />

      <GiCarrot className="float-slow absolute left-[10%] top-[15%] rotate-[-25deg] text-4xl text-orange-400/50 sm:text-6xl" />
      <GiTomato className="float-delay absolute right-[12%] top-[20%] rotate-12 text-4xl text-red-400/50 sm:text-6xl" />
      <GiBroccoli className="float-slow absolute bottom-[15%] left-[15%] text-4xl text-green-500/40 sm:text-6xl" />

      {/* Main card */}
      <section className="not-found-enter relative w-full max-w-3xl rounded-4xl border border-white/80 bg-white/80 p-7 text-center shadow-[0_20px_80px_rgba(5,137,62,0.10)] backdrop-blur-xl sm:p-12 md:p-16">
        {/* Icon */}
        <div className="icon-bounce mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-[#05893E] shadow-sm sm:h-20 sm:w-20">
          <MdErrorOutline size={44} />
        </div>

        {/* Animated 404 */}
        <div className="relative mt-5">
          <h1 className="error-text select-none text-8xl font-black leading-none tracking-tighter sm:text-[10rem]">
            404
          </h1>
          <span className="absolute -right-1 top-0 animate-ping text-2xl text-green-500 sm:right-[20%]">
            ✦
          </span>
        </div>

        {/* Bengali message */}
        <h2 className="mt-6 text-2xl font-extrabold leading-relaxed text-gray-800 sm:text-3xl">
          ওহ! পেজটি কোথায় হারিয়ে গেল?
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
          আপনি যে পেজটি খুঁজছেন, সেটি হয়তো সরিয়ে ফেলা হয়েছে,
          ঠিকানাটি ভুল হয়েছে অথবা পেজটি আর উপলব্ধ নেই।
          চলুন, আবার বাজার দর-এর হোম পেজে ফিরে যাই!
        </p>

        {/* Action */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="home-button group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#05893E] px-7 py-4 font-bold text-white shadow-lg shadow-green-700/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#046D32] hover:shadow-xl hover:shadow-green-700/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#05893E]"
          >
            <FaHome size={19} />
            <span>হোম পেজে ফিরে যান</span>
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Bottom branding */}
        <div className="mt-10 border-t border-green-100 pt-6">
          <div className="flex items-center justify-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 text-sm">
              🥬
            </span>
            <span className="text-lg font-extrabold tracking-tight text-[#05893E]">
              বাজার দর
            </span>
          </div>
          <p className="mt-2 text-xs text-gray-400 sm:text-sm">
            স্মার্ট বাজার, সহজ জীবন
          </p>
        </div>
      </section>
    </main>
  );
};

export default NotFound;