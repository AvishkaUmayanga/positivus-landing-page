'use client'

import Image from "next/image"
import logo from '@/../public/logo.png'
import menuIcon from '@/../public/Burger menu icon.png'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

const Navbar = () => {
  return (
    <div className="fixed left-0 right-0  flex items-center justify-between px-12 py-5 2xl:px-20 max-md:px-5 bg-whiteColor z-50">
      <Image src={logo} className="h-7 w-36"/>
      <ul className="flex items-center gap-8 text-lg capitalize max-lg:hidden">
        <li>About us</li>
        <li>services</li>
        <li>use cases</li>
        <li>pricing</li>
        <li>blog</li>
        <li>
        <button className="px-5 py-2 border rounded-xl">
            Request a quote
        </button>
        </li>
      </ul>
      <div className=" lg:hidden">
      <DropdownMenu >
        <DropdownMenuTrigger>
          <Image src={menuIcon} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col items-center w-screen gap-8 py-2 mt-2 text-lg capitalize bg-whiteColor">
          <DropdownMenuItem>About us</DropdownMenuItem>
          <DropdownMenuItem>services</DropdownMenuItem>
          <DropdownMenuItem>use cases</DropdownMenuItem>
          <DropdownMenuItem>pricing</DropdownMenuItem>
          <DropdownMenuItem>blog</DropdownMenuItem>
          <DropdownMenuItem>
            <button className="px-5 py-2 border rounded-xl">
              Request a quote
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    </div>
  )
}

export default Navbar