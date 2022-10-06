import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-4 py-12 mx-auto max-w-7xl">
      <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-11 lg:gap-20">
        <div className="col-span-3">
          <Link href="/" className="flex items-center">
            <a title="TTOILHello Home Page">
              <Image
                src="/logo-3.png"
                alt="Geoenvi Logo"
                width={68.1}
                height={24}
              />
              <span className="sr-only">Kutty Home Page</span>
            </a>
          </Link>
          <p className="my-4 text-xs leading-normal text-gray-600">
            Nda tau ini <strong>Apa mau diisikan</strong> disini. Sembarangmo
            saja dulu{" "}
            <a href="#" className="underline" target="_blank">
              kata-kata bullshitnya
            </a>
            .
          </p>
        </div>
        <nav className="col-span-2 md:col-span-1 lg:col-span-2">
          <p className="mb-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">
            Services
          </p>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            Georadar/ GPR
          </a>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            Geolistrik
          </a>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            Microseis
          </a>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            Drone
          </a>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            GPS Geodetic
          </a>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            MASW
          </a>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            Soil Investigation
          </a>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            Radio Detection
          </a>
        </nav>
        <nav className="col-span-1 md:col-span-1 lg:col-span-2">
          <p className="mb-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">
            Projects
          </p>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            Aplikasi Konstruksi
          </a>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            Aplikasi Geotek
          </a>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            Aplikasi Lingkungan
          </a>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            Survey Mapping
          </a>
        </nav>
        <nav className="col-span-1 md:col-span-1 lg:col-span-2">
          <p className="mb-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">
            About
          </p>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            Who are We
          </a>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            Our Company
          </a>
        </nav>
        <nav className="col-span-1 md:col-span-1 lg:col-span-2">
          <p className="mb-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">
            Contact
          </p>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            About Us
          </a>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            Privacy
          </a>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            Terms
          </a>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            Status
          </a>
        </nav>
      </div>
      <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
        <p className="mb-2 text-xs text-left text-gray-600 md:mb-0">
          &copy; Copyright {new Date().getFullYear()}{" "}
          <strong>
            <Link href="/">
              <a>TTOIL</a>
            </Link>
          </strong>
          . All rights Reserved.
        </p>
        <div className="flex items-center space-x-6 text-slate-400">
          <a
            href="mailto:muflyfadlasyihab@gmail.com"
            className="hover:text-slate-500 dark:hover:text-slate-500"
          >
            <span className="sr-only">Email</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              enableBackground="new 0 0 512 512"
              version="1.1"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              className="w-5 h-5"
            >
              <path fill="#f2f2f2" d="M64 64H448V448H64z"></path>
              <path fill="#f2f2f2" d="M256 296.384L448 448 448 148.672z"></path>
              <path
                fill="currentColor"
                d="M464 64h-16L256 215.616 64 64H48C21.504 64 0 85.504 0 112v288c0 26.496 21.504 48 48 48h16V148.672l192 147.68L448 148.64V448h16c26.496 0 48-21.504 48-48V112c0-26.496-21.504-48-48-48z"
              ></path>
            </svg>
          </a>
          <a
            href="https://wa.me/6289669644474"
            className="hover:text-slate-500 dark:hover:text-slate-500"
          >
            <span className="sr-only">Whatsapp</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              enableBackground="new 0 0 512 512"
              version="1.1"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              className="w-5 h-5"
            >
              <path
                fill="currentColor"
                d="M256.064 0h-.128C114.784 0 0 114.816 0 256c0 56 18.048 107.904 48.736 150.048l-31.904 95.104 98.4-31.456C155.712 496.512 204 512 256.064 512 397.216 512 512 397.152 512 256S397.216 0 256.064 0z"
              ></path>
              <path
                fill="#FAFAFA"
                d="M405.024 361.504c-6.176 17.44-30.688 31.904-50.24 36.128-13.376 2.848-30.848 5.12-89.664-19.264-75.232-31.168-123.68-107.616-127.456-112.576-3.616-4.96-30.4-40.48-30.4-77.216s18.656-54.624 26.176-62.304c6.176-6.304 16.384-9.184 26.176-9.184 3.168 0 6.016.16 8.576.288 7.52.32 11.296.768 16.256 12.64 6.176 14.88 21.216 51.616 23.008 55.392 1.824 3.776 3.648 8.896 1.088 13.856-2.4 5.12-4.512 7.392-8.288 11.744-3.776 4.352-7.36 7.68-11.136 12.352-3.456 4.064-7.36 8.416-3.008 15.936 4.352 7.36 19.392 31.904 41.536 51.616 28.576 25.44 51.744 33.568 60.032 37.024 6.176 2.56 13.536 1.952 18.048-2.848 5.728-6.176 12.8-16.416 20-26.496 5.12-7.232 11.584-8.128 18.368-5.568 6.912 2.4 43.488 20.48 51.008 24.224 7.52 3.776 12.48 5.568 14.304 8.736 1.792 3.168 1.792 18.048-4.384 35.52z"
              ></path>
            </svg>
          </a>
          <a
            href="https://t.me/muflifadla38"
            className="hover:text-slate-500 dark:hover:text-slate-500"
          >
            <span className="sr-only">Telegram</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -31 512 512"
              className="w-5 h-5"
            >
              <path
                fill="#f2f2f2"
                d="M211 270l-40.918 43.676L181 390l120-90zm0 0"
              ></path>
              <path
                fill="
                currentColor"
                d="M0 180l121 60 90 30 210 180L512 0zm0 0"
              ></path>
              <path
                fill="#f2f2f2"
                d="M121 240l60 150 30-120L421 90zm0 0"
              ></path>
            </svg>
          </a>
          <a
            href="https://instagram.com/muflifadla38"
            className="hover:text-slate-500 dark:hover:text-slate-500"
          >
            <span className="sr-only">Instagram</span>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
