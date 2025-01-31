"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigationItems } from "./nav-items";
import { useTranslations } from "next-intl";

const NavigationLg: FC = () => {
  const pathname = usePathname();
  const t = useTranslations("HomePage");

  return (
    <nav className="flex items-center gap-5">
      {navigationItems.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className={cn(
            "relative py-1 text-md text-stone-700 transition-colors hover:text-stone-950 dark:text-stone-300 dark:hover:text-stone-500 z-50",
            pathname === href && [
              "text-stone-900 dark:text-stone-100",
              "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-stone-950 dark:after:bg-stone-50",
              "before:absolute before:bottom-[-2px] before:left-0 before:h-[4px] before:w-full before:blur-sm before:bg-stone-950/50 dark:before:bg-stone-50/50",
            ]
          )}
        >
          {t(`nav.${label}`)}
        </Link>
      ))}
    </nav>
  );
};

export default NavigationLg;
