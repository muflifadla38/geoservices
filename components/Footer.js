import Image from "next/image";
import Link from "next/link";
import {
  EmailIcon,
  InstagramIcon,
  LogoIcon,
  TelegramIcon,
  WhatsappIcon,
} from "./Icons";

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-11 lg:gap-20 text-slate-800 dark:text-slate-300">
        <div className="col-span-3">
          <Link
            href="/"
            className="flex items-center text-slate-700 dark:text-slate-200"
          >
            <a title="TTOILHello Home Page">
              <LogoIcon className="w-16 h-6" />
              <span className="sr-only">TTOIL Home Page</span>
            </a>
          </Link>
          <p className="my-4 text-xs leading-normal text-slate-600 dark:text-slate-200">
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
            className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            Georadar/ GPR
          </a>
          <a
            className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            Geolistrik
          </a>
          <a
            className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            Microseis
          </a>
          <a
            className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            Drone
          </a>
          <a
            className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            GPS Geodetic
          </a>
          <a
            className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            MASW
          </a>
          <a
            className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            Soil Investigation
          </a>
          <a
            className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-sky-600"
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
            className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            Aplikasi Konstruksi
          </a>
          <a
            className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            Aplikasi Geotek
          </a>
          <a
            className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            Aplikasi Lingkungan
          </a>
          <a
            className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-sky-600"
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
            className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            Who are We
          </a>
          <a
            className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            Our Company
          </a>
        </nav>
        <nav className="col-span-1 md:col-span-1 lg:col-span-2 ">
          <p className="mb-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">
            Contact
          </p>
          <a
            className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            About Us
          </a>
          <a
            className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            Privacy
          </a>
          <a
            className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            Terms
          </a>
          <a
            className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-sky-600"
            href="#"
          >
            Status
          </a>
        </nav>
      </div>
      <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-slate-200 dark:border-slate-700 md:flex-row md:items-center">
        <p className="mb-2 text-xs text-left text-slate-600 dark:text-slate-400 md:mb-0">
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
            className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
          >
            <span className="sr-only">Email</span>
            <EmailIcon className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/6289669644474"
            className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
          >
            <span className="sr-only">Whatsapp</span>
            <WhatsappIcon className="w-6 h-6" />
          </a>
          <a
            href="https://t.me/muflifadla38"
            className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
          >
            <span className="sr-only">Telegram</span>
            <TelegramIcon className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/muflifadla38"
            className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
          >
            <span className="sr-only">Instagram</span>
            <InstagramIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
