const AboutUs = () => {
  return (
    <div className="xl_screen" id="about">
      <header>
        <h1
          style={{ fontFamily: "Fira Sans, sans-serif" }}
          className="title text-center md:mt-8 "
        >
          About Us
        </h1>
      </header>
      <section>
        <p
          className="p max-w-[1000px] mx-auto mt-4 text-center text-[#172b43] md:text-[1.44rem] sm text-[1.15rem]"
          style={{
            fontWeight: "100",
            lineHeight: "2.4rem",
            fontFamily: "Hind Vadodara, sans-serif",
          }}
        >
          Dot2Dot Printing prides itself on supporting our products with
          specialised knowledge as well as being able to identify and source
          many difficult or old style items. We are also known for providing in
          urgent services in the fastest possible time. No order is too complex
          or too small. We do give value for money, so we very much look forward
          to helping and supplying you with products suitable for your
          individual needs. We provide Booklet printing, Window sticker, Digital
          printing, Graphic design, Banner printing, Flyer printing in Sydenham
          and Marrickville; Please come into our shop.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
