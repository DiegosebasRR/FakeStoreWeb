import { MENU_ITEMS } from "@/constants";

import { SidebarItem } from "./SidebarItem";
import { Tooltip, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

export function Sidebar() {
  return (
    <>
      <nav className="sticky top-24">
        {MENU_ITEMS.map((data, index) => (
          <SidebarItem key={index} {...data} />
        ))}
        <TooltipProvider delayDuration={10}>
          <Tooltip>
            <TooltipTrigger
              asChild
              className=" top-[40rem] xl:top-[50rem] h-10 -right-[1.7rem]"
            ></TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </>
  );
}
