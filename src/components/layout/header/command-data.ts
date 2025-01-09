import { Code, FileUser, LucideCommand } from "lucide-react";
import { handleDownload } from "@/lib/download";

export interface CommandItem {
  icon: React.ElementType;
  label: string;
  shortcut?: string;
  href?: string;
  action?: () => void;
}

export interface CommandGroup {
  heading: string;
  items: CommandItem[];
}

export const commandData: CommandGroup[] = [
  {
    heading: "General",
    items: [
      {
        icon: Code,
        label: "Source Code",
        href: "https://github.com/PhilipBaravi/portfolio",
      },
      {
        icon: FileUser,
        label: "Download Resume",
        action: () => handleDownload("/resume.pdf", "resume.pdf"),
      },
    ],
  },
  {
    heading: "Projects",
    items: [
      {
        icon: LucideCommand,
        label: "InvoiceHub",
        shortcut: "⌘I",
        href: "https://www.invoicehub.space/",
      },
      {
        icon: LucideCommand,
        label: "Positivus",
        shortcut: "⌘P",
        href: "https://philipbaravi.github.io/Positivus/",
      },
      {
        icon: LucideCommand,
        label: "React Hooks Explorer",
        shortcut: "⌘R",
        href: "https://philipbaravi.github.io/react-hooks/",
      },
      {
        icon: LucideCommand,
        label: "Georgian Travelguide",
        shortcut: "⌘T",
        href: "https://georgiantravelguide.com/en",
      },
      {
        icon: LucideCommand,
        label: "Georgian Technical University",
        shortcut: "⌘U",
        href: "https://old.gtu.ge/Eng/",
      },
    ],
  },
  {
    heading: "Socials",
    items: [
      {
        icon: LucideCommand,
        label: "Github",
        shortcut: "⌘G",
        href: "https://github.com/PhilipBaravi",
      },
      {
        icon: LucideCommand,
        label: "LinkedIn",
        shortcut: "⌘L",
        href: "https://www.linkedin.com/in/philip-baravi-2b2a521a2/",
      },
      {
        icon: LucideCommand,
        label: "Discord",
        shortcut: "⌘D",
        href: "https://discord.gg/yourinvite",
      },
    ],
  },
];
