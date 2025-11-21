import React, { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp, FaHistory } from "react-icons/fa";
import { getHistory } from "../../api/user";
import { useAppSelector } from "../../app/store";

interface Transaction {
  _id: string;
  transactionId: string;
  type: "deposit" | "withdrawal";
  amount: number;
  date: string;
  status: "completed" | "pending" | "failed";
}

const TransactionHistory: React.FC = () => {
  const userData = useAppSelector((state) => state.auth.userData);
  const userId = userData?.id;
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactionHistory = async () => {
      try {
        const response = await getHistory(userId as string);
        console.log("transaciton history", response);
        if ("data" in response && response.data.data && response.data.success) {
          setTransactions(response.data.data);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchTransactionHistory();
  }, [userId]);

  useEffect(() => {
    console.log("hiiiiiiiiiiiii", transactions);
  });

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
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header Section */}
      <div className="bg-linear-to-r from-slate-800/50 to-slate-900/50 border-b border-slate-700/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center  gap-4">
              <div>
                <h1 className="text-white text-3xl font-bold tracking-tight">
                  Transaction History
                </h1>
                <p className="text-slate-400 text-sm mt-1">
                  Track and manage all your wallet transactions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full h-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mb-4"></div>
            <div className="text-slate-400 text-lg">
              Loading transactions...
            </div>
          </div>
        ) : transactions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-20 h-20 rounded-full bg-slate-700/50 flex items-center justify-center mb-4">
              <FaHistory className="text-slate-500" size={32} />
            </div>
            <h3 className="text-slate-300 text-xl font-semibold mb-2">
              No Transactions Yet
            </h3>
            <p className="text-slate-500 text-sm">
              Your transaction history will appear here
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700/50 bg-slate-800/50">
                  <th className="text-left py-4 px-6 text-slate-300 font-semibold text-sm uppercase tracking-wider">
                    Transaction ID
                  </th>
                  <th className="text-left py-4 px-6 text-slate-300 font-semibold text-sm uppercase tracking-wider">
                    Type
                  </th>
                  <th className="text-left py-4 px-6 text-slate-300 font-semibold text-sm uppercase tracking-wider">
                    Amount
                  </th>
                  {/* <th className="text-left py-4 px-6 text-slate-300 font-semibold text-sm uppercase tracking-wider">
                    Date
                  </th> */}
                  <th className="text-left py-4 px-6 text-slate-300 font-semibold text-sm uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr
                    key={transaction._id}
                    className="border-b border-slate-700/30 hover:bg-slate-700/20 transition-all duration-200"
                  >
                    <td className="py-5 px-6 text-slate-400 text-sm font-mono">
                      #{transaction.transactionId}
                    </td>
                    <td className="py-5 px-6">
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold ${
                          transaction.type === "deposit"
                            ? "text-emerald-400 bg-emerald-500/20 border border-emerald-500/30"
                            : "text-rose-400 bg-rose-500/20 border border-rose-500/30"
                        }`}
                      >
                        {transaction.type === "deposit" ? (
                          <FaArrowDown size={12} />
                        ) : (
                          <FaArrowUp size={12} />
                        )}
                        <span className="capitalize">{transaction.type}</span>
                      </span>
                    </td>
                    <td className="py-5 px-6 text-white font-bold text-base">
                      ₹{(transaction.amount/100).toLocaleString()}
                    </td>
                    {/* <td className="py-5 px-6 text-slate-400 text-sm">
                      {transaction.date}
                    </td> */}
                    <td className="py-5 px-6">
                      <span
                        className={`inline-block px-3 py-1.5 rounded-lg text-xs font-bold capitalize border ${getStatusColor(
                          transaction.status
                        )}`}
                      >
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>      
    </div>
  );
};

export default TransactionHistory;
