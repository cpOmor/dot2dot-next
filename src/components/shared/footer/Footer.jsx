import Container from "../../Container/Container";

const Footer = () => {
  return (
    <>
      <Container>
        <div className="mx-auto flex gap-2 md:gap-7 md:mb-20 mb-6 mt-8 md:flex-row flex-col justify-between items-center sp text-center md:text-start">
          <p>Dot2DotPrinting Ltd.</p>
          <p>Privacy Policy - Terms & Conditions - Printing Specification</p>
        </div>
      </Container>
    </>
  );
};
export default Footer;
