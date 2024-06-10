
"use client"
import banner_1 from "../../../assets/banner/banner-01.jpg";
import banner_3 from "../../../assets/banner/banner-03.jpg";
import banner_4 from "../../../assets/banner/banner-04.jpg";
import banner_5 from "../../../assets/banner/banner-05.jpg";
import banner_icon_1 from "../../../assets/banner_icon/banner-icon-01.png";
import banner_icon_2 from "../../../assets/banner_icon/banner-icon-02.png";
import banner_icon_3 from "../../../assets/banner_icon/banner-icon-03.png";
import banner_icon_4 from "../../../assets/banner_icon/banner-icon-04.png";
import banner_icon_5 from "../../../assets/banner_icon/banner-icon-05.png";
import banner_icon_6 from "../../../assets/banner_icon/banner-icon-06.png";
import banner_icon_7 from "../../../assets/banner_icon/banner_icon_7.png";
import banner_icon_07 from "../../../assets/banner_icon/banner-icon-07.png";
import banner_icon_08 from "../../../assets/banner_icon/banner_icon_08.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Banner = () => {
  const banner = [
    {
      id: 1,
      image: banner_3,
      icon: banner_icon_3,
      title: "Trading Hours ",
      tag: "",
      subTitle:
        "Please call us for more information. Phone: 02 9569 1113 or 0449 710 008 ",
      description:
        "Monday - Friday: 9:00 am to 5:00 pm | Saturdays, Sundays and Public holidays Closed.",
    },
    {
      id: 2,
      tag: "T-shirt printing, t shirt printing, t shirt printing near me, custom polo shirts, Custom Polo Shirts Design, Cotton Tshirts printing, Tshirts printing, Tshirts printing in Sydenham, Tshirts printing near me, Polo shirts  printing",
      image: banner_4,
      icon: banner_icon_4,
      title: "Cotton Tshirts, Polo shirts DTG / Cad Cut printing.",
      subTitle:
        "Please call us for more information. Phone: 02 9569 1113 or 0449 710 008 Shop Front Sticker",
      description:
        "T-Shirt, Polo Shirt, Hat, Gym Wears, Sports Wears, Jersey, Aprons, Bag, USB Printing | *conditions apply",
    },

    {
      id: 3,
      tag: "Shop Sticker printing, Shop Sticker printing near me, Sticker printing for Shop, Shop Sticker printing in Marrickville , Shop Sticker printing in Sydenham",
      image: banner_5,
      icon: banner_icon_5,
      title: "Shop Front Sticker",
      subTitle: "",
      description:
        "Stickers, Banners, Light Box, Awning Sign and more.. Please call us for more information. Phone: 02 9569 1113 or 0449 710 008",
    },

    {
      id: 4,
      tag: "Website Design, Website Building, online Website Design, Website Design in online, Responsive Website Design",
      image: banner_1,
      icon: banner_icon_1,
      title: "Beautiful Responsive Website Designs from 399.99",
      description:
        "We create innovative websites that enable our customers to compete and win in their marketplace. Please call us for more information. Phone: 02 9569 1113 or 0449 710 008 ",
    },
    {
      id: 5,
      tag: "Photo copy  Photo copy service Document printing Photo copy service in Marrickville  Document printing in in Sydenham Document printing service",
      image: banner_4,
      icon: banner_icon_6,
      title: "Photo copy, Document printing, Scaning, Laminating.",
      description:
        "Please call us for more information. Phone: 02 9569 1113 or 0449 710 008",
    },

    {
      id: 6,
      tag: " Business card printing Business card printing in near me Flyer printing Flyer digital printing Menu digital printing",
      image: banner_4,
      icon: banner_icon_07,
      title: "Business cards, Flyer & Menus digital printing .",
      description:
        "Please call us for more information. Phone: 02 9569 1113 or 0449 710 008",
    },
    {
      id: 7,
      tag: "Invoice printing Invoice printing nea me  Invoice printing in Sydenham Invoice books printing",
      image: banner_4,
      icon: banner_icon_08,
      title: "A5 & A4 Invoice books printing.",
      description:
        "Please call us for more information. Phone: 02 9569 1113 or 0449 710 008",
    },

    {
      id: 8,
      tag: "Stickers printing Label printing Label printing in Marrickville Label printing in SydenhamCar Label printing ",
      image: banner_4,
      icon: banner_icon_7,
      title: "Stickers, Label printing.",
      description:
        "Please call us for more information. Phone: 02 9569 1113 or 0449 710 008",
    },
    {
      id: 9,
      tag: "Banner printing Banner printing in near me Banner printing service Banner printing in Marrickville  Banner printing in Sydenham",
      image: banner_4,
      icon: banner_icon_2,
      title: "Pull up Banner and Vinyl Banner printing",
      description:
        "Please call us for more information. Phone: 02 9569 1113 or 0449 710 008",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <div className="w-full mt-2 ">
        <Slider {...settings} className="relative sp ">
          {banner.map((item, i) => (
            <div key={i} className="relative xl:h-[90vh] h-[80vh] overflow-hidden">
              {/* image  */}
              <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-70"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[65%] w-full">
                <Image
                  width={600}
                  height={600}
                  className="md:w-60 w-32 mx-auto "
                  src={item?.icon}
                  alt={item?.tag}
                />
                <h2 className="px-4 md:text-[250.5%] md:leading-10 text-[150.5%] mt-2 text-center text-white font-bold w-full">
                  {item?.title}
                </h2>
                <div className="w-[80%] mx-auto mt-4">
                  <p className="md:text-[130.25%] text-center mx-w-[80%] text-[#f9f9ff]">
                    {item?.description}
                  </p>
                  <h2 className="md:text-[110.25%] leading-5 text-[90%] mt-4 font-extrabold text-center mx-w-[80%] text-[#f9f9ff]">
                    {item?.subTitle}
                  </h2>
                </div>
              </div>
              {/* content  */}
              <div className=" h-[100vh]">
                <Image
                  className="w-auto xl:w-full h-[90vh] object-cover  "
                  src={item?.image}
                  width={400}
                  height={400}
                  alt="Home renovations Kitchen remodeling New building construction"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default Banner;
