"use client"; // Mark as a client component

import { FC } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for client-side navigation in Next.js 13
import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const languageItems = [
  { id: 1, label: "English", code: "en" },
  { id: 2, label: "Spanish", code: "es" },
  { id: 3, label: "Georgian", code: "ka" }, // Assuming Georgian locale code is "ka"
];

const LanguageSelector: FC = () => {
  const router = useRouter();

  const handleLanguageChange = (locale: string) => {
    // Set cookie using document.cookie
    // This sets the cookie to expire in 30 days; adjust as needed
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=${
      60 * 60 * 24 * 30
    }`;

    // Reload the page so the server picks up the new locale
    router.refresh(); // In Next.js 13, router.refresh() refreshes the current route data
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="hover:bg-stone-300/50 dark:hover:bg-stone-800/50 rounded-lg cursor-pointer hover:scale-[1.1]">
          <Languages className="m-2" size="20" strokeWidth={1.5} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-16 bg-stone-100 dark:bg-stone-900">
        {languageItems.map(({ label, code, id }) => (
          <DropdownMenuItem
            key={`${label}-${id}`}
            className="flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-stone-800 dark:hover:bg-stone-800"
            onClick={() => handleLanguageChange(code)}
          >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
