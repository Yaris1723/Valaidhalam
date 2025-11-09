"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

const Navbar = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact", link: "/contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      {/* ✅ Added custom height here */}
      <ResizableNavbar className="h-15 sm:h-18 px-6 bg-white/90 backdrop-blur-md shadow-sm">
        {/* Desktop Navbar */}
        <NavBody className="h-full flex items-center justify-between">
          {/* Brand / Logo */}
          <NavbarLogo
            {...({
              children: (
                <Link href="/" className="text-2xl font-bold text-primary">
                  Valaithalam
                </Link>
              ),
            } as any)}
          />

          {/* Navigation Links */}
          <NavItems
            items={navItems}
            className="text-lg font-medium text-gray-700"
          />

          {/* Call-to-Action Buttons */}
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary" className="py-2 px-5 text-base">
              Login
            </NavbarButton>
            <NavbarButton variant="primary" className="py-2 px-5 text-base">
              Book a Call
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navbar */}
        <MobileNav>
          <MobileNavHeader className="h-20 flex items-center justify-between px-4">
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-lg text-neutral-700 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile CTA buttons */}
            <div className="flex w-full flex-col gap-3 mt-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a Call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </ResizableNavbar>
    </div>
  );
};

export default Navbar;
