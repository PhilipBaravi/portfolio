"use client";

import { FC } from "react";
import { AlignJustify } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { navigationItems } from "./nav-items";

const Navigation: FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="hover:bg-stone-300/50 dark:hover:bg-stone-800/50 rounded-lg cursor-pointer hover:scale-[1.1] focus:outline-none">
          <AlignJustify className="m-2" size="20" strokeWidth={1.5} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36 bg-stone-100 dark:bg-stone-900">
        {navigationItems.map(({ label, icon: Icon, id }) => (
          <DropdownMenuItem
            key={`${label}-${id}`}
            className="flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-stone-800 dark:hover:bg-stone-800"
          >
            <Icon className="w-4 h-4" />
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Navigation;
