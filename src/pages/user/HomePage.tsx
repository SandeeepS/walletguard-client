import React, { useEffect, useState } from "react";
import MainWalletCard from "../../components/user/MainWalletCard";
import ActionCard from "../../components/user/ActionCard";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import TransactionModal from "../../components/user/TransactionModal";
import { deposit, getBalance, withdraw } from "../../api/user";
import { useAppSelector } from "../../app/store";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const userData = useAppSelector((state) => state.auth.userData);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"DEPOSIT" | "WITHDRAW">("DEPOSIT");
  const [walletBalance, setWalletBalance] = useState<number>(0);
const navigate = useNavigate();
  const userId = userData?.id;

  const fetchBalance = async () => {
    if (!userId) return;
    try {
      const response = await getBalance(userId);
      if (
        response &&
        typeof response === "object" &&
        "data" in response &&
        response.data?.success
      ) {
        // make sure it's a number
        const serverBalance = Number(response.data.data.balance ?? 0);
        setWalletBalance(serverBalance);
      }
    } catch (err) {
      console.error("Error fetching balance", err);
    }
  };

  // initial load
  useEffect(() => {
    if (userId) fetchBalance();
  }, [userId]);

  const handleDeposit = () => {
    setModalType("DEPOSIT");
    setModalOpen(true);
  };

  const handleWithdraw = () => {
    setModalType("WITHDRAW");
    setModalOpen(true);
  };

  const handleTransactionSubmit = async (amount: number) => {
    if (!userId) {
      toast.error("User not found. Please login again.");
      return;
    }

    if (modalType === "DEPOSIT") {
      try {
        const response = await deposit(userId as string, amount);
        console.log("deposit response:", response);

        if (
          response &&
          typeof response === "object" &&
          "data" in response &&
          response.data?.success
        ) {
          setWalletBalance((prev) => Number(prev) + Number(amount));
          toast.success(`Successfully deposited ₹${amount}`);
          await fetchBalance();
        } else {
          toast.error("Failed to deposit amount");
          await fetchBalance();
        }
      } catch (error) {
        console.error("Deposit error", error);
        toast.error("Deposit failed. Please try again.");
        await fetchBalance();
      } finally {
        setModalOpen(false);
      }
    } else {
      const response = await withdraw(userId, amount);
      console.log("withdraw response is ", response);
      if (
        response &&
        typeof response === "object" &&
        "data" in response &&
        response.data?.success
      ) {
        setWalletBalance((prev) => Number(prev) + Number(amount));
        toast.success(`Successfully widthdrawed ₹${amount}`);
        await fetchBalance();
      } else {
        toast.error("Failed to withdraw amount");
        await fetchBalance();
      }
      setModalOpen(false);
    }
  };
  const handleTransactionHistory = () => {
    navigate('/history');
  }

  return (
    <>
      <div>
        <MainWalletCard balance={walletBalance} />
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <ActionCard
            title="Deposit"
            description="Add funds to your wallet"
            icon={<FaArrowDown size={28} />}
            iconBgColor="bg-green-500/20"
            iconColor="text-green-400"
            onClick={handleDeposit}
          />
          <ActionCard
            title="Withdraw"
            description="Transfer funds out"
            icon={<FaArrowUp size={28} />}
            iconBgColor="bg-red-500/20"
            iconColor="text-red-400"
            onClick={handleWithdraw}
          />
          <ActionCard
            title="Transactions"
            description="View your history"
            icon={<FaHistory size={28} />}
            iconBgColor="bg-blue-500/20"
            iconColor="text-blue-400"
            onClick={() => handleTransactionHistory()
            }
          />
        </div>

        {/* Modals */}
        <TransactionModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          type={modalType}
          onSubmit={handleTransactionSubmit}
        />
     
      </div>
    </>
  );
};

export default HomePage;
