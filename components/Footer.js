import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    // <footer className="divide-y-2 divide-slate-300">
    //   <div className="">
    //     <div className="my-6">
    //       <Link href="/">
    //         <a>
    //           <Image
    //             src="/logo-3.png"
    //             alt="Geoenvi Logo"
    //             width={113.5}
    //             height={40}
    //           />
    //         </a>
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="flex justify-between text-center">
    //     <div className="my-6">
    //       <p>
    //         &copy;{" "}
    //         <Link href="/">
    //           <a className="hover:text-violet-600">Geoenvi </a>
    //         </Link>
    //         {new Date().getFullYear()}. All rights reserved.
    //       </p>
    //     </div>
    //     <div className="flex my-6">
    //       <a href="https://instagram.com" className="mx-2">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 448 512"
    //           height="24"
    //         >
    //           <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    //         </svg>
    //       </a>
    //       <a href="https://wa.me/6289669644474" className="mx-2">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 448 512"
    //           height="24"
    //         >
    //           <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    //         </svg>
    //       </a>
    //       <a href="https://t.me/muflifadla38" className="mx-2">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 496 512"
    //           height="24"
    //         >
    //           <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" />
    //         </svg>
    //       </a>
    //       <a href="mailto:muflyfadlasyihab@gmail.com" className="mx-2">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 512 512"
    //           height="24"
    //         >
    //           <path d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z" />
    //         </svg>
    //       </a>
    //     </div>
    //   </div>
    // </footer>

    <footer className="px-4 py-12 mx-auto max-w-7xl">
      <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-11 lg:gap-20">
        <div className="col-span-3">
          <a href="#" title="Hellonext Home Page" className="flex items-center">
            <Image
              src="/logo-3.png"
              alt="Geoenvi Logo"
              width={68.1}
              height={24}
            />
            <span className="sr-only">Kutty Home Page</span>
          </a>
          <p className="my-4 text-xs leading-normal text-gray-600">
            Nda tau ini <strong>Apa mau diisikan</strong> disini. Sembarangmo
            saja dulu{" "}
            <a href="#" className="underline" target="_blank">
              kata-kata bullshitnya
            </a>
            .
          </p>
        </div>
        <nav className="col-span-1 md:col-span-1 lg:col-span-2">
          <p className="mb-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">
            About
          </p>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
            href="#"
          >
            Who are We
          </a>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
            href="#"
          >
            Our Company
          </a>
        </nav>
        <nav className="col-span-2 md:col-span-1 lg:col-span-2">
          <p className="mb-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">
            Services
          </p>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
            href="#"
          >
            Georadar/ GPR
          </a>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
            href="#"
          >
            Geolistrik
          </a>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
            href="#"
          >
            Microseis
          </a>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
            href="#"
          >
            Drone
          </a>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
            href="#"
          >
            GPS Geodetic
          </a>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
            href="#"
          >
            MASW
          </a>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
            href="#"
          >
            Soil Investigation
          </a>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
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
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
            href="#"
          >
            Aplikasi Konstruksi
          </a>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
            href="#"
          >
            Aplikasi Geotek
          </a>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
            href="#"
          >
            Aplikasi Lingkungan
          </a>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
            href="#"
          >
            Survey Mapping
          </a>
        </nav>
        <nav className="col-span-1 md:col-span-1 lg:col-span-2">
          <p className="mb-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">
            Contact
          </p>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
            href="#"
          >
            About Us
          </a>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
            href="#"
          >
            Privacy
          </a>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
            href="#"
          >
            Terms
          </a>
          <a
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
            href="#"
          >
            Status
          </a>
        </nav>
      </div>
      <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
        <p className="mb-2 text-xs text-left text-gray-600 md:mb-0">
          &copy; Copyright {new Date().getFullYear()} <a href="/">TTOIL</a>. All
          rights Reserved.
        </p>
        <div className="flex items-center space-x-6 text-slate-400">
          <a
            href="mailto:muflyfadlasyihab@gmail.com"
            className="hover:text-slate-500 dark:hover:text-slate-300"
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
            className="hover:text-slate-500 dark:hover:text-slate-300"
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
            className="hover:text-slate-500 dark:hover:text-slate-300"
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
            className="hover:text-slate-500 dark:hover:text-slate-300"
          >
            <span className="sr-only">Instagram</span>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
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
