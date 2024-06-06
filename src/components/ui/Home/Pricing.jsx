 const Pricing = () => {
  return (
    <div id="pricing" className="xl_screen md:mt-20 mt-10 sp">
      <div className="xl_screen" id="about-us">
        <header>
          <h1
            style={{ fontFamily: "Fira Sans, sans-serif" }}
            className="title text-center mt-8"
          >
            Pricing
          </h1>
        </header>
        <p
          className="p max-w-[1000px] mx-auto md:m-12 m-8 text-center text-[#172b43] text-[1.44rem]"
          style={{
            fontWeight: "100",
            lineHeight: "2.4rem",
            fontFamily: "Hind Vadodara, sans-serif",
          }}
        >
          We provide all your printing needs. Please call us for more Products
          and quotation at 02 9569 1113 or 0449 710 008
        </p>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-12 mt-6">
        {/* pricing card */}

        <div className="content h-full !w-full">
          <div className="wiper relative">
            <div className="card px-6 py-16 h-full">
              <div className="icon ">
                <i className="material-icons md-36 font-bold">01</i>
              </div>
              <p className=" mt-[35px] text-[1.2rem] !mt-30 text-center !text-white font-semibold  tracking-wider">
                Business Cards
              </p>
              <p className="price_title mt-[10px] font-bold text-[1.6rem] !mt-30 text-center text-white tracking-wider">
                $65.00 + GST
              </p>

              <p className="mt-[32px] text-center !text-white font-thin  tracking-wider">
                <span className="font-bold">Quantity </span> 250
              </p>
              <dir className="border-t-2 border-gray-900 mt-4 w-full"></dir>

              <p className="mt-[32px] text-center !text-white font-thin  tracking-wider">
                <span className="font-bold">Thickness </span> 310 GSM
              </p>
              <dir className="border-t-2 border-gray-900 mt-4 w-full"></dir>

              <p className="mt-[32px] text-center !text-white font-thin  tracking-wider">
                <span className="font-bold">Side Single </span> Sided
              </p>
              <dir className="border-t-2 border-gray-900 mt-4 w-full"></dir>

              <p className="mt-[15px] text-center !text-white font-thin  tracking-wider">
                <span className="font-bold">Colour</span> Full Colour
              </p>
              <dir className="border-t-2 border-gray-900 mt-4 w-full"></dir>

              <button className="  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  py-2 px-4 rounded-full hover:animate-pulse mt-8 font-semibold uppercase text-[17px] text-white">
                KICKSTART YOUR BUSINESS
              </button>
            </div>

            <div className="  cardBg cardBg2 "></div>
          </div>
        </div>

        {/* pricing card */}

        <div className=" h-full !w-full  ">
          <div className="wiper relative">
            <div className="card px-6 py-16 h-full">
              <div className="icon ">
                <i className="material-icons md-36 font-bold">02</i>
              </div>
              <p className=" mt-[35px] text-[1.2rem] !mt-30 text-center text-white font-semibold  tracking-wider">
                Dl Flyer
              </p>
              <p className="price_title mt-[10px] font-bold text-[1.6rem] !mt-30 text-center text-white tracking-wider">
                $155 + GST (Online Only)
              </p>

              <p className="mt-[32px] text-center !text-white font-thin  tracking-wider">
                <span className="font-bold">Quantity </span> 500
              </p>
              <dir className="border-t-2 border-gray-900 mt-4 w-full"></dir>

              <p className="mt-[32px] text-center !text-white font-thin  tracking-wider">
                <span className="font-bold">Thickness </span> 150 GSM
              </p>
              <dir className="border-t-2 border-gray-900 mt-4 w-full"></dir>

              <p className="mt-[32px] text-center !text-white font-thin  tracking-wider">
                <span className="font-bold">Side Single </span> Sided
              </p>
              <dir className="border-t-2 border-gray-900 mt-4 w-full"></dir>

              <p className="mt-[15px] text-center !text-white font-thin  tracking-wider">
                <span className="font-bold">Colour</span> Full Colour
              </p>
              <dir className="border-t-2 border-gray-900 mt-4 w-full"></dir>

              <button className="price_button  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  py-2 px-4 rounded-full hover:animate-pulse mt-8 font-semibold uppercase text-[17px] text-white">
                START YOUR BUSINESS
              </button>
            </div>

            <div className="  cardBg cardBg2 "></div>
          </div>
        </div>
        {/* pricing card */}

        <div className=" h-full !w-full  ">
          <div className="wiper relative">
            <div className="card px-6 py-16 h-full">
              <div className="icon ">
                <i className="material-icons md-36 font-bold">03</i>
              </div>
              <p className=" mt-[35px] text-[1.2rem] !mt-30 text-center text-white font-semibold  tracking-wider">
              Invoice Books
              </p>
              <p className="price_title mt-[10px] font-bold text-[1.6rem] !mt-30 text-center text-white tracking-wider">
              $325.00 + GST
              </p>

              <p className="mt-[32px] text-center !text-white font-thin  tracking-wider">
                <span className="font-bold">Quantity </span> 5
              </p>
              <dir className="border-t-2 border-gray-900 mt-4 w-full"></dir>

              <p className="mt-[32px] text-center !text-white font-thin  tracking-wider">
                <span className="font-bold"> Pages  </span> Side Single 
              </p>
              <dir className="border-t-2 border-gray-900 mt-4 w-full"></dir>

              <p className="mt-[32px] text-center !text-white font-thin  tracking-wider">
                <span className="font-bold">Side Single  </span>  Sided
              </p>
              <dir className="border-t-2 border-gray-900 mt-4 w-full"></dir>

              <p className="mt-[15px] text-center !text-white font-thin  tracking-wider">
                <span className="font-bold">Colour</span> B&W
              </p>
              <dir className="border-t-2 border-gray-900 mt-4 w-full"></dir>

              <button className="price_button  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  py-2 px-4 rounded-full hover:animate-pulse mt-8 font-semibold uppercase text-[17px] text-white">
                START YOUR BUSINESS
              </button>
            </div>

            <div className=" cardBg cardBg2 "></div>
          </div>
        </div>

      </div>
      <div id="contact"></div>
    </div>
  );
};


export default Pricing