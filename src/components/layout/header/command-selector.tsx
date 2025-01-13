"use client";

import { FC, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import IconWrap from "./icon-wrap";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup as UICommandGroup,
  CommandInput,
  CommandItem as UICommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  commandData as rawCommandData,
  CommandItem as CommandItemType,
} from "./command-data";
import { DialogTitle } from "@radix-ui/react-dialog";
import { LucideCommand } from "lucide-react";
import { useTranslations } from "next-intl";

const CommandSelector: FC = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const t = useTranslations("HomePage");

  // Attach toast to command data actions
  const commandData = rawCommandData.map((group) => ({
    ...group,
    items: group.items.map((item) => ({
      ...item,
      // Wrap actions with toast injection if they exist
      action: item.action ? () => item.action!(toast) : undefined,
    })),
  }));

  const handleItemClick = (item: CommandItemType) => {
    if (item.action) {
      item.action();
    } else if (item.href) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(true)}
        aria-label={t("command.general")}
      >
        <IconWrap>
          <LucideCommand className="m-2" size="20" strokeWidth={2} />
        </IconWrap>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogTitle>{/* Optionally place a title here */}</DialogTitle>
        <Command>
          <CommandInput placeholder={t("command.general")} />
          <CommandList>
            <CommandEmpty>{t("noresult")}</CommandEmpty>
            {commandData.map((group, index) => (
              <div key={group.heading}>
                <UICommandGroup heading={t(group.heading)}>
                  {group.items.map((item) => (
                    <UICommandItem
                      key={item.label}
                      className="cursor-pointer"
                      onSelect={() => handleItemClick(item)}
                    >
                      <item.icon className="mr-2" size={22} strokeWidth={2} />
                      <span>{t(item.label)}</span>
                      {item.shortcut && (
                        <CommandShortcut>{item.shortcut}</CommandShortcut>
                      )}
                    </UICommandItem>
                  ))}
                </UICommandGroup>
                {index < commandData.length - 1 && <CommandSeparator />}
              </div>
            ))}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
};

export default CommandSelector;
