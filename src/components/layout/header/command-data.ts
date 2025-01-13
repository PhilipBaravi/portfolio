import { Code, FileUser, LucideCommand, Copy } from "lucide-react";
import { handleDownload } from "@/lib/download";

export interface ToastOptions {
  title: string;
  description: string;
  variant?: "default" | "destructive" | null;
}
export interface CommandItem {
  icon: React.ElementType;
  label: string;
  shortcut?: string;
  href?: string;
  action?: (toast?: (options: ToastOptions) => void) => void;
}

export interface CommandGroup {
  heading: string;
  items: CommandItem[];
}

export const commandData: CommandGroup[] = [
  {
    heading: "command.general", // use translation key
    items: [
      {
        icon: Copy,
        label: "command.copy",
        action: (toast) => {
          if (toast && "clipboard" in navigator) {
            navigator.clipboard.writeText("https://portfolio-url.example.com/");
            toast({
              title: "command.copySuccess", // Key for title
              description: "command.copySuccessMessage", // Key for description
            });
          } else if (toast) {
            toast({
              title: "command.copyFail",
              description: "command.copyFailMessage",
              variant: "destructive",
            });
          }
        },
      },
      {
        icon: Code,
        label: "command.sourceCode",
        href: "https://github.com/PhilipBaravi/portfolio",
      },
      {
        icon: FileUser,
        label: "command.downloadResume",
        action: () => handleDownload("/resume.pdf", "resume.pdf"),
      },
    ],
  },
  {
    heading: "command.projects",
    items: [
      {
        icon: LucideCommand,
        label: "command.invoiceHub",
        shortcut: "⌘I",
        href: "https://www.invoicehub.space/",
      },
      {
        icon: LucideCommand,
        label: "command.positivus",
        shortcut: "⌘P",
        href: "https://philipbaravi.github.io/Positivus/",
      },
      {
        icon: LucideCommand,
        label: "command.reactHooksExplorer",
        shortcut: "⌘R",
        href: "https://philipbaravi.github.io/react-hooks/",
      },
      {
        icon: LucideCommand,
        label: "command.georgianTravelguide",
        shortcut: "⌘T",
        href: "https://georgiantravelguide.com/en",
      },
      {
        icon: LucideCommand,
        label: "command.georgianTechnicalUniversity",
        shortcut: "⌘U",
        href: "https://old.gtu.ge/Eng/",
      },
    ],
  },
  {
    heading: "command.socials",
    items: [
      {
        icon: LucideCommand,
        label: "command.github",
        shortcut: "⌘G",
        href: "https://github.com/PhilipBaravi",
      },
      {
        icon: LucideCommand,
        label: "command.linkedin",
        shortcut: "⌘L",
        href: "https://www.linkedin.com/in/philip-baravi-2b2a521a2/",
      },
      {
        icon: LucideCommand,
        label: "command.discord",
        shortcut: "⌘D",
        href: "https://discord.gg/yourinvite",
      },
    ],
  },
];
