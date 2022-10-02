import Image from "next/image";

const Home = () => {
  return (
    <>
      <div
        id="carousels"
        className="shadow-lg relative max-w-full max-h-[680px] rounded-3xl"
      >
        <div className="absolute my-[25%] backdrop-blur-sm w-full h-20 bg-white/30 z-10 text-center text-white">
          <p className="text-2xl my-5">Geoenvi Service Company</p>
        </div>
        <Image
          src="/banner/carousel-2.jpg"
          width={1280}
          height={680}
          layout="intrinsic"
          alt="Carousel Image"
          className="object-cover rounded-3xl brightness-75"
        />
      </div>

      <div id="about" className="m-10 flex">
        <div className="w-[50%] mx-10">
          <p className="text-lg underline underline-offset-4 uppercase text-slate-600 font-semibold">
            About Our Company
          </p>
          <p className="text-2xl font-semibold my-10">
            With access to major suppliers and manufacturers around the globe.
          </p>
        </div>
        <div className="w-[50%] text-md text-slate-400">
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

      <div className="my-10 shadow-lg relative max-w-full max-h-[400px] rounded-3xl">
        <div className="absolute z-10 mx-10 text-white">
          <p className="uppercase my-[5em] text-slate-600 font-semibold">
            What Can We Do For You?
          </p>
          <div className="my-[5em] px-2 backdrop-blur-sm w-[40%] h-40 rounded-md bg-white/10">
            <p className="text-xl  font-semibold my-2">Hedging</p>
            <p className="text-sm my-5 ">
              As a part of TTOIL’s commitment to our partners, the company
              offers a range of hedge services intended to mitigate the effects
              of the inherent commodity trading risks by maintaining a
              diversified portfolio of physical and paper instruments geared to
              protect the company’s and our client’s capital.
            </p>
          </div>
        </div>
        <Image
          src="/banner/carousel-3.jpg"
          width={1280}
          height={400}
          layout="intrinsic"
          alt="Carousel Image"
          className="object-cover rounded-3xl brightness-75"
        />
      </div>

      <div id="services" className="m-10 flex">
        <div className="w-[50%] mx-10">
          <p className="text-lg underline underline-offset-4 uppercase text-slate-600 font-semibold">
            Services
          </p>
          <p className="text-2xl font-semibold my-10">Our Services</p>
        </div>
        <div className="w-[50%] text-md text-slate-400">
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

      <div id="products" className="rounded-3xl bg-slate-50">
        <div className="mx-10">
          <div className="m-10 py-5">
            <p className="text-lg underline underline-offset-4 uppercase text-slate-600 font-semibold my-5">
              Products
            </p>
            <div className="product-item">
              <div className="w-[50%] my-10">
                <Image
                  src="/banner/product-1.jpg"
                  width={500}
                  height={333}
                  layout="intrinsic"
                  alt="Carousel Image"
                  className="object-cover rounded-xl brightness-75"
                />
              </div>
              <div className="w-[50%] text-md text-slate-400">
                <div className="w-[500px] ml-14">
                  <p className="text-2xl font-semibold my-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 stroke-2 inline mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                      />
                    </svg>
                    Our Fuel Oil & Vacuum Gasoil
                  </p>
                  <div className="my-3 ml-8">
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
            <div className="product-item ">
              <div className="w-[50%] text-md text-slate-400">
                <div className="w-[500px]">
                  <p className="text-2xl font-semibold my-10">
                    Middle Distillates
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 stroke-2 inline ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </p>
                  <div className="my-3">
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
              <div className="w-[50%] my-10 ml-28">
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
            <div className="product-item">
              <div className="w-[50%] my-10">
                <Image
                  src="/banner/product-3.jpg"
                  width={500}
                  height={333}
                  layout="intrinsic"
                  alt="Carousel Image"
                  className="object-cover rounded-xl brightness-75"
                />
              </div>
              <div className="w-[50%] text-md text-slate-400">
                <div className="w-[500px] ml-14">
                  <p className="text-2xl font-semibold my-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 stroke-2 inline mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                      />
                    </svg>
                    Naptha
                  </p>
                  <div className="my-3 ml-8">
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
            <div className="product-item ">
              <div className="w-[50%] text-md text-slate-400">
                <div className="w-[500px]">
                  <p className="text-2xl font-semibold my-10">
                    Crude
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 stroke-2 inline ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </p>
                  <div className="my-3">
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
              <div className="w-[50%] my-10 ml-28">
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
            <div className="product-item">
              <div className="w-[50%] my-10">
                <Image
                  src="/banner/product-5.jpg"
                  width={500}
                  height={333}
                  layout="intrinsic"
                  alt="Carousel Image"
                  className="object-cover rounded-xl brightness-75"
                />
              </div>
              <div className="w-[50%] text-md text-slate-400">
                <div className="w-[500px] ml-14">
                  <p className="text-2xl font-semibold my-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 stroke-2 inline mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                      />
                    </svg>
                    Gasoline
                  </p>
                  <div className="my-3 ml-8">
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
            <div className="product-item ">
              <div className="w-[50%] text-md text-slate-400">
                <div className="w-[500px]">
                  <p className="text-2xl font-semibold my-10">
                    Energy of the Future
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 stroke-2 inline ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </p>
                  <div className="my-3">
                    <p>
                      As a responsible participant of the energy market, TTOIL
                      is moving forward to make sure our energy becomes cleaner,
                      more affordable, and widely vailable.
                    </p>
                    <br />
                    <p>
                      AZOIL is invested in renewable power generation with a
                      firm view to expand this commitment both geographically
                      and financially.
                    </p>
                    <br />
                    <p>
                      We take an active part in industry discussions for
                      assessment and deployment of blue and green hydrogen
                      solutions as key fuels of the future. Meeting the global
                      need for clean hydrogen is fundamental to TTOIL’s vision
                      of a cleaner world with zero carbon emissions. We are
                      engaging and will continue to engage with a broad range of
                      stakeholders cross the industry in Europe, Middle East and
                      the Former Soviet Union to make the hydrogen fuelled world
                      a reality.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[50%] my-10 ml-28">
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
            <div className="product-item">
              <div className="w-[50%] my-10">
                <Image
                  src="/banner/product-7.jpg"
                  width={500}
                  height={333}
                  layout="intrinsic"
                  alt="Carousel Image"
                  className="object-cover rounded-xl brightness-75"
                />
              </div>
              <div className="w-[50%] text-md text-slate-400">
                <div className="w-[500px] ml-14">
                  <p className="text-2xl font-semibold my-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 stroke-2 inline mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                      />
                    </svg>
                    Petrochemical Products
                  </p>
                  <div className="my-3 ml-8">
                    <p>
                      Petrochemicals are sophisticated products, and Coral
                      Energy delivering them to customers. Our dynamic
                      petrochemicals team runs positions in
                    </p>
                    <br />
                    <div className="list">
                      <ul className="flex list-disc ml-4">
                        <div className="w-[33%]">
                          <li>Acetates</li>
                          <li>Caustic Soda</li>
                          <li>Ethylene</li>
                          <li>PA</li>
                          <li>Polyethylene</li>
                          <li>VAM</li>
                        </div>
                        <div className="w-[33%]">
                          <li>Acrylics</li>
                          <li>DEG</li>
                          <li>EDC</li>
                          <li>PVC</li>
                          <li>Polypropylene</li>
                          <li>VCM</li>
                        </div>
                        <div className="w-[33%]">
                          <li>Benzene</li>
                          <li>2EH</li>
                          <li>IPA</li>
                          <li>PTA</li>
                          <li>Styrene Monomer</li>
                        </div>
                      </ul>
                    </div>
                    {/* <ul className="list-disc w-[33%] row">
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                      <li>10</li>
                      <li>11</li>
                      <li>12</li>
                      <li>13</li>
                      <li>14</li>
                      <li>15</li>
                      <li>16</li>
                      <li>17</li>
                    </ul> */}
                    <br />
                    <p>
                      Our petrochemical portfolio grows 35 to 50% year on year
                      in terms of quantity, and the product range constantly
                      grows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item ">
              <div className="w-[50%] text-md text-slate-400">
                <div className="w-[500px]">
                  <p className="text-2xl font-semibold my-10">
                    Dry Bulk
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 stroke-2 inline ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </p>
                  <div className="my-3">
                    <p>
                      AZOIL’s comprehensive and innovative approach to commodity
                      markets is not limited to liquid hydrocarbons.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[50%] my-10 ml-28">
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
    </>
  );
};

export default Home;
