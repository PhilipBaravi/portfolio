import { FolderGit2, User, Monitor, HomeIcon } from "lucide-react";

export const navigationItems = [
  { id: 1, label: "home", icon: HomeIcon, href: "/" },
  { id: 2, label: "projects", icon: FolderGit2, href: "/projects" },
  { id: 3, label: "about", icon: User, href: "/about" },
  { id: 4, label: "technologies", icon: Monitor, href: "/technologies" },
];
