"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Folder, Phone, Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const navItems = [
    { name: "Home", link: "/", icon: Home },
    { name: "Services", link: "/services", icon: Briefcase },
    { name: "Portfolio", link: "/portfolio", icon: Folder },
    { name: "Contact", link: "/contact", icon: Phone },
  ];

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Navbar */}
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          } ${scrolled ? 'top-2 scale-[0.98]' : 'top-4 scale-100'}`}
        style={{
          animation: mounted ? 'fadeInDown 0.6s ease-out' : 'none'
        }}
      >
        <div
          className={`glassmorphism rounded-full px-6 py-3 shadow-lg border border-white/20 transition-all duration-500 ease-out ${scrolled ? 'shadow-2xl backdrop-blur-xl' : 'backdrop-blur-md'
            }`}
        >
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Company Logo/Name */}
            <Link
              href="/"
              className="pr-4 border-r border-neutral-300/50 group"
            >
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-gradient-end bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                JM&L
              </span>
            </Link>

            {/* Navigation Items */}
            <div className="flex items-center gap-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.link}
                    className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${isActive(item.link)
                      ? "text-white bg-primary shadow-md scale-105"
                      : "text-neutral-700 hover:text-primary hover:bg-white/50"
                      }`}
                    style={{
                      animation: mounted ? `fadeInUp 0.4s ease-out ${index * 0.1}s backwards` : 'none'
                    }}
                  >
                    <Icon className={`h-4 w-4 transition-transform duration-300 ${isActive(item.link) ? 'rotate-0' : 'group-hover:rotate-12'
                      }`} />
                    <span className="text-sm">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-between w-full">
            {/* Mobile Logo */}
            <Link href="/">
              <span className="text-base font-bold bg-gradient-to-r from-primary to-gradient-end bg-clip-text text-transparent">
                JM&L
              </span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-neutral-700 hover:bg-white/50 transition-all duration-300 hover:scale-110"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 rotate-0 transition-transform duration-300" />
              ) : (
                <Menu className="h-5 w-5 rotate-0 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div
            className="md:hidden mt-2 glassmorphism rounded-2xl p-4 shadow-xl border border-white/20 animate-[fadeIn_0.3s_ease-out] origin-top"
            style={{
              animation: 'scaleIn 0.3s ease-out'
            }}
          >
            <div className="space-y-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${isActive(item.link)
                      ? "text-white bg-primary shadow-md"
                      : "text-neutral-700 hover:bg-white/50"
                      }`}
                    style={{
                      animation: `fadeInUp 0.3s ease-out ${index * 0.05}s backwards`
                    }}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Add keyframes for animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translate(-50%, -20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scaleY(0.95);
          }
          to {
            opacity: 1;
            transform: scaleY(1);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
