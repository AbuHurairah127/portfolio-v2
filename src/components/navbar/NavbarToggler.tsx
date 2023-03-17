"use client";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
const NavbarToggler = (props: {
  isNavbar: boolean;
  setIsNavbar: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <header className="h-20 fixed top-0 right-0 w-screen flex justify-between items-center px-5 backdrop-blur-sm border-b border-b-background/75">
        {!props.isNavbar && (
          <Link
            href={"/"}
            className="text-white text-2xl font-bold italic"
            onClick={() => {
              props.setIsNavbar(false);
            }}
          >
            @Abuhurairah127
          </Link>
        )}
        <div className="fixed top-5 right-5">
          <Hamburger
            color="white"
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
