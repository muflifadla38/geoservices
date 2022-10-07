import Image from "next/image";
import { LeftArrowIcon, RightArrowIcon } from "../components/Icons";

const Home = () => {
  return (
    <>
      <div
        id="hero-section"
        className="shadow-lg relative w-full lg:h-[40rem] md:h-[37rem] lg:rounded-3xl sm:rounded-2xl bg-cover bg-center bg-[url('/banner/carousel-2.jpg')]"
      >
        <div className="flex items-center justify-center w-full  lg:rounded-3xl sm:rounded-2xl h-full bg-slate-900 bg-opacity-50">
          <div className="text-center text-slate-100">
            <p className="text-2xl font-semibold uppercase lg:text-3xl">
              TTOIL Service Company
            </p>
            <button className="px-6 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-300 transform bg-sky-600 rounded-md w-auto hover:bg-sky-700 focus:outline-none focus:bg-blue-600">
              <span>Explore</span>
            </button>
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
        <div className="flex items-center lg:justify-start md:justify-center w-full lg:rounded-3xl sm:rounded-2xl h-full bg-slate-900 bg-opacity-50 absolute z-50">
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
        className="lg:my-20 md:my-10 lg:rounded-3xl md:rounded-xl bg-slate-50 shadow-lg"
      >
        <div className="lg:mx-10 md:py-1 md:px-5">
          <div className="lg:m-10 m-5">
            <p className="text-lg underline underline-offset-4 uppercase text-slate-600 font-semibold my-5">
              Products
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
                    Fuel Oil & Vacuum Gasoil
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
                      TTOIL started out as a fuel oil and a VGO trader, and this
                      is what we are really good at. Every month we move over 1
                      million tons of heavy feedstocks. Half of this is used by
                      refineries to supplement their incoming crude streams,
                      andthe other half as blendstock for bunker fuel.
                    </p>
                    <br />
                    <p>
                      Our fuel oil trading geography is extensive. We source
                      fuel oil and VGO from Russia, Kazakhstan, Turkmenistan,
                      Algeria, West Africa and take it to major trading hubs
                      including Rotterdam, Fujairah, Singapore, Turkey or
                      directly to refineries. We serve marine bunker markets
                      through long term partnerships with fleet owners and
                      bunkering companies. We add value by carefully selecting
                      incoming streams, using our extensive terminal network to
                      store and blend them where required, maintaining the
                      quality throughout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:product-item product-item-md lg:text-left text-center">
              <div className="lg:w-1/2 text-md text-slate-400">
                <div className="lg:mr-14 md:mt-5">
                  <p className="text-2xl font-semibold">
                    Middle Distillates
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
                      Middle distillates form the core of commercial road
                      transport, industrial and marine fuels. TTOIL’s middle
                      distillates portfolio serves industrial customers and
                      retail operators in many countries, ranging from Europe to
                      Americas and Asia Pacific.
                    </p>
                    <br />
                    <p>
                      We cover the whole range of generic and special fuels –
                      road diesel, jet fuel, low and high sulphur gasoil for
                      marine and industrial applications.
                    </p>
                    <br />
                    <p>
                      TTOIL serve industrial customers and distributors delivery
                      middle distillate fuels and components with perfect
                      timing, execution, and customer service.
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
                    Naptha
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
                      We are a major naphtha supplier to refineries,
                      petrochemical producers and other industrial users all
                      over the globe. Our naphtha turnover has been showing
                      consistent growth, reaching millions of tons annually.
                    </p>
                    <br />
                    <p>
                      The product is sourced in the Former Soviet Union and from
                      major Med producers and is taken to customers worldwide –
                      from Europe to Asia Pacific. Our strategic partnerships
                      with naphtha users in Turkey make us one of the largest
                      suppliers of this feedstock to Turkish refineries and
                      petrochemical companies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:product-item product-item-md lg:text-left text-center">
              <div className="lg:w-1/2 text-md text-slate-400">
                <div className="lg:mr-14 md:mt-5">
                  <p className="text-2xl font-semibold">
                    Crude
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
                      TTOIL is a firmly established crude trader, with offtake
                      agreements and regular purchases from major producers in
                      Russia, Kazakhstan, the Middle East, North Sea, US Gulf
                      Coast and Latin America supplying refineries in Europe,
                      the Med and Asia Pacific.
                    </p>
                    <br />
                    <p>
                      We are very serious about our crude book, and we are
                      constantly working to source new grades and to serve more
                      refiners with the grades and blends they require.
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
                    Gasoline
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
                      Our gasoline book has been consistently growing over the
                      years. We supply customers in Europe and Central Asia with
                      grades appropriate for their jurisdictions.
                    </p>
                    <br />
                    <p>
                      TTOIL’s motor gasoline book is underpinned by our
                      extensive naphtha and component trading operation,
                      strategically positioned storage and strong logistics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:product-item product-item-md lg:text-left text-center">
              <div className="lg:w-1/2 text-md text-slate-400">
                <div className="lg:mr-14 md:mt-5">
                  <p className="text-2xl font-semibold">
                    Gasoline
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
                      Our gasoline book has been consistently growing over the
                      years. We supply customers in Europe and Central Asia with
                      grades appropriate for their jurisdictions.
                    </p>
                    <br />
                    <p>
                      TTOIL’s motor gasoline book is underpinned by our
                      extensive naphtha and component trading operation,
                      strategically positioned storage and strong logistics.
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
                    Petrochemical Products
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
                      Petrochemicals are sophisticated products, and Coral
                      Energy delivering them to customers. Our dynamic
                      petrochemicals team runs positions in
                    </p>
                    <br />
                    <div className="list lg:block md:text-left flex md:gap-x-5 md:justify-center">
                      <ul className="flex list-disc ml-4">
                        <div className="">
                          <li>Acetates</li>
                          <li>Caustic Soda</li>
                          <li>Ethylene</li>
                          <li>PA</li>
                          <li>Polyethylene</li>
                          <li>VAM</li>
                        </div>
                        <div className="mx-14">
                          <li>Acrylics</li>
                          <li>DEG</li>
                          <li>EDC</li>
                          <li>PVC</li>
                          <li>Polypropylene</li>
                          <li>VCM</li>
                        </div>
                        <div className="">
                          <li>Benzene</li>
                          <li>2EH</li>
                          <li>IPA</li>
                          <li>PTA</li>
                          <li>Styrene Monomer</li>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:product-item product-item-md lg:text-left text-center">
              <div className="lg:w-1/2 text-md text-slate-400">
                <div className="lg:mr-14 md:mt-5">
                  <p className="text-2xl font-semibold">
                    Dry Bulk
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
                      AZOIL’s comprehensive and innovative approach to commodity
                      markets is not limited to liquid hydrocarbons.
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
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Lets talk about everything!
              </h2>
              <div className="text-slate-700 mt-8">
                Hate forms? Send us an <span className="underline">email</span>
                instead.
              </div>
            </div>
            <div className="mt-8 text-center"></div>
          </div>
          <div className="">
            <form>
              <label className="text-sm text-slate-600 font-bold">
                Full Name
              </label>
              <input
                className="w-full bg-slate-100 border-transparent text-slate-900 mt-2 rounded-lg focus:outline-none focus:shadow-outline peer"
                type="text"
                placeholder=""
              />
              <p className="my-2 hidden peer-invalid:block text-pink-600 text-sm">
                Please enter your name
              </p>
            </form>
            <div className="mt-6">
              <label className="text-sm text-slate-600 font-bold">Email</label>
              <input
                className="w-full bg-slate-100 border-transparent text-slate-900 mt-2 rounded-lg focus:outline-none focus:shadow-outline peer"
                type="email"
              />
              <p className="my-2 hidden peer-invalid:block text-pink-600 text-sm">
                Please enter a valid email address
              </p>
            </div>
            <div className="mt-6">
              <label className="text-sm text-slate-600 font-bold">
                Whatsapp
              </label>
              <input
                type="tel"
                className="w-full bg-slate-100 border-transparent text-slate-900 mt-2 rounded-lg focus:outline-none focus:shadow-outline peer"
                placeholder=""
              />
              <p className="my-2 hidden peer-invalid:block text-pink-600 text-sm">
                Please enter a valid whatsapp number
              </p>
            </div>
            <div className="mt-6">
              <label className="text-sm text-slate-600 font-bold">
                Message
              </label>
              <textarea className="w-full h-32 bg-slate-100 border-transparent text-slate-900 mt-2 rounded-lg focus:outline-none focus:shadow-outline peer" />
              <p className="my-2 hidden peer-invalid:block text-pink-600 text-sm">
                This field cannot empty
              </p>
            </div>
            <div className="mt-6 text-right">
              <button
                className="text-sm font-bold tracking-wide bg-indigo-500 py-2 px-4 text-slate-100 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                type="submit"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
