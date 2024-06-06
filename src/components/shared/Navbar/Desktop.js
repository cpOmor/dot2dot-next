
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { menuItems } from "./Navbar.config";
// import { useLocation } from "react-router-dom";

const Desktop = () => {
  
  return (
    <div>
      {/************************ desktop menu start here *************************/}
      <ul className="flex items-center justify-end ">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              className={`flex items-center text-lg px-5 hover:text-[#ed1e2d] text-[17px] font-Inter focus:text-[#ed1e2d] `}
              href={item.link}
              style={{ textDecoration: "none" }}
            >
              <span
                style={{ fontWeight: "normal", textDecoration: "none" }}
                className="fade-in"
              >
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/************************ desktop menu end here *************************/}
    </div>
  );
};

export default Desktop;
