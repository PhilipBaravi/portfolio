"use client";

import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import IconWrap from "./icon-wrap";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { commandData, CommandItem as CommandItemType } from "./command-data";
import { DialogTitle } from "@radix-ui/react-dialog";
import { LucideCommand } from "lucide-react";

const CommandSelector: FC = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleItemClick = (item: CommandItemType) => {
    if (item.action) {
      item.action();
    } else if (item.href) {
      router.push(item.href);
    }
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(true)}
        aria-label="Open command menu"
      >
        <IconWrap>
          <LucideCommand className="m-2" size="20" strokeWidth={2} />
        </IconWrap>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogTitle></DialogTitle>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {commandData.map((group, index) => (
              <div key={group.heading}>
                <CommandGroup heading={group.heading}>
                  {group.items.map((item) => (
                    <CommandItem
                      key={item.label}
                      className="cursor-pointer"
                      onSelect={() => handleItemClick(item)}
                    >
                      <item.icon className="mr-2" size={22} strokeWidth={2} />
                      <span>{item.label}</span>
                      {item.shortcut && (
                        <CommandShortcut>{item.shortcut}</CommandShortcut>
                      )}
                    </CommandItem>
                  ))}
                </CommandGroup>
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
