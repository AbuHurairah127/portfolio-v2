"use client";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
const NavbarToggler = (props: {
  isNavbar: boolean;
  setIsNavbar: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <header className="h-20 max-w-screen flex justify-between items-center bg-transparent absolute top-0">
        <div className="fixed top-5 right-5">
          <Hamburger
            color="white"
            toggled={props.isNavbar}
            onToggle={() => {
              props.setIsNavbar(!props.isNavbar);
            }}
          />
        </div>
      </header>
    </>
  );
};

export default NavbarToggler;
