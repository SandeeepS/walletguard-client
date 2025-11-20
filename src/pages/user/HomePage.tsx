import React, { useState } from "react";
import MainWalletCard from "../../components/user/MainWalletCard";
import ActionCard from "../../components/user/ActionCard";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import TransactionModal from "../../components/user/TransactionModal";

const HomePage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"DEPOSIT" | "WITHDRAW">("DEPOSIT");
  const [historyOpen, setHistoryOpen] = useState(false);

  const handleDeposit = () => {
    setModalType("DEPOSIT");
    setModalOpen(true);
  };

  const handleWithdraw = () => {
    setModalType("WITHDRAW");
    setModalOpen(true);
  };

  const handleTransactionSubmit = async (amount: number) => {
    if (modalType === "DEPOSIT") {
      //   await dummyAPI.deposit(amount);
      alert(`Successfully deposited ₹${amount}`);
    } else {
      //   await dummyAPI.withdraw(amount);
      alert(`Successfully withdrawn ₹${amount}`);
    }
  };

  return (
    <>
      <div>
        <MainWalletCard />
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
            onClick={() => setHistoryOpen(true)}
          />
        </div>

        {/* Modals */}
        <TransactionModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          type={modalType}
          onSubmit={handleTransactionSubmit}
        />
        {/* <TransactionHistory
          isOpen={historyOpen}
          onClose={() => setHistoryOpen(false)}
        /> */}
      </div>
    </>
  );
};

export default HomePage;
