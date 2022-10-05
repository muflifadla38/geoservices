import { useState, useEffect, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { ChevronDownIcon, BurgerMenuIcon, XMarkIcon } from "./Icons";
import Link from "next/link";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const scrollClass = scroll
    ? "sticky top-0 z-40 bg-opacity-75 backdrop-filter backdrop-blur-sm lg:rounded-sm lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]"
    : "";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, [scroll]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={
        "bg-white my-6 lg:my-8 transition " + (scroll ? scrollClass : "")
      }
    >
      <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="relative flex items-center justify-between lg:justify-center lg:space-x-16">
          <ul className="items-center hidden space-x-8 lg:flex">
            <li className="hover:bg-slate-200 active:bg-slate-300 px-2 py-1 rounded-md">
              <Link href="/">
                <a
                  aria-label="Home"
                  title="Home"
                  className="font-medium tracking-wide text-slate-700"
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="hover:bg-slate-200 active:bg-slate-300 px-2 py-1 rounded-md">
              <Link href="/#services-section">
                <a
                  aria-label="Our Services"
                  title="Our Services"
                  className="font-medium tracking-wide text-slate-700 inline-flex items-center"
                >
                  Services
                  <ChevronDownIcon className="w-4 h-4 ml-2" />
                </a>
              </Link>
            </li>
            <li className="hover:bg-slate-200 active:bg-slate-300 px-2 py-1 rounded-md">
              <Link href="/#projects-section">
                <a
                  aria-label="Our Projects"
                  title="Our Projects"
                  className="font-medium tracking-wide text-slate-700 inline-flex items-center"
                >
                  Projects
                  <ChevronDownIcon className="w-4 h-4 ml-2" />
                </a>
              </Link>
            </li>
          </ul>
          <Link href="/">
            <a
              aria-label="TTOIL"
              title="TTOIL"
              className="inline-flex items-center"
            >
              <Image
                src="/logo-3.png"
                alt="Company Logo"
                width={68}
                height={24}
              />
            </a>
          </Link>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li className="hover:bg-slate-200 active:bg-slate-300 px-2 py-1 rounded-md">
              <Link href="/#about-section">
                <a
                  aria-label="About"
                  title="About"
                  className="font-medium tracking-wide text-slate-700"
                >
                  About
                </a>
              </Link>
            </li>
            <li className="hover:bg-slate-200 active:bg-slate-300 px-2 py-1 rounded-md">
              <Link href="/#contact-section">
                <a
                  aria-label="Contact"
                  title="Contact"
                  className="font-medium tracking-wide text-slate-700"
                >
                  Contact
                </a>
              </Link>
            </li>
            <li className="hover:bg-slate-200 active:bg-slate-300 px-2 py-1 rounded-md">
              <Link href="/#languages">
                <a
                  aria-label="Languages"
                  title="Languages"
                  className="font-medium tracking-wide text-slate-700"
                >
                  Languages
                </a>
              </Link>
            </li>
          </ul>
          <div className="lg:hidden z-10">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <BurgerMenuIcon className="w-6 h-6 text-slate-600" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full rounded-lg shadow-lg">
                <div className="p-5 bg-white border rounded-lg ">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link href="/">
                        <a
                          aria-label="TTOIL"
                          title="TTOIL"
                          className="inline-flex items-center"
                        >
                          <Image
                            src="/logo-3.png"
                            alt="Company Logo"
                            width={68}
                            height={24}
                          />
                        </a>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <XMarkIcon className="w-6 h-6 text-slate-600" />
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link href="/">
                          <a
                            aria-label="Home"
                            title="Home"
                            className="font-medium tracking-wide text-slate-700 inline-flex items-center hover:bg-slate-200 active:bg-slate-300 px-2 py-1 rounded-md"
                          >
                            Home
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#services-section">
                          <a
                            aria-label="Services"
                            title="Services"
                            className="font-medium tracking-wide text-slate-700 inline-flex items-center hover:bg-slate-200 active:bg-slate-300 px-2 py-1 rounded-md"
                          >
                            Services
                            <ChevronDownIcon className="w-4 h-4 ml-2" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#projects-section">
                          <a
                            aria-label="Projects"
                            title="Projects"
                            className="font-medium tracking-wide text-slate-700 inline-flex items-center hover:bg-slate-200 active:bg-slate-300 px-2 py-1 rounded-md"
                          >
                            Projects
                            <ChevronDownIcon className="w-4 h-4 ml-2" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#about-section">
                          <a
                            aria-label="About"
                            title="About"
                            className="font-medium tracking-wide text-slate-700 inline-flex items-center hover:bg-slate-200 active:bg-slate-300 px-2 py-1 rounded-md"
                          >
                            About
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#projects-section">
                          <a
                            aria-label="Contact"
                            title="Contact"
                            className="font-medium tracking-wide text-slate-700 inline-flex items-center hover:bg-slate-200 active:bg-slate-300 px-2 py-1 rounded-md"
                          >
                            Contact
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#projects-section">
                          <a
                            aria-label="Our product"
                            title="Our product"
                            className="font-medium tracking-wide text-slate-700 inline-flex items-center hover:bg-slate-200 active:bg-slate-300 px-2 py-1 rounded-md"
                          >
                            Languages
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
