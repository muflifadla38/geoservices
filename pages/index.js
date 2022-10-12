import Image from "next/image";
import Link from "next/link";
import { LeftArrowIcon, RightArrowIcon } from "../components/Icons";

const Home = () => {
  return (
    <>
      <div
        id="hero-section"
        className="shadow-lg relative w-full lg:h-[40rem] md:h-[37rem] lg:rounded-3xl sm:rounded-2xl bg-cover bg-center bg-[url('/banner/carousel-2.jpg')]"
      >
        <div className="flex items-center justify-center w-full  lg:rounded-3xl sm:rounded-2xl h-full bg-slate-900 bg-opacity-50 ">
          <div className="text-center text-slate-100">
            <p className="text-2xl font-semibold uppercase lg:text-3xl">
              TTOIL Service Company
            </p>
            <Link href="/#about-section">
              <button className="px-14 py-3 mt-4 text-sm font-medium  uppercase transition-colors duration-300 transform bg-indigo-500 dark:bg-indigo-700 rounded-md w-auto hover:bg-indigo-600 dark:hover:bg-indigo-600 focus:outline-none focus:bg-blue-600">
                <span>Explore</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div
        id="about-section"
        className="lg:mx-10 md:mx-5 lg:my-20 md:my-10 flex"
      >
        <div className="lg:w-1/2 md:w-2/5 pr-10">
          <p className="text-lg underline underline-offset-4 uppercase text-slate-600 font-semibold">
            About Our Company
          </p>
          <p className="text-2xl font-semibold my-10">
            With access to major suppliers and manufacturers around the globe.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-3/5 text-md text-slate-400">
          <p className="my-3">
            TTOIL Trading and Commerce Agency trades several of crude oil and
            retfined petroleum products in global energy market.
          </p>
          <p className="my-3">
            TTOIL operates in UAE, Turkey, Azerbaijan, Russia, Ukraine, Georgia,
            Kazakhstan, Turkmenistan and other CIS and Central Asian Countries.
          </p>
          <p className="my-3">
            OUR MISSION is to provide first-class quality and services to all
            our valuable customers and to always be innovative and alert in the
            marketplace we serve.
          </p>
        </div>
      </div>

      <div
        id="about-2-section"
        className="lg:my-20 md:my-10 shadow-lg relative w-full lg:h-96 md:h-80 lg:rounded-3xl sm:rounded-2xl bg-cover bg-center bg-[url('/banner/carousel-3.jpg')]"
      >
        <div className="flex items-center lg:justify-start md:justify-center w-full lg:rounded-3xl sm:rounded-2xl h-full bg-slate-900 bg-opacity-50 absolute">
          <div className="lg:text-left md:text-center text-slate-100 p-2 md:m-4 lg:w-1/2 lg:ml-32 backdrop-blur-sm rounded-md ">
            <p className="md:mb-16 text-slate-400 font-semibold underline underline-offset-4">
              What Can We Do For You?
            </p>
            <p className="text-lg font-semibold  lg:text-3xl">Hedging</p>
            <p className="mt-4">
              As a part of TTOIL’s commitment to our partners, the company
              offers a range of hedge services intended to mitigate the effects
              of the inherent commodity trading risks by maintaining a
              diversified portfolio of physical and paper instruments geared to
              protect the company’s and our client’s capital.
            </p>
          </div>
        </div>
      </div>

      <div
        id="services-section"
        className="lg:mx-10 md:mx-5 lg:my-20 md:my-10 flex"
      >
        <div className="lg:w-1/2 md:w-2/5 pr-10">
          <p className="text-lg underline underline-offset-4 uppercase text-slate-600 font-semibold">
            Services
          </p>
          <p className="text-2xl font-semibold my-10">Our Services</p>
        </div>
        <div className="lg:w-1/2 md:w-3/5 text-md text-slate-400">
          <p className="my-3">
            As a professional company, we are specialized to provide you the
            following services:
          </p>
          <p className="my-3">
            Trading crude oil and refined petroleum products: Our team is ready
            support your company to realize your trading and commerce businesses
            in crude oil and refined petroleum products. Crude oil and refined
            petroleum products (such as gasoline, jet fuel and diesel) are some
            of the most widely used and traded commodities in the world. Thus,
            as TTOIL Trading and Commerce Agency we are involved in the
            exploration, extraction, refining and marketing and transporting of
            these commodities worldwide. As a professional company, we are
            specialized to support to realize your trading and commerce
            businesses in crude oil and refined petroleum products.
          </p>
        </div>
      </div>

      <div
        id="products-section"
        className="lg:my-20 md:my-10 lg:rounded-3xl md:rounded-xl bg-slate-100 dark:bg-slate-800 shadow-lg"
      >
        <div className="lg:mx-10 md:py-1 md:px-5">
          <div className="lg:m-10 m-5">
            <p className="text-lg underline underline-offset-4 uppercase text-slate-600 font-semibold my-5">
              Services
            </p>
            <div className="lg:product-item product-item-md lg:text-left text-center">
              <div className="lg:w-1/2 lg:block hidden mt-10">
                <Image
                  src="/banner/product-1.jpg"
                  width={500}
                  height={333}
                  layout="intrinsic"
                  alt="Carousel Image"
                  className="object-cover rounded-xl brightness-75"
                />
              </div>
              <div className="lg:w-1/2 text-md text-slate-400">
                <div className="lg:ml-14 md:mt-5">
                  <p className="text-2xl font-semibold">
                    <LeftArrowIcon className="w-6 h-6 stroke-2  mr-2 lg:inline hidden" />
                    Georadar / GPR + GPS RTK
                  </p>
                  <div className="lg:w-1/2 lg:hidden lg:my-10 md:my-6">
                    <Image
                      src="/banner/product-1.jpg"
                      width={500}
                      height={333}
                      layout="intrinsic"
                      alt="Carousel Image"
                      className="object-cover rounded-xl brightness-75"
                    />
                  </div>
                  <div className="lg:my-3 lg:ml-8">
                    <p>
                      Ground-penetrating radar (GPR) / Georadar adalah metode
                      geofisika yang menggunakan gelombang radar untuk
                      menggambarkan objek dibawah permukaan objek yang
                      menutupinya.
                    </p>
                    <br />
                    <p>
                      GPR / Georadar membantu bisnis anda dalam menimalkan
                      resiko dari kerugian yang lebih besar akibat objek dibawah
                      yang tidak anda ketahui.
                    </p>
                    <br />
                    <p>
                      GPR memiliki resolusi tinggi untuk mendeteksi objek bawah
                      permukaan seperti: gangguan utilitas (pipa, kawat), lubang
                      pembuangan, struktur jalan, dll
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:product-item product-item-md lg:text-left text-center">
              <div className="lg:w-1/2 text-md text-slate-400">
                <div className="lg:mr-14 md:mt-5">
                  <p className="text-2xl font-semibold">
                    Geolistrik/ ERT
                    <RightArrowIcon className="w-6 h-6 stroke-2  ml-2 lg:inline hidden" />
                  </p>
                  <div className="lg:w-1/2 lg:hidden lg:my-10 md:my-6">
                    <Image
                      src="/banner/product-2.jpg"
                      width={500}
                      height={333}
                      layout="intrinsic"
                      alt="Carousel Image"
                      className="object-cover rounded-xl brightness-75"
                    />
                  </div>
                  <div className="lg:my-3 ">
                    <p>
                      Geolistrik adalah Metode resistivitas (tahanan jenis)
                      merupakan salah satu metode geofisika yang digunakan untuk
                      mendapatkan gambaran struktur bawah tanah dengan parameter
                      observasi sifat kelistrikan bumi.
                    </p>
                    <br />
                    <p>
                      Masalah seperti kekeringan dan adanya lubang “sinkhole”
                      dapat dimitigasi dengan metode ini.
                    </p>
                    <br />
                    <p>
                      Berguna untuk berbagai penyelidikan seperti: air tanah,
                      sumber daya mineral, bebatuan, void, tanah, kedalaman
                      batuan dasar, dll
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:block md:hidden mt-10">
                <Image
                  src="/banner/product-2.jpg"
                  width={500}
                  height={333}
                  layout="intrinsic"
                  alt="Carousel Image"
                  className="object-cover rounded-xl brightness-75"
                />
              </div>
            </div>
            <div className="lg:product-item product-item-md lg:text-left text-center">
              <div className="lg:w-1/2 lg:block md:hidden mt-10">
                <Image
                  src="/banner/product-3.jpg"
                  width={500}
                  height={333}
                  layout="intrinsic"
                  alt="Carousel Image"
                  className="object-cover rounded-xl brightness-75"
                />
              </div>
              <div className="lg:w-1/2 text-md text-slate-400">
                <div className="lg:ml-14 md:mt-5">
                  <p className="text-2xl font-semibold">
                    <LeftArrowIcon className="w-6 h-6 stroke-2  mr-2 lg:inline hidden" />
                    Drone
                  </p>
                  <div className="lg:w-1/2 lg:hidden lg:my-10 md:my-6">
                    <Image
                      src="/banner/product-3.jpg"
                      width={500}
                      height={333}
                      layout="intrinsic"
                      alt="Carousel Image"
                      className="object-cover rounded-xl brightness-75"
                    />
                  </div>
                  <div className="lg:my-3 lg:ml-8">
                    <p>
                      Drone adalah pesawat tanpa pilot. Penerbangan dikendalikan
                      dari jarak jauh oleh komputer di pesawat terbang atau oleh
                      pilot kendali jarak jauh di darat
                    </p>
                    <br />
                    <p>
                      Teknologi drone ini dapat digunakan berbagai bidang,
                      seperti Perkebunan, konstruksi, pertambangan dll. Drone
                      bisa juga dikombinasikan dengan berbagai sensor contohnya:
                      sensor lidar, sensor metana, sensor suhu, dll.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:product-item product-item-md lg:text-left text-center">
              <div className="lg:w-1/2 text-md text-slate-400">
                <div className="lg:mr-14 md:mt-5">
                  <p className="text-2xl font-semibold">
                    GPS Geodetic
                    <RightArrowIcon className="w-6 h-6 stroke-2  ml-2 lg:inline hidden" />
                  </p>
                  <div className="lg:w-1/2 lg:hidden lg:my-10 md:my-6">
                    <Image
                      src="/banner/product-4.jpg"
                      width={500}
                      height={333}
                      layout="intrinsic"
                      alt="Carousel Image"
                      className="object-cover rounded-xl brightness-75"
                    />
                  </div>
                  <div className="lg:my-3 ">
                    <p>
                      Alat ukur koordinat GPS geodetik menggunakan sistem
                      satelit GNSS (Global Navigation Satellite System) dengan
                      akurasi yang sangat tinggi dan presisi
                    </p>
                    <br />
                    <p>
                      Dengan Sistem GNSS, memungkinkan surveyor untuk terus
                      mengumpulkan data dengan akurasi yang tidak diragukan
                      serta mengurangi waktu pekerjaan lebih cepat dan lebih
                      aman daripada GPS Konvensional.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:block md:hidden mt-10">
                <Image
                  src="/banner/product-4.jpg"
                  width={500}
                  height={333}
                  layout="intrinsic"
                  alt="Carousel Image"
                  className="object-cover rounded-xl brightness-75"
                />
              </div>
            </div>
            <div className="lg:product-item product-item-md lg:text-left text-center">
              <div className="lg:w-1/2 lg:block md:hidden mt-10">
                <Image
                  src="/banner/product-5.jpg"
                  width={500}
                  height={333}
                  layout="intrinsic"
                  alt="Carousel Image"
                  className="object-cover rounded-xl brightness-75"
                />
              </div>
              <div className="lg:w-1/2 text-md text-slate-400">
                <div className="lg:ml-14 md:mt-5">
                  <p className="text-2xl font-semibold">
                    <LeftArrowIcon className="w-6 h-6 stroke-2  mr-2 lg:inline hidden" />
                    Radiodetection
                  </p>
                  <div className="lg:w-1/2 lg:hidden lg:my-10 md:my-6">
                    <Image
                      src="/banner/product-5.jpg"
                      width={500}
                      height={333}
                      layout="intrinsic"
                      alt="Carousel Image"
                      className="object-cover rounded-xl brightness-75"
                    />
                  </div>
                  <div className="lg:my-3 lg:ml-8">
                    <p>
                      Radiodetection adalah perusahaan yang mengembangkan
                      peralatan-peralatan yang diperlukan perusahaan gas,
                      listrik, air, dan lainnya untuk mendeteksi utilitas bawah
                      tanah seperti kabel dan pipa.
                    </p>
                    <br />
                    <p>
                      Menemukan dan menghindari kerusakan pada jaringan
                      infrastruktur di bawah permukaan secara akurat
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:product-item product-item-md lg:text-left text-center">
              <div className="lg:w-1/2 text-md text-slate-400">
                <div className="lg:mr-14 md:mt-5">
                  <p className="text-2xl font-semibold">
                    Concrete Scanning & Assessment
                    <RightArrowIcon className="w-6 h-6 stroke-2  ml-2 lg:inline hidden" />
                  </p>
                  <div className="lg:w-1/2 lg:hidden lg:my-10 md:my-6">
                    <Image
                      src="/banner/product-6.jpg"
                      width={500}
                      height={333}
                      layout="intrinsic"
                      alt="Carousel Image"
                      className="object-cover rounded-xl brightness-75"
                    />
                  </div>
                  <div className="lg:my-3 ">
                    <p>
                      Asesmen elemen struktur dalam beton seperti rebar,
                      mengukur ketebalan pelat, mendeteksi rongga, dan menemukan
                      kabel/pipa.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:block md:hidden mt-10">
                <Image
                  src="/banner/product-6.jpg"
                  width={500}
                  height={333}
                  layout="intrinsic"
                  alt="Carousel Image"
                  className="object-cover rounded-xl brightness-75"
                />
              </div>
            </div>
            <div className="lg:product-item product-item-md lg:text-left text-center">
              <div className="lg:w-1/2 lg:block md:hidden mt-10">
                <Image
                  src="/banner/product-7.jpg"
                  width={500}
                  height={333}
                  layout="intrinsic"
                  alt="Carousel Image"
                  className="object-cover rounded-xl brightness-75"
                />
              </div>
              <div className="lg:w-1/2 text-md text-slate-400">
                <div className="lg:ml-14 md:mt-5">
                  <p className="text-2xl font-semibold">
                    <LeftArrowIcon className="w-6 h-6 stroke-2  mr-2 lg:inline hidden" />
                    Microseismic / HVSR
                  </p>
                  <div className="lg:w-1/2 lg:hidden lg:my-10 md:my-6">
                    <Image
                      src="/banner/product-7.jpg"
                      width={500}
                      height={333}
                      layout="intrinsic"
                      alt="Carousel Image"
                      className="object-cover rounded-xl brightness-75"
                    />
                  </div>
                  <div className="lg:my-3 lg:ml-8">
                    <p>
                      Mikroseismik dapat digunakan untuk penyelidikan kerentanan
                      Tanah, deteksi ketebalan batuan lunak, dan penentuan zona
                      rekahan tinggi
                    </p>
                    <br />
                    <p>
                      Dengan mengetahui persebaran lapisan lunak tersebut dapat
                      membantu anda dalam menghindari terjadinya masalah sebagai
                      berikut ; kerusakan pada konstruksi bangunan, kelongsoran
                      pada jalan, keruntuhan jembatan, penurunan elevasi jalan
                      (differential settlement), dll
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:product-item product-item-md lg:text-left text-center">
              <div className="lg:w-1/2 text-md text-slate-400">
                <div className="lg:mr-14 md:mt-5">
                  <p className="text-2xl font-semibold">
                    Multichannel Analysis Surface Wave (MASW)
                    <RightArrowIcon className="w-6 h-6 stroke-2  ml-2 lg:inline hidden" />
                  </p>
                  <div className="lg:w-1/2 lg:hidden lg:my-10 md:my-6">
                    <Image
                      src="/banner/product-8.jpg"
                      width={500}
                      height={333}
                      layout="intrinsic"
                      alt="Carousel Image"
                      className="object-cover rounded-xl brightness-75"
                    />
                  </div>
                  <div className="lg:my-3 ">
                    <p>
                      Survey multi-channel analysis of surface waves (MASW)
                      adalah salah satu metode survey dari soil investigation
                      yang berfungsi untuk mengetahui tingkat kekerasan tanah
                      berdasarkan kecepatan gelombang geser (Vs) yang bisa
                      diukur dari permukaan.
                    </p>
                    <br />
                    <p>
                      Jasa survey MASW dan scan beton akan membuat pekerjaan
                      konstruksi menjadi lebih mudah dan efisien dengan
                      memetakan lapisan lunak secara regional sehingga bisa
                      menjadi langkah mitigasi akan terjadi masalah yang timbul
                      akibat tanah lunak.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:block md:hidden mt-10">
                <Image
                  src="/banner/product-8.jpg"
                  width={500}
                  height={333}
                  layout="intrinsic"
                  alt="Carousel Image"
                  className="object-cover rounded-xl brightness-75"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact-section" className="lg:my-20 md:my-10">
        <div className="text-center w-full"></div>
        <div className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto  text-slate-900 rounded-lg shadow-md">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight dark:text-slate-100">
                Lets talk about everything!
              </h2>
              <div className="text-slate-700 dark:text-slate-400 mt-8">
                Hate forms? Send us an <span className="underline">email</span>
                instead.
              </div>
            </div>
            <div className="mt-8 text-center"></div>
          </div>
          <div className="text-slate-600 dark:text-slate-400">
            <form>
              <label className="text-sm font-bold">Full Name</label>
              <input
                className="w-full bg-slate-200 dark:bg-slate-800 border-transparent text-slate-900 dark:text-slate-100 mt-2 rounded-lg focus:outline-none focus:shadow-outline peer"
                type="text"
                placeholder=""
              />
              <p className="my-2 hidden peer-invalid:block text-pink-600 text-sm">
                Please enter your name
              </p>
              <div className="mt-6">
                <label className="text-sm font-bold">Email</label>
                <input
                  className="w-full bg-slate-200 dark:bg-slate-800 border-transparent text-slate-900 dark:text-slate-100 mt-2 rounded-lg focus:outline-none focus:shadow-outline peer"
                  type="email"
                />
                <p className="my-2 hidden peer-invalid:block text-pink-600 text-sm">
                  Please enter a valid email address
                </p>
              </div>
              <div className="mt-6">
                <label className="text-sm font-bold">Whatsapp</label>
                <input
                  type="tel"
                  className="w-full bg-slate-200 dark:bg-slate-800 border-transparent text-slate-900 dark:text-slate-100 mt-2 rounded-lg focus:outline-none focus:shadow-outline peer"
                  placeholder=""
                />
                <p className="my-2 hidden peer-invalid:block text-pink-600 text-sm">
                  Please enter a valid whatsapp number
                </p>
              </div>
              <div className="mt-6">
                <label className="text-sm font-bold">Message</label>
                <textarea
                  title="Message"
                  className="h-32 w-full bg-slate-200 dark:bg-slate-800 border-transparent text-slate-900 dark:text-slate-100 mt-2 rounded-lg focus:outline-none focus:shadow-outline peer"
                />
                <p className="my-2 hidden peer-invalid:block text-pink-600 text-sm">
                  This field cannot empty
                </p>
              </div>
              <div className="mt-6 text-right">
                <button
                  className="text-sm font-bold tracking-wide bg-indigo-500 dark:bg-indigo-800 py-2 px-4 text-slate-100 rounded-lg hover:bg-indigo-600 dark:hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
