"use client";

import { FC, useState } from "react";
import { LucideCommand, Link, Code } from "lucide-react";
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
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

const CommandSelector: FC = () => {
  const [open, setOpen] = useState(false);

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
        <DialogTitle />
        <DialogDescription />
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="General">
              <CommandItem className="cursor-pointer">
                <Code className="mr-2" size="22" strokeWidth={2} />
                <span>Source Code</span>
              </CommandItem>
              <CommandItem className="cursor-pointer">
                <Link className="mr-2" size="22" strokeWidth={2} />
                <span>Copy Link</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Projects">
              <CommandItem>
                <LucideCommand className="mr-2" size="22" strokeWidth={1.5} />
                <span>InvoiceHub</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <LucideCommand className="mr-2" size="22" strokeWidth={1.5} />
                <span>LinkedIn</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <LucideCommand className="mr-2" size="22" strokeWidth={1.5} />
                <span>Discord</span>
                <CommandShortcut>⌘j</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Socials">
              <CommandItem>
                <LucideCommand className="mr-2" size="22" strokeWidth={1.5} />
                <span>Github</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <LucideCommand className="mr-2" size="22" strokeWidth={1.5} />
                <span>LinkedIn</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <LucideCommand className="mr-2" size="22" strokeWidth={1.5} />
                <span>Discord</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
};

export default CommandSelector;
