import { useState, useEffect, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import Dropdown from "./Dropdown";
import DarkModeButton from "./DarkModeButton";
import {
  LogoIcon,
  BurgerMenuIcon,
  XMarkIcon,
  WaveIcon,
  BoltIcon,
  MapIcon,
  EnvironmentIcon,
  ConstructionIcon,
  GeotechnicIcon,
  ServiceIcon,
  ProjectIcon,
} from "./Icons";

const ServicesItem = [
  {
    title: "MASW",
    description: "Bisa diberi deskripsi singkat (1 baris)",
    href: "/services/masw",
    icon: WaveIcon,
  },
  {
    title: "Geoelectic",
    description: "Bisa diberi deskripsi singkat (1 baris)",
    href: "/services/geoelectric",
    icon: BoltIcon,
  },
  {
    title: "Our Services",
    description: "Bisa diberi deskripsi singkat (1 baris)",
    href: "/#services-section",
    icon: ServiceIcon,
  },
];

const ProjectsItem = [
  {
    title: "Construction",
    description: "Bisa diberi deskripsi singkat (1 baris)",
    href: "/projects/construction",
    icon: ConstructionIcon,
  },
  {
    title: "Geotechnic",
    description: "Ini jga bisa diberi deskripsi singkat (1 baris)",
    href: "/projects/geotechnic",
    icon: GeotechnicIcon,
  },
  {
    title: "Environment",
    description: "Sama jga bisa diberi deskripsi singkat (1 baris)",
    href: "/projects/environment",
    icon: EnvironmentIcon,
  },
  {
    title: "Mapping",
    description: "Intinya bisa semua diberi deskripsi singkat (1 baris)",
    href: "/projects/mapping",
    icon: MapIcon,
  },
  {
    title: "Our Projects",
    description: "Bisa diberi deskripsi singkat (1 baris)",
    href: "/#projects-section",
    icon: ProjectIcon,
  },
];

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const scrollClass = scroll
    ? "bg-white sticky top-0 z-40 bg-opacity-75 backdrop-filter backdrop-blur-sm lg:rounded-sm lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75"
    : "bg-inherit";

  useEffect(() => {
    // Add scroll class to header when scrolls
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, [scroll]);

  return (
    <Popover
      as="header"
      className={
        "relative my-6 lg:my-8 transition " + (scroll ? scrollClass : "")
      }
    >
      <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="relative flex items-center justify-between lg:justify-center lg:space-x-16">
          <Popover.Group
            as="ul"
            className="items-center hidden space-x-8 lg:flex text-slate-700 dark:text-slate-200"
          >
            <li className="hover:bg-slate-200 dark:hover:bg-slate-700 active:bg-slate-300 px-2 py-1 rounded-md">
              <Link href="/">
                <a
                  aria-label="Home"
                  title="Home"
                  className="font-medium tracking-wide"
                >
                  Home
                </a>
              </Link>
            </li>
            <Dropdown title={"Services"} items={ServicesItem} />
            <Dropdown title={"Projects"} items={ProjectsItem} />
          </Popover.Group>
          <Link href="/">
            <a
              aria-label="TTOIL"
              title="TTOIL"
              className="inline-flex items-center text-slate-700 dark:text-slate-200"
            >
              <LogoIcon className="w-20 h-8" />
            </a>
          </Link>
          <ul className="items-center hidden space-x-8 lg:flex text-slate-700 dark:text-slate-200">
            <li className="hover:bg-slate-200 dark:hover:bg-slate-700 active:bg-slate-300 px-2 py-1 rounded-md">
              <Link href="/#blogs">
                <a
                  aria-label="Blogs"
                  title="Blogs"
                  className="font-medium tracking-wide"
                >
                  Blogs
                </a>
              </Link>
            </li>
            <li className="hover:bg-slate-200 dark:hover:bg-slate-700 active:bg-slate-300 px-2 py-1 rounded-md">
              <Link href="/about">
                <a
                  aria-label="About"
                  title="About"
                  className="font-medium tracking-wide "
                >
                  About
                </a>
              </Link>
            </li>
            <li className="hover:bg-slate-200 dark:hover:bg-slate-700 active:bg-slate-300 px-2 py-1 rounded-md">
              <Link href="/contact">
                <a
                  aria-label="Contact"
                  title="Contact"
                  className="font-medium tracking-wide"
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
          <div className="flex flex-row space-x-6">
            <div className="inline-flex text-md items-center">
              <p>
                <a href="#id" className="">
                  ID
                </a>{" "}
                |{" "}
                <a
                  href="#en"
                  className="text-slate-600 dark:text-slate-400 font-bold"
                >
                  EN
                </a>
              </p>
            </div>

            <DarkModeButton />

            {/* Mobile Menu */}
            <div className="lg:hidden z-50">
              <Popover.Button
                aria-label="Open Menu"
                title="Open Menu"
                className="inline-flex items-center justify-center rounded-md p-2 -mr-1 transition duration-200 focus:outline-none focus:shadow-outline"
              >
                <span className="sr-only">Open Menu</span>
                <BurgerMenuIcon
                  className="w-6 h-6 text-slate-600 dark:text-slate-400"
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute top-0 left-0 w-full rounded-lg shadow-lg"
                >
                  <div className="p-5 bg-slate-100 dark:bg-slate-800  rounded-lg ">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Link href="/">
                          <a
                            aria-label="TTOIL"
                            title="TTOIL"
                            className="inline-flex items-center text-slate-700 dark:text-slate-200"
                          >
                            <LogoIcon className="w-16 h-8" />
                          </a>
                        </Link>
                      </div>
                      <div>
                        <Popover.Button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="inline-flex items-center justify-center rounded-md p-2 -mt-2 -mr-2 transition duration-200 hover:bg-gray-200 dark:hover:bg-slate-700 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        >
                          <span className="sr-only">Close menu</span>
                          <XMarkIcon
                            className="w-6 h-6 text-slate-600 dark:text-slate-400"
                            aria-hidden="true"
                          />
                        </Popover.Button>
                      </div>
                    </div>
                    <nav className="divide-y-2 divide-slate-200 dark:divide-slate-700">
                      <ul className="pb-3">
                        {ServicesItem.map((item) => (
                          <li key={item.title}>
                            <Link href={item.href}>
                              <a
                                aria-label="Services"
                                title="Services"
                                className="font-medium tracking-wide text-slate-900 dark:text-slate-400 inline-flex items-center hover:bg-slate-200 active:bg-slate-300 px-2 py-1 rounded-md"
                              >
                                <item.icon
                                  className="w-4 h-4 flex-shrink-0 text-sky-500"
                                  aria-hidden="true"
                                />
                                <span className="ml-3 text-base font-medium">
                                  {item.title}
                                </span>
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <ul className="py-3">
                        {ProjectsItem.map((item) => (
                          <li key={item.title}>
                            <Link href={item.href}>
                              <a
                                aria-label="Services"
                                title="Services"
                                className="font-medium tracking-wide text-slate-900 dark:text-slate-400 inline-flex items-center hover:bg-slate-200 active:bg-slate-300 px-2 py-1 rounded-md"
                              >
                                <item.icon
                                  className="w-4 h-4 flex-shrink-0 text-indigo-500 dark:text-indigo-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-3 text-base font-medium">
                                  {item.title}
                                </span>
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="space-y-6 py-3">
                        <ul className="grid grid-cols-2 gap-y-1 gap-x-8 text-slate-900 dark:text-slate-400">
                          <li>
                            <Link href="/">
                              <a
                                aria-label="Home"
                                title="Home"
                                className="font-medium tracking-wide text-slate-900 dark:text-slate-400 inline-flex items-center hover:bg-slate-200 active:bg-slate-300 px-2 py-1 rounded-md"
                              >
                                Home
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#blogs">
                              <a
                                aria-label="Blogs"
                                title="Blogs"
                                className="font-medium tracking-wide inline-flex items-center hover:bg-slate-200 active:bg-slate-300 px-2 py-1 rounded-md"
                              >
                                Blogs
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#about">
                              <a
                                aria-label="About"
                                title="About"
                                className="font-medium tracking-wide inline-flex items-center hover:bg-slate-200 active:bg-slate-300 px-2 py-1 rounded-md"
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
                                className="font-medium tracking-wide inline-flex items-center hover:bg-slate-200 active:bg-slate-300 px-2 py-1 rounded-md"
                              >
                                Contact
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </Popover.Panel>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </Popover>
  );
};

export default Header;
