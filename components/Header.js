import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header id="header" className="px-20">
      <nav className="text-center font-semibold">
        <ul className="md:flex md:justify-between align-middle m-4">
          <li className="my-auto">
            <Link href="/about">
              <a className="hover:text-violet-600">About</a>
            </Link>
          </li>
          <li className="my-auto">
            <Link href="/services">
              <a className="hover:text-violet-600">Services</a>
            </Link>
          </li>
          <li className="my-auto">
            <Link href="/products">
              <a className="hover:text-violet-600">Products</a>
            </Link>
          </li>
          <li className="my-auto">
            <Link href="/">
              <a>
                <Image
                  src="/logo.png"
                  alt="Company Logo"
                  width={90}
                  height={40}
                />
              </a>
            </Link>
          </li>
          <li className="my-auto">
            <Link href="/locations">
              <a className="hover:text-violet-600">Locations</a>
            </Link>
          </li>
          <li className="my-auto">
            <Link href="/contact">
              <a className="hover:text-violet-600">Contact</a>
            </Link>
          </li>
          <li className="my-auto">
            <Link href="/language">
              <a className="hover:text-violet-600">English</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
