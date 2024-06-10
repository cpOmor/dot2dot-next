// import { div } from "../../../utils/div";

export const WeDo = () => {
  return (
    <section id="what-we-do" className="xl_screen mx-auto">
      <div>
        <h4
          style={{ fontFamily: "Fira Sans, sans-serif" }}
          className="title text-center mt-8"
        >
          What We Do?
        </h4>
        <p
          style={{ fontFamily: "Hind Vadodara, sans-serif" }}
          className="text-center"
        >
          Please call us if you need more information
        </p>
      </div>
      <dir></dir>

      <div className="mt-16 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-baseline justify-stretch">
        <div className="wiper relative">
          <div className="card px-6 py-16">
            <div className="icon ">
              <i className="material-icons md-36">01</i>
            </div>
            <p className=" mt-[30px] text-[2rem] !mt-30 text-center !text-white font-semibold  tracking-wider">
              Photocopy
            </p>
            <p className="mt-[20px] text-center !text-white font-thin  tracking-wider">
              We Photocopy all kinds of papers. B&W Copy 30 cents and Colour 65
              cents on 80 GSM paper.
            </p>
          </div>
          <div className=" cardBg cardBg2 "></div>
        </div>
        <div className="wiper relative">
          <div className="card px-6 py-16 ">
            <div className="icon ">
              <i className="material-icons md-36">02</i>
            </div>
            <p className=" mt-[30px] text-[2rem] !mt-30 text-center !text-white font-semibold  tracking-wider">
              Print
            </p>
            <p className="mt-[20px] text-center !text-white font-thin  tracking-wider">
              We provides all kinds of printing solutions. Save a lot on Bulk
              printing.
            </p>
          </div>
          <div className=" cardBg cardBg2 "></div>
        </div>
        <div className="wiper relative">
          <div className="card px-6 py-16">
            <div className="icon ">
              <i className="material-icons md-36">03</i>
            </div>
            <p className=" mt-[30px] text-[2rem] !mt-30 text-center !text-white font-semibold  tracking-wider">
              Website
            </p>
            <p className="mt-[20px] text-center !text-white font-thin  tracking-wider">
            We Create Beautiful Responsive Websites Starting from $499.99.
            </p>
          </div>
          <div className=" cardBg cardBg2 "></div>
        </div>
      </div>
    </section>
  );
};
