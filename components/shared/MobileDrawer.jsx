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
        <Button
          variant="outline"
          className="capitalizemd:hidden cursor-pointer"
        >
          <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="data-[vaul-drawer-direction=bottom]:max-h-[50vh] data-[vaul-drawer-direction=top]:max-h-[50vh]">
        <DrawerHeader>
          <DrawerTitle>منو</DrawerTitle>
        </DrawerHeader>
        <div className="no-scrollbar overflow-y-auto px-4">
          <nav className="space-y-4">
            <Link href="/" className="block text-gray-600 hover:text-black ">
              مردانه
            </Link>
            <Link href="/" className="block text-gray-600 hover:text-black ">
              زنانه
            </Link>
            <Link href="/" className="block text-gray-600 hover:text-black ">
              پیراهن
            </Link>
            <Link href="/" className="block text-gray-600 hover:text-black ">
              شلوار
            </Link>
          </nav>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileDrawer;
