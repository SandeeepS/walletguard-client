import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ConfirmModal from "../common/ConfirmModal";
import { useAppSelector, type RootState } from "../../app/store";
import { userLogout } from "../../app/slices/authSlice";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData } = useAppSelector((state: RootState) => state.auth);
  const userName = userData?.name;

  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutConfirmed = () => {
    localStorage.removeItem("token");
    dispatch(userLogout());
    navigate("/login");
    setShowLogoutModal(false);
  };

  return (
    <header className="bg-[#121212] border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            {/* <div className="h-8 w-8 rounded-full border border-white flex items-center justify-center mr-3">
              <img src="" alt="WalletGaurd" className="h-5 w-5" />
            </div> */}
            <h1 className="text-xl font-bold text-white">WalletGuard</h1>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-4">
            <>
              <ul>
                <li
                  onClick={() => {
                    navigate("/homepage");
                  }}
                  className="cursor-pointer text-white mx-2"
                >
                  HOME
                </li>
              </ul>

              <div>
                <h5 className="text-white">Hai {userName}</h5>
              </div>
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
                >
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                    alt="Profile"
                    className="w-8 h-8 rounded-full border border-white"
                  />
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#1a1a1a] border border-gray-700 rounded-lg shadow-lg py-1 z-40">
                    <a
                      href="/myposts"
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                    >
                      Your Posts
                    </a>
                    <hr className="border-gray-700 my-1" />
                    <button
                      onClick={() => setShowLogoutModal(true)}
                      className="w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </>
          </nav>
        </div>
      </div>

      {/*Logout Confirmation Modal */}
      <ConfirmModal
        isOpen={showLogoutModal}
        title="Confirm Sign Out"
        message="Are you sure you want to sign out?"
        confirmText="Sign Out"
        cancelText="Cancel"
        onConfirm={handleLogoutConfirmed}
        onCancel={() => setShowLogoutModal(false)}
      />
    </header>
  );
};

export default Header;
