"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import watchImage from "../../assets/portfolios/portfolio-1.png";
import Ipad from "../../assets/portfolios/portfolio-1.png";
import IPhone from "../../assets/slide1-iphone.png";
import Image from "next/image";

const SliderCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    // autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="relative">
      <Image
        className="lg:w-[640px] w-full md:p-20 p-0 h-full absolute"
        src={watchImage}
        alt="slider image"
        placeholder="blur"
      />
      <Slider className="pb-5" {...settings}>
        <div className="borer-0 outline-0  rounded-lg">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 lg:h-[80vh] h-full rounded-lg lg:flex justify-between items-center lg:px-10 px-2">
            <div className="lg:w-[700px] w-full">
              <div className="pt-10 lg:pt-0">
                <p className="mx-auto lg:mx-0 py-[6px] bg-red-600 text-white font-bold text-[10px] uppercase rounded-ee-lg rounded-ss-lg text-center mb-4">
                  Please call us for more information. Phone: 02 9569 1113 or
                  0449 710 008 Shop Front Sticker
                </p>
              </div>

              <h1 className="lg:text-[50px] md:text-[50px] text-[35px] font-bold leading-[42px] md:leading-[60px] lg:leading-[60px] text-white text-center lg:text-left">
                Cotton Tshirts, Polo shirts DTG / Cad Cut printing.
              </h1>

              <h3 className="text-[16px] font-medium text-white mt-6 uppercase leading-6 text-center lg:text-left">
                T-Shirt, Polo Shirt, Hat, Gym Wears, Sports Wears, Jersey,
                Aprons, Bag, USB Printing | *conditions apply
              </h3>
            </div>

            <div className="lg:w-[640px] h-full w-full mt-10 lg:mt-0">
              <Image
                className="lg:w-[640px] w-full md:p-20 p-0 h-full "
                src={watchImage}
                alt="slider image"
                placeholder="blur"
              />
            </div>
          </div>
        </div>

        {/* slider 2 */}
        <div className="borer-0 outline-0">
          <div className="bg-[#192C57] lg:h-[450px] h-full rounded-lg lg:flex justify-between items-center lg:pl-20 ">
            <div className="lg:w-[550px] w-full">
              <div className="pt-10 lg:pt-0">
                <p className="w-[140px] mx-auto lg:mx-0 py-[6px] bg-red-600 text-white font-bold text-[10px] uppercase rounded-ee-lg rounded-ss-lg text-center mb-4">
                  today deal
                </p>
              </div>

              <h1 className="lg:text-[50px] md:text-[50px] text-[37px] font-bold leading-[60px] md:leading-[80px] lg:leading-[60px] text-white text-center lg:text-left">
                Best iPad Deals{" "}
              </h1>
              <h1 className="lg:text-[50px] md:text-[50px] text-[37px] font-bold leading-[60px] md:leading-[80px] lg:leading-[60px]  text-white text-center lg:text-left">
                At A Glance
              </h1>
              <h3 className="text-[18px] font-medium text-white uppercase leading-10 text-center lg:text-left">
                free shipping by Ecomall
              </h3>

              <div className="text-white text-[20px] mt-5 text-center lg:text-left">
                Form{" "}
                <span className="font-bold text-[24px] text-[#fcc904]">
                  $599.00
                </span>
              </div>

              <div className="w-[170px] mx-auto lg:mx-0">
                <button className="w-[170px] h-[48px] text-[16px] text-white mt-6 bg-[#0088FF] font-bold rounded-md uppercase">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="lg:w-[700px] w-full h-full mt-10 lg:mt-0 flex items-center overflow-hidden">
              <Image
                className="w-full lg:h-[670px] h-full object-cover "
                src={Ipad}
                alt="slider image"
                placeholder="blur"
              />
            </div>
          </div>
        </div>

        {/* slider 3 */}
        <div className="borer-0 outline-0">
          <div className="bg-[#202F22] lg:h-[450px] h-full rounded-lg lg:flex justify-between items-center lg:pl-20 ">
            <div className="lg:w-[550px] w-full">
              <div className="pt-10 lg:pt-0">
                <p className="w-[140px] mx-auto lg:mx-0 py-[6px] bg-red-600 text-white font-bold text-[10px] uppercase rounded-ee-lg rounded-ss-lg text-center mb-4">
                  big sale
                </p>
              </div>

              <h1 className="lg:text-[50px] md:text-[50px] text-[37px] font-bold leading-[60px] md:leading-[80px] lg:leading-[60px] text-white text-center lg:text-left">
                IPhone On Sell At{" "}
              </h1>
              <h1 className="lg:text-[50px] md:text-[50px] text-[37px] font-bold leading-[60px] md:leading-[80px] lg:leading-[60px]  text-white text-center lg:text-left">
                Up To 25% Off
              </h1>
              <h3 className="text-[18px] font-medium text-white uppercase leading-10 text-center lg:text-left">
                by top product on Ecomall
              </h3>

              <div className="text-white text-[20px] mt-5 text-center lg:text-left">
                Form{" "}
                <span className="font-bold text-[24px] text-[#fcc904]">
                  $499.00
                </span>
              </div>

              <div className="w-[170px] mx-auto lg:mx-0">
                <button className="w-[170px] h-[48px] text-[16px] text-white mt-6 bg-[#0088FF] font-bold rounded-md uppercase">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="lg:w-[650px] w-full h-full mt-10 lg:mt-0  overflow-hidden">
              <Image
                className="w-full lg:h-[630px] h-full mt-5 object-contain"
                src={IPhone}
                alt="slider image"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderCard;
