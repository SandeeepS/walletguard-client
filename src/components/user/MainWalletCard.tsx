import React from "react";

const MainWalletCard: React.FC = () => {
  const walletBalance = "₹12,450.00";

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        {/* Main Wallet Card */}
        <div className="mt-4 w-full h-64 md:h-96 overflow-hidden shadow-lg bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 relative flex flex-col items-center pt-8">
          {/* Background Brand Name */}
          <div className="pointer-events-none overflow-hidden">
            <div className="text-white/13 font-bold text-8xl md:text-9xl tracking-wider">
              WalletGuard
            </div>
          </div>

          {/* Bottom Section - Balance */}
          <div className="relative px-6 py-6 text-white flex flex-col items-center">
            <div className="text-sm font-medium opacity-70 mb-1">
              Current Balance
            </div>
            <div className="font-bold text-4xl md:text-5xl mb-4">
              {walletBalance}
            </div>

            <div className="flex gap-2 mt-4">
              <span className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-semibold text-white border border-white/20">
                Active
              </span>
              <span className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-semibold text-white border border-white/20">
                Secured
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainWalletCard;
