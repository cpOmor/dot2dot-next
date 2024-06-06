"use client";

import { useState } from "react";
import portfolio1 from "./../../../assets/portfolios/portfolio-1.png";
import portfolio2 from "./../../../assets/portfolios/portfolio-2.png";
import portfolio3 from "./../../../assets/portfolios/portfolio-3.png";
import portfolio4 from "./../../../assets/portfolios/portfolio-4.png";
import portfolio5 from "./../../../assets/portfolios/portfolio-5.png";
import portfolio6 from "./../../../assets/portfolios/portfolio-6.png";
import portfolio7 from "./../../../assets/portfolios/portfolio-7.png";
import portfolio8 from "./../../../assets/portfolios/portfolio-8.png";
import portfolio9 from "./../../../assets/portfolios/portfolio-9.png";
import Image from "next/image";

const Projects = () => {
  const [active, setActive] = useState("all");
  const project = [
    {
      action: "Digital Printing",
      image: portfolio1,
      title: "Digital Printing",
      tag: "Digital printing Digital printing in Sydenham Digital printing in Marrickville  Digital printing near me",
      description: "Hot Items",
    },
    {
      action: "Digital Printing",
      image: portfolio2,
      title: "Digital Printing ",
      tag: "Photo copy Photo copy service Photo copy service in Marrickville Document printing Document printing in in Sydenham Document printing service",
      description: "Document Copy & Printing",
    },
    {
      action: "Digital Printing",
      image: portfolio3,
      title: " Digital Printing ",
      tag: "Stationery design Shop Display  Stationery design in Marrickville  Stationery design in Sydenham",
      description: "Stationery",
    },
    {
      action: "Large Format Printing",
      image: portfolio4,
      title: " Large Format Printing ",
      tag: "",
      description: "Signage ",
    },
    {
      action: "Large Format Printing",
      image: portfolio5,
      title: " Large Format Printing ",
      tag: "Shop Display in Stationery , Stationery design in Marrickville  Stationery design in Sydenham",
      description: "Shop Display",
    },
    {
      action: "Large Format Printing",
      image: portfolio6,
      title: " Large Format Printing ",
      tag: "Car Wrapping Car Wrapping near me Car Wrapping in Marrickville Car Wrapping printing in Sydenham",
      description: "Car Wrapping",
    },
    {
      action: "Large Format Printing",
      image: portfolio7,
      title: " Large Format Printing ",
      tag: "Graphic Design Graphic Building online Graphic Design Graphic Design in online",
      description: "Graphic Design Services",
    },
    {
      action: "Large Format Printing",
      image: portfolio8,
      title: " Services & Special Items ",
      tag: "Website Design Website Building online Website Design Website Design in online Responsive Website Design",
      description: "Web Design Services",
    },
    {
      action: "Large Format Printing",
      image: portfolio9,
      title: " Services & Special Items ",
      tag: "",
      description: "Specialty Products",
    },
  ];

  const [toShow, setToShow] = useState(6);

  const itemsToDisplay = project.slice(0, toShow);

  return (
    <div id="portfolio" className="md:mt-[100px] mt-[50px] ">
      <div>
        <header>
          <h1
            style={{ fontFamily: "Fira Sans, sans-serif" }}
            className="title text-center mt-8"
          >
            Featured Projects
          </h1>
        </header>

        <section
          className="md:mt-4 mt-10 md:flex items-center justify-center bg-white w-[80%] md:gap-2 gap-4 mx-auto"
          data-isotope-id="#portfolio-534514"
        >
          <div className="grid md:flex justify-center items-center grid-cols-1 gap-2">
            <a
              className="mx-auto rounded-full text-[#69798d] font-sans md:text-xl font-bold bg-transparent border-none bg-[#f5f5f5] px-6 py-1 cursor-pointer active:text-[#6245fe] hover:text-[#6245fe]"
              onClick={() => setActive("all")}
            >
              All Work
            </a>
            <a
              className="mx-auto rounded-full text-[#69798d] font-sans md:text-xl font-bold bg-transparent border-none bg-[#f5f5f5] px-6 py-1 cursor-pointer active:text-[#6245fe] hover:text-[#6245fe]"
              onClick={() => setActive("Digital Printing")}
            >
              Digital Printing
            </a>
            <a
              className="mx-auto rounded-full text-[#69798d] font-sans md:text-xl font-bold bg-transparent border-none bg-[#f5f5f5] px-6 py-1 cursor-pointer active:text-[#6245fe] hover:text-[#6245fe]"
              onClick={() => setActive("Large Format Printing")}
            >
              Large Format Printing
            </a>
            <a
              className="mx-auto rounded-full text-[#69798d] font-sans md:text-xl font-bold bg-transparent border-none bg-[#f5f5f5] px-6 py-1 cursor-pointer active:text-[#6245fe] hover:text-[#6245fe]"
              onClick={() => setActive("Services & Special Items")}
            >
              Services & Special Items
            </a>
          </div>
        </section>
      </div>

      <div className="grid md:grid-cols-3  grid-cols-1 md:gap-y-16 gap-y-8 gap-8 mt-[40px] xl_screen mx-auto">
        {itemsToDisplay?.map(
          (item, i) =>
            (item.action === active || active === "all") && (
              <div style={{ transitionDelay: `${i * 1}s` }} key={i}>
                {" "}
                <div>
                  <>
                    <div className="card !rounded-t-[20px]">
                      <Image
                        src={item?.image}
                        alt={item?.tag}
                        width={300}
                        height={300}
                        className="rounded-t-[10px] w-[100%]"
                      />
                      <div className="w-full px-4 py-4">
                        <p
                          style={{
                            fontFamily: "Fira Sans, sans-serif",
                            fontWeight: "100",
                          }}
                          className="  mt-[10px] text-[16px]  !text-white  tracking-wider"
                        >
                          {item?.title}
                        </p>
                        <p className="  mt-[10px] text-[1.4rem] !mt-30  !text-white font-semibold tracking-wider">
                          {item?.description}
                        </p>
                      </div>
                    </div>
                  </>
                </div>
              </div>
            )
        )}
      </div>

      {toShow < project.length && active === "all" && (
        <>
          <div className="flex justify-center">
            <button
              onClick={() => setToShow(project.length)}
              className="mt-10 hover:mb-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  py-2 px-4 rounded-full hover:animate-pulse font-semibold uppercase text-[17px] text-white"
            >
              DISCOVER MORE WORK
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
