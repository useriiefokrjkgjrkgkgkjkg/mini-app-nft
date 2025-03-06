'use client';

export default function Test() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-[#FF0000] text-6xl font-bold animate-pulse">
          DEPLOYMENT TEST v2
        </h1>
        <p className="text-white mt-4 text-xl">
          {new Date().toLocaleString()}
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce delay-100"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  );
} 