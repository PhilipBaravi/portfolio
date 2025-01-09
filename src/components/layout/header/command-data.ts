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
        href: "https://github.com/yourusername/yourrepo",
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
        href: "/projects/invoicehub",
      },
      {
        icon: LucideCommand,
        label: "Positivus",
        shortcut: "⌘P",
        href: "/projects/positivus",
      },
      {
        icon: LucideCommand,
        label: "React Hooks Explorer",
        shortcut: "⌘R",
        href: "/projects/react-hooks",
      },
      {
        icon: LucideCommand,
        label: "Georgian Travelguide",
        shortcut: "⌘T",
        href: "/projects/georgian-travel",
      },
      {
        icon: LucideCommand,
        label: "Georgian Technical University",
        shortcut: "⌘U",
        href: "/projects/gtu",
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
        href: "https://github.com/yourusername",
      },
      {
        icon: LucideCommand,
        label: "LinkedIn",
        shortcut: "⌘L",
        href: "https://linkedin.com/in/yourusername",
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
