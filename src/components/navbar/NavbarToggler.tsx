"use client";
import { Squash as Hamburger } from "hamburger-react";
import { Dispatch, SetStateAction } from "react";
const NavbarToggler = (props: {
  isNavbar: boolean;
  setIsNavbar: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <header className="mt-4 ml-5 h-16">
        <Hamburger
          color="white"
          onToggle={() => {
            props.setIsNavbar(!props.isNavbar);
          }}
        />
      </header>
    </>
  );
};

export default NavbarToggler;
