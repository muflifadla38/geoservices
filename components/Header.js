import { useState, useEffect, Fragment } from "react";
import { Popover, Transition, Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import Dropdown from "./Dropdown";
import {
  ChevronDownIcon,
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
  MoonIcon,
  SunIcon,
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

  //Toggle Switch
  const [enabled, setEnabled] = useState(false);

  // Darkmode
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Add scroll class to header when scrolls
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });

    // Dark mode switcher
    enabled ? setTheme("dark") : setTheme("none");
  }, [scroll, enabled]);

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
            <li className="hover:bg-slate-200 active:bg-slate-300 px-2 py-1 rounded-md">
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
          <ul className="items-center hidden space-x-8 lg:flex text-slate-700 dark:text-slate-200">
            <li className="hover:bg-slate-200 active:bg-slate-300 px-2 py-1 rounded-md">
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
            <li className="hover:bg-slate-200 active:bg-slate-300 px-2 py-1 rounded-md">
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
            <li className="hover:bg-slate-200 active:bg-slate-300 px-2 py-1 rounded-md">
              <Link href="/#languages">
                <a
                  aria-label="Languages"
                  title="Languages"
                  className="font-medium tracking-wide"
                >
                  Languages
                </a>
              </Link>
            </li>
          </ul>
          <div className="">
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${enabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-8 w-[4.2rem] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              >
                {enabled ? (
                  <MoonIcon className="w-6 h-6 text-slate-400 mx-auto" />
                ) : (
                  <SunIcon className="w-6 h-6 text-slate-400 mx-auto" />
                )}
              </span>
            </Switch>
          </div>
          <div className="lg:hidden z-10">
            <Popover.Button
              aria-label="Open Menu"
              title="Open Menu"
              className="inline-flex items-center justify-center rounded-md p-2 -mr-1 transition duration-200 focus:outline-none focus:shadow-outline"
            >
              <span className="sr-only">Open Menu</span>
              <BurgerMenuIcon
                className="w-6 h-6 text-slate-600"
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
                      <Popover.Button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="inline-flex items-center justify-center rounded-md p-2 -mt-2 -mr-2 transition duration-200 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon
                          className="w-6 h-6 text-slate-600"
                          aria-hidden="true"
                        />
                      </Popover.Button>
                    </div>
                  </div>
                  <nav className="divide-y-2 divide-gray-50">
                    <ul className="pb-3">
                      {ServicesItem.map((item) => (
                        <li key={item.title}>
                          <Link href={item.href}>
                            <a
                              aria-label="Services"
                              title="Services"
                              className="font-medium tracking-wide text-slate-700 inline-flex items-center hover:bg-slate-200 active:bg-slate-300 px-2 py-1 rounded-md"
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
                              className="font-medium tracking-wide text-slate-700 inline-flex items-center hover:bg-slate-200 active:bg-slate-300 px-2 py-1 rounded-md"
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
                    <div className="space-y-6 py-3">
                      <ul className="grid grid-cols-2 gap-y-1 gap-x-8">
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
                          <Link href="/#about">
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
                    </div>
                  </nav>
                </div>
              </Popover.Panel>
            </Transition>
          </div>
        </div>
      </div>
    </Popover>
  );
};

export default Header;
