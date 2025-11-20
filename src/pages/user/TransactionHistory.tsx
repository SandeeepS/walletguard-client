import React, { useState } from 'react'
import { FaTimes } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";


interface TransactionHistoryProps {
  isOpen: boolean;
  onClose: () => void;
}

const TransactionHistory:React.FC<TransactionHistoryProps> = ({
    isOpen,
    onClose
}) => {
const [transactions, setTransactions] = useState<[]>([]);
  const [loading, setLoading] = useState(true);

//   React.useEffect(() => {
//     if (isOpen) {
//       loadTransactions();
//     }
//   }, [isOpen]);

//   const loadTransactions = async () => {
//     setLoading(true);
//     const data = await dummyAPI.getTransactions();
//     setTransactions(data);
//     setLoading(false);
//   };

  if (!isOpen) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-400 bg-green-500/20";
      case "pending":
        return "text-yellow-400 bg-yellow-500/20";
      case "failed":
        return "text-red-400 bg-red-500/20";
      default:
        return "text-gray-400 bg-gray-500/20";
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-linear-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl max-w-4xl w-full border border-white/20 relative max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <FaTimes size={20} />
        </button>

        {/* Header */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 border-blue-500/40 flex items-center justify-center border-2">
              <FaHistory className="text-blue-400" size={20} />
            </div>
            <div>
              <h2 className="text-white text-2xl font-bold">Transaction History</h2>
              <p className="text-gray-400 text-sm">View all your wallet transactions</p>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto p-6">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-gray-400">Loading transactions...</div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-gray-300 font-semibold text-sm">ID</th>
                    <th className="text-left py-3 px-4 text-gray-300 font-semibold text-sm">Type</th>
                    <th className="text-left py-3 px-4 text-gray-300 font-semibold text-sm">Amount</th>
                    <th className="text-left py-3 px-4 text-gray-300 font-semibold text-sm">Date</th>
                    <th className="text-left py-3 px-4 text-gray-300 font-semibold text-sm">Status</th>
                    <th className="text-left py-3 px-4 text-gray-300 font-semibold text-sm">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr
                      key={transaction.id}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="py-4 px-4 text-gray-400 text-sm">#{transaction.id}</td>
                      <td className="py-4 px-4">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${transaction.type === "deposit" ? "text-green-400 bg-green-500/20" : "text-red-400 bg-red-500/20"}`}>
                          {transaction.type === "deposit" ? (
                            <FaArrowDown size={12} />
                          ) : (
                            <FaArrowUp size={12} />
                          )}
                          {transaction.type}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-white font-semibold">
                        ₹{transaction.amount.toLocaleString()}
                      </td>
                      <td className="py-4 px-4 text-gray-400 text-sm">{transaction.date}</td>
                      <td className="py-4 px-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusColor(transaction.status)}`}>
                          {transaction.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-400 text-sm">{transaction.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10">
          <button
            onClick={onClose}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default TransactionHistory
