import React, { useState } from 'react'
import { FaTimes } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";


interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "DEPOSIT" | "WITHDRAW";
  onSubmit: (amount: number) => void;
}


const TransactionModal : React.FC <TransactionModalProps>=  ({
  isOpen,
  onClose,
  type,
  onSubmit
}) => {
 const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const numAmount = parseFloat(amount);
    
    if (numAmount && numAmount > 0) {
      setLoading(true);
      await onSubmit(numAmount);
      setLoading(false);
      setAmount("");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-linear-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl max-w-md w-full border border-white/20 relative">
        {/*close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <FaTimes size={20} />
        </button>

        {/* header  */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-full ${type === "DEPOSIT" ? "bg-green-500/20 border-green-500/40" : "bg-red-500/20 border-red-500/40"} flex items-center justify-center border-2`}>
              {type === "DEPOSIT" ? (
                <FaArrowDown className="text-green-400" size={20} />
              ) : (
                <FaArrowUp className="text-red-400" size={20} />
              )}
            </div>
            <div>
              <h2 className="text-white text-2xl font-bold capitalize">{type}</h2>
              <p className="text-gray-400 text-sm">
                {type === "DEPOSIT" ? "Add funds to your wallet" : "Withdraw funds from your wallet"}
              </p>
            </div>
          </div>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-semibold mb-2">
              Amount (₹)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full bg-gray-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
              required
              min="1"
              step="0.01"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`flex-1 ${type === "DEPOSIT" ? "bg-green-600 hover:bg-green-500" : "bg-red-600 hover:bg-red-500"} text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {loading ? "Processing..." : `${type === "DEPOSIT" ? "Deposit" : "Withdraw"}`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TransactionModal
