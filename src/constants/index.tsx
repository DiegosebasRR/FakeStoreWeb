import {
  ClipboardList,
  UserCircle,
  Users,
  Wrench,
  BookText,
} from "lucide-react";

const MENU_ITEMS = [
  {
    name: "Introduction",
    url: "/introduction",
    icon: <BookText />,
  },
  {
    name: "Auth",
    url: "/auth",
    icon: <UserCircle />,
  },
  {
    name: "Inventario",
    url: "/inventory",
    icon: <ClipboardList />,
  },
  {
    name: "users",
    url: "/user",
    icon: <Users />,
  },
  {
    name: "Category",
    url: "/category",
    icon: <Wrench />,
  },
];

export { MENU_ITEMS };
