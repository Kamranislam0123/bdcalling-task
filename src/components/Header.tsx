"use client";

import { Search, ShoppingBag, User, Heart } from "lucide-react"; // Added Heart for wishlist
import Image from "next/image";
import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#F5F3FF]">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo Section */}
        <a href="/" className="flex items-center space-x-2">
          <Image
            src="/Discount me-01-01 1.png"
            alt="Logo"
            width={161}
            height={40}
            objectFit="contain"
            className="w-[161px] h-[40px]"
            priority={true}
          />
        </a>

        {/* Search Form */}
        <form className="hidden md:flex items-center bg-white border rounded-3xl overflow-hidden w-full max-w-md mx-4">
          <div className="flex items-center px-3">
            <Search className="w-5 h-5 text-gray-500" />
          </div>
          <input
            type="search"
            placeholder="Search products..."
            className="px-2 py-2 flex-1 outline-none"
          />
        </form>

        {/* Navigation Section for Desktop */}
        <nav className="hidden md:flex gap-6 justify-center items-center text-black">
          <a href="/" className="text-base font-bold text-black">
            All Category
          </a>
          <a href="/shop" className="text-base font-bold">
            About Us
          </a>
          <a href="/deals" className="text-base font-bold">
            Contact Us
          </a>
        </nav>

        {/* Icons Section */}
        <div className="flex items-center gap-4">
          <button className="p-2">
            <span className="sr-only">Wishlist</span>
            <Heart className="w-6 h-6" />
          </button>
          <button className="p-2">
            <span className="sr-only">Shopping Cart</span>
            <ShoppingBag className="w-6 h-6" />
          </button>
          <button className="p-2">
            <span className="sr-only">User Account</span>
            <User className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#F5F3FF] w-full py-4 px-6 space-y-4">
          <nav className="flex flex-col items-center">
            <a href="/" className="text-lg font-bold text-[#581FC1]">
              Home
            </a>
            <a href="/shop" className="text-lg font-bold">
              Shop
            </a>
            <a href="/deals" className="text-lg font-bold">
              Deals
            </a>
            <a href="/whats-new" className="text-lg font-bold">
              What's New
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
