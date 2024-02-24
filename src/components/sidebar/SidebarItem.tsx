import { NavLink, useLocation } from "react-router-dom";

interface Props {
  name?: string;
  url: string;
  icon: any;
}

export function SidebarItem({ name, url, icon }: Props) {
  const location = useLocation();
  const isActive = location.pathname.split("/")[1] === url.split("/")[1];

  return (
    <NavLink
      to={url}
      className={`group flex relative w-full ml-4 origin-left transition-all duration-75 h-[3.8rem] mx-auto`}
    >
      <div
        className={`${
          isActive && "bg-primary text-white dark:text-black"
        } p-2 w-full group-hover:bg-primary group-hover:text-white dark:group-hover:text-black rounded transition-all duration-75 origin-left mt-5 z-0 flex gap-5 ${
          isActive && "bg-primary origin-left text-white dark:text-black"
        }`}
      >
        <span>{icon}</span>
        <span className="origin-left">{name}</span>
      </div>
    </NavLink>
  );
}
