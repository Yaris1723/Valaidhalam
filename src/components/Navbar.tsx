"use client";

import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";

import { Home, Briefcase, Folder, Phone } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
    { name: "Services", link: "/services", icon: <Briefcase className="h-4 w-4" /> },
    { name: "Portfolio", link: "/portfolio", icon: <Folder className="h-4 w-4" /> },
    { name: "Contact", link: "/contact", icon: <Phone className="h-4 w-4" /> },
  ];

  return (
    <FloatingNav
      navItems={navItems}
      className="bg-white/80 backdrop-blur-md shadow-md border border-gray-100 dark:bg-black/70 dark:border-white/[0.1]"
    >
      {/* Note: Do NOT put children here! */}
    </FloatingNav>
  );
};

export default Navbar;
