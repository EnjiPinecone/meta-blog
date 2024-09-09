import React from "react";
import { HeaderLogo } from "../svg/Logo";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className=" flex justify-between items-center p-5 w-full md:max-w-6xl mx-auto">
      <HeaderLogo />
      <MobileMenu />
      <Navbar />
      <SearchBar />
    </div>
  );
}
