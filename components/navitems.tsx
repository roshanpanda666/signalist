"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NavItems = () => {
  const [open, setOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const navLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/search", label: "Search" },
    { href: "/watchlist", label: "Watchlist" },
  ];

  return (
    <nav className="flex items-center justify-between p-4 -mt-3 text-white">

      {/* DESKTOP NAV */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map(({ href, label }) => (
          <Link key={href} href={href} className="hover:text-blue-400 transition">
            {label}
          </Link>
        ))}

        {/* User avatar */}
        <div className="relative">
          <div
            className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 cursor-pointer flex items-center justify-center"
            onClick={() => setUserOpen(!userOpen)}
          >
            <span className="text-xs font-semibold">U</span>
          </div>

          <AnimatePresence>
            {userOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
                className="absolute right-0 mt-3 w-40 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-xl"
              >
                <Link href="/profile" className="block px-4 py-3 hover:bg-white/10">
                  Profile
                </Link>
                <Link href="/settings" className="block px-4 py-3 hover:bg-white/10">
                  Settings
                </Link>
                <button className="w-full text-left px-4 py-3 text-red-400 hover:bg-red-600 hover:text-white transition">
                  Logout
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button className="md:hidden" onClick={() => setOpen(true)}>
        <Menu size={26} />
      </button>

      {/* MOBILE POP-UP MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* SOLID BACKGROUND */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black z-40 "
            />

            {/* POP-UP BOX */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              w-72 bg-[#111] border mt-48 border-white/10 rounded-2xl p-6 z-50 flex flex-col gap-6 shadow-2xl"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Menu</h2>
                <button onClick={() => setOpen(false)}>
                  <X size={26} />
                </button>
              </div>

              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-lg hover:text-blue-400 transition"
                >
                  {label}
                </Link>
              ))}

              <div className="border-t border-white/20 pt-4">
                <p className="text-sm text-gray-300 mb-3">User</p>

                <Link href="/profile" onClick={() => setOpen(false)} className="block px-1 py-2 hover:text-blue-400 transition">
                  Profile
                </Link>
                <Link href="/settings" onClick={() => setOpen(false)} className="block px-1 py-2 hover:text-blue-400 transition">
                  Settings
                </Link>
                <button className="mt-2 w-full text-left px-1 py-2 text-red-400 hover:text-red-200 transition">
                  Logout
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default NavItems;
