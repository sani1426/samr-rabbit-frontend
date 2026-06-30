"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

const MobileDrawer = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="ghost" className="md:hidden cursor-pointer">
          <HiBars3BottomRight className="text-2xl text-gray-700" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="data-[vaul-drawer-direction=bottom]:max-h-[50vh] data-[vaul-drawer-direction=top]:max-h-[50vh] data-[vaul-drawer-direction=right]:max-w-[50vw]">
        <DrawerHeader>
          <DrawerTitle className="text-2xl border-b px-2 py-2 text-right">
            منو
          </DrawerTitle>
        </DrawerHeader>
        <div className="no-scrollbar overflow-y-auto px-4">
          <nav className="space-y-4">
    
              <Link
                href="/"
                className="block text-gray-600 px-4 py-2 rounded-md hover:bg-[#b6ff00] transition-all duration-300 border-b"
              >
                مردانه
              </Link>
        
              <Link
                href="/"
                className="block text-gray-600 px-4 py-2 rounded-md hover:bg-[#b6ff00] transition-all duration-300 border-b"
              >
                زنانه
              </Link>
      
              <Link
                href="/"
                className="block text-gray-600 px-4 py-2 rounded-md hover:bg-[#b6ff00] transition-all duration-300 border-b"
              >
                پیراهن
              </Link>
        
              <Link
                href="/"
                className="block text-gray-600 px-4 py-2 rounded-md hover:bg-[#b6ff00] transition-all duration-300 border-b "
              >
                شلوار
              </Link>
   
          </nav>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileDrawer;
