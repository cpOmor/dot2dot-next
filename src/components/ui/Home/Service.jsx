const Service = () => {
  return (
    <div className="sp xl_screen md:mt-16 mt-10" id="service">
      <div className="flex flex-col md:flex-row md:gap-4 mt-10 max-w-[1000px] mx-auto ">
        <div className=" md:w-1/2">
          {" "}
          <h2
            key={"Services"}
            className="text-center md:text-[2.1rem] text-[1.4rem]   text-[#172b43] font-bold  mx-auto"
          >
            Our Services
          </h2>
          <div className="lx:w-1/2 mt-4">
            <div className="h-[210px] flex flex-col justify-between">
              <p className="bg-black text-white font-bold p-2">
                Digital Printing
              </p>
              <p className="bg-black text-white font-bold p-2 ">
                Website Building
              </p>
              <p className="bg-black text-white font-bold p-2 ">
                Photocopy
              </p>
              <p className="bg-black text-white font-bold p-2">Scanning</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 gap-8 md:mt-0 mt-4">
          <h2
            key={"Services"}
            className="text-center md:text-[2.1rem] text-[1.4rem]   text-[#172b43] font-bold  mx-auto md:mt-0 mt-4"
          >
            Call us for a Quote
          </h2>
          <div className="h-[210px] mt-4 bg-[#ddd] flex flex-col justify-center">
            <div className="p-4 ">
              <p className="mb-4">Please call us for all your printing needs</p>
              <div className="font-bold md:text-2xl mb-1 text-[1.2rem] flex gap-2">
                <p>Phone: </p> 
                <div className=" text-blue-500 cursor-pointer hover:text-[#6245fe] text-[1.2rem]  hover:underline">
                  02 9569 1113 <br /> 0449 710 008
                </div>{" "}
              </div>
              <div className="font-bold md:text-2xl mb-1 text-[1.2rem] flex gap-2">
                <p>Email: </p> 
                <div className=" text-blue-500 cursor-pointer hover:text-[#6245fe] text-[1.2rem]  hover:underline">
                info@dot2dotprinting.com.au
                </div>{" "}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Service