import { Link } from "react-scroll";

interface Props {
  name: string;
  url: string;
  offset?: number;
}

export function SidebarItem({ name, url, offset }: Props) {
  return (
    <Link
      offset={offset}
      activeClass="bg-primary "
      className=" p-2 rounded-lg text-sm "
      to={url}
      spy={true}
      smooth={true}
      duration={500}
    >
      {name}
    </Link>
  );
}
