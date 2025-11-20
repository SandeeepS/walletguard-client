import React from "react";

const MainWalletCard: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div
          className="mt-4  w-full h-64 md:h-96  overflow-hidden shadow-lg bg-cover bg-center relative flex flex-col justify-end"
          style={{
            backgroundImage:
              "url('../../../public/images/cardBackground2.jpg')",
          }}
        >
          {/* DARK OVERLAY FOR BETTER TEXT VISIBILITY */}
          <div className="absolute inset-0 bg-[#121212]"></div>

          {/* CONTENT ON TOP OF THE IMAGE */}
          <div className="relative px-6 py-4 text-white">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          </div>

          <div className="relative px-6 pt-2 pb-4">
            <span className="inline-block bg-white/70 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-white/70 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-white/70 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainWalletCard;
