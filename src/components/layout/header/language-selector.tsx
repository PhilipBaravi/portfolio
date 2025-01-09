import { FC } from "react";
import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const languageItems = [
  { id: 1, label: "English" },
  { id: 2, label: "Spanish" },
  { id: 3, label: "Georgian" },
];

const LanguageSelector: FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="hover:bg-stone-300/50 dark:hover:bg-stone-800/50 rounded-lg cursor-pointer hover:scale-[1.1]">
          <Languages className="m-2" size="20" strokeWidth={1.5} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-16 bg-stone-100 dark:bg-stone-900">
        {languageItems.map(({ label, id }) => (
          <DropdownMenuItem
            key={`${label}-${id}`}
            className="flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-stone-800 dark:hover:bg-stone-800"
          >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
