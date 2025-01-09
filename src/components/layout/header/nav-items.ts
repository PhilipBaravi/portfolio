import { FolderGit2, User, Monitor, HomeIcon } from "lucide-react";

export const navigationItems = [
  { id: 1, label: "Home", icon: HomeIcon, href: "/" },
  { id: 2, label: "Projects", icon: FolderGit2, href: "/projects" },
  { id: 3, label: "About Me", icon: User, href: "/about" },
  { id: 4, label: "Technologies", icon: Monitor, href: "/technologies" },
];
