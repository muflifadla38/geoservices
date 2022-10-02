import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const newClass = scroll
    ? "lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]"
    : "";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, [scroll]);

  return (
    <header
      id="header"
      className={
        "px-20 sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 bg-white supports-backdrop-blur:bg-white/95 " +
        newClass
      }
    >
      <nav className="text-center font-semibold">
        <ul className="md:flex md:justify-between align-middle m-2 p-2">
          <li className="my-auto">
            <Link href="#about">
              <a className="hover:text-slate-500">About</a>
            </Link>
          </li>
          <li className="my-auto">
            <Link href="#services">
              <a className="hover:text-slate-500">Services</a>
            </Link>
          </li>
          <li className="my-auto">
            <Link href="/#products">
              <a className="hover:text-slate-500">Products</a>
            </Link>
          </li>
          <li className="my-auto">
            <Link href="/">
              <a>
                <Image
                  src="/logo-3.png"
                  alt="Company Logo"
                  width={113.5}
                  height={40}
                />
              </a>
            </Link>
          </li>
          <li className="my-auto">
            <Link href="/#locations">
              <a className="hover:text-slate-500">Locations</a>
            </Link>
          </li>
          <li className="my-auto">
            <Link href="/#contact">
              <a className="hover:text-slate-500">Contact</a>
            </Link>
          </li>
          <li className="my-auto">
            <Link href="/language">
              <a className="hover:text-slate-500">English</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
