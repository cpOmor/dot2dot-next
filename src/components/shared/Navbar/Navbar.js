"use client";
import menuBar from "../../../assets/menu-bar.png";
import logo from "../../../assets/logo/logo-2.png";
// import { Logo } from "../components.config";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import Image from "next/image";
import { UseOpenAndClose } from "./Navbar.config";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "../../Container/Container";

const Navbar = () => {
  const { open, isOpen, close } = UseOpenAndClose();
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <Container>
      <nav className={`z-50 w-full lg:relative py-2 bg-[#FFFFFF]`}>
        <div className=" font-Cuprum text-black mx-auto">
          <Mobile isOpen={isOpen} close={close} />
          <div className="flex justify-between items-center">
            <div className="md:hidden w-[64px] h-6">
              <button onClick={open}>
                <Image
                  src={menuBar}
                  width={35}
                  height={""}
                  alt={"item?.seoTag"}
                />
              </button>
            </div>

            {/* Logo Here */}
            <Link href={"./"} className="w-44">
              <Image
                src={logo}
                width={300}
                height={100}
                alt="dot2dot logo design"
              />
            </Link>

            <div>
              {/* Desktop Menu */}
              <div className="flex items-center">
                <div className="md:block hidden">
                  <Desktop />
                </div>

                <Link
                  href="#contact"
                  className={` text-[#ed1e2d] hover:text-[#f5f7fb] hover:bg-[#ed1e2d] outline outline-1  px-6 py-2 rounded-lg `}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
