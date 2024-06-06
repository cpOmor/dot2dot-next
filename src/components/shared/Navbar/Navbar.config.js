import { useEffect, useState } from "react";

export const menuItems = [
  { name: "HOME", link: "", icon: "" },
  { name: "SERVICES", link: "#service", icon: "" },
  { name: "PORTFOLIO", link: "#portfolio", icon: "" },
  { name: "PRICING", link: "#pricing", icon: "" },
  { name: "ABOUT", link: "#about", icon: "" },
];

export const UseOpenAndClose = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return { isOpen, open, close };
};
