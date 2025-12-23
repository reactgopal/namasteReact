import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [mobileOpen, setMobileOpen] = useState(false);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {}, [btnNameReact]);

  return (
    <header className="bg-orange-400 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={LOGO_URL} alt="logo" className="w-20 md:w-20 rounded-md" />
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-xl font-semibold">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/grocery" className="hover:underline">
            Grocery
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
              <span
                className="w-2 h-2 rounded-full inline-block"
                style={{ background: onlineStatus ? "#34D399" : "#EF4444" }}
              ></span>
              <span className="text-sm">
                {onlineStatus ? "Online" : "Offline"}
              </span>
            </div>

            <button
              onClick={() =>
                setBtnNameReact(btnNameReact === "Login" ? "logout" : "Login")
              }
              className="bg-white text-pink-600 font-medium px-3 py-1 rounded-md hover:opacity-95"
            >
              {btnNameReact}
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-md bg-white/20"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white/10 px-4 pb-4">
          <nav className="flex flex-col gap-2">
            <Link to="/" onClick={() => setMobileOpen(false)} className="py-2">
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileOpen(false)}
              className="py-2"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="py-2"
            >
              Contact
            </Link>
            <Link
              to="/grocery"
              onClick={() => setMobileOpen(false)}
              className="py-2"
            >
              Grocery
            </Link>

            <div className="flex items-center gap-2 pt-2">
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <span
                  className="w-2 h-2 rounded-full inline-block"
                  style={{ background: onlineStatus ? "#34D399" : "#EF4444" }}
                ></span>
                <span className="text-sm">
                  {onlineStatus ? "Online" : "Offline"}
                </span>
              </div>
              <button
                onClick={() =>
                  setBtnNameReact(btnNameReact === "Login" ? "logout" : "Login")
                }
                className="bg-white text-pink-600 px-3 py-1 rounded-md"
              >
                {btnNameReact}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
