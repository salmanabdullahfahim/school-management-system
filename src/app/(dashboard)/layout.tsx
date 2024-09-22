import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const dashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex">
      {/* left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]  p-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex justify-center items-center lg:justify-start gap-2"
        >
          <Image src={"/logo.png"} alt="logo" width={32} height={32} />
          <span className="hidden lg:block">FSchool</span>
        </Link>

        {/* Menu */}
        <Menu />
      </div>
      {/* right */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default dashboardLayout;
