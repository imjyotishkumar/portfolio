"use client";
import { navLinks } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ResumeButton from "./ResumeButton";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`paddingX
      w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-[#18181A] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Link href="https://github.com/imjyotishkumar">
            <Image
              src="/logo.png"
              width={80}
              height={80}
              alt="logo"
              priority
              className="object-contain"
            />
          </Link>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Jyotish &nbsp; <span className="sm:block hidden ">| imjyotishkumar</span>
          </p>
        </div>

        {/* Desktop Navbar Links */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`hover:text-white text-[18px] font-medium cursor-pointer ${
                active === nav.title ? "text-white" : "text-secondary"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <Link href={`#${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>
        {/* <div className="mt-2 lg:block hidden">
          <ResumeButton />
        </div> */}

        {/* Mobile Hamburger and Dropdown */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? "/close.svg" : "/menu.svg"}
            width={28}
            height={28}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-30 rounded-xl bg-[#18181A] shadow-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <Link href={`#${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
              {/* If you want to show ResumeButton on mobile too, uncomment below */}
              {/*
              <li className="mt-3">
                <ResumeButton />
              </li>
              */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
