import LayoutMain from "@/layouts/LayoutMain";
import Introduction from "@/modules/Introduction/pages/Introduction";
import Inventory from "@/modules/Inventory/pages/Inventory";
import Auth from "@/modules/auth/pages/Auth";
import Category from "@/modules/category/pages/Category";
import Home from "@/modules/home/pages/Home";

import User from "@/modules/user/pages/User";

const appRouter = [
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/introduction",
        element: <Introduction />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
];

export default appRouter;
