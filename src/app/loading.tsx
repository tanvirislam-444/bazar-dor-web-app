
const Loading = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-2">
        <div className="rounded-xl bg-[#05893E] p-3 text-2xl">
          🛒
        </div>
        <h1 className="text-2xl font-bold text-[#05893E]">
          বাজার দর
        </h1>
      </div>

      <div className="mt-6 h-10 w-10 animate-spin rounded-full border-4 border-green-100 border-t-[#05893E]" />

      <h2 className="text-lg font-semibold text-gray-800">
        লোড হচ্ছে...
      </h2>
      <p className="text-sm text-gray-500">
        সর্বশেষ বাজারদর সংগ্রহ করা হচ্ছে
      </p>
    </div>
  );
};

export default Loading;



