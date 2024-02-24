import { SidebarItem } from "./SidebarItem";
import { useLocation } from "react-router-dom";
interface SubItem {
  name: string;
  url: string;
  offset: number;
}
const SUB_ITEMS_INVENTORY = [
  {
    name: "Introduction",
    url: "index",
    offset: -130,
  },
  {
    name: "Obtener Todos los Productos",
    url: "get",
    offset: -130,
  },
  {
    name: "Obtener Detalles de un Producto por ID",
    url: "byId",
    offset: -130,
  },
  {
    name: "Agregar un Nuevo Producto",
    url: "create",
    offset: -130,
  },
  {
    name: "Actualizar un Producto por ID",
    url: "update",
    offset: -130,
  },
  {
    name: "Eliminar un Producto por ID",
    url: "delete",
    offset: -130,
  },
];

const SUB_ITEMS_CATEGORY = [
  {
    name: "Introduction",
    url: "index",
    offset: -130,
  },
  {
    name: "Obtener Todas las Categorías",
    url: "get",
    offset: -130,
  },
  {
    name: "Obtener Detalles de una Categoría por ID",
    url: "byId",
    offset: -130,
  },
  {
    name: "Agregar una Nueva Categoría",
    url: "create",
    offset: -130,
  },
  {
    name: "Actualizar una Categoría por ID",
    url: "update",
    offset: -130,
  },
  {
    name: "Eliminar una Categoría por ID",
    url: "delete",
    offset: -130,
  },
];

const SUB_ITEMS_AUTH = [
  {
    name: "Introduction",
    url: "index",
    offset: -130,
  },
  {
    name: "Registro de Usuario",
    url: "register",
    offset: -130,
  },
  {
    name: "Inicio de Sesión",
    url: "login",
    offset: -130,
  },
  {
    name: "Perfil de Usuario",
    url: "profile",
    offset: -130,
  },
];
export function SidebarSecundary() {
  const location = useLocation();
  const nameLocation = location.pathname.split("/")[1];
  let subItems: SubItem[];

  if (nameLocation === "inventory") {
    subItems = SUB_ITEMS_INVENTORY;
  } else if (nameLocation === "category") {
    subItems = SUB_ITEMS_CATEGORY;
  } else if (nameLocation === "auth") {
    subItems = SUB_ITEMS_AUTH;
  } else {
    subItems = [];
  }
  return (
    <>
      <nav className="sticky top-24">
        <ul className="flex flex-col space-y-4">
          {subItems.map((data, index) => (
            <SidebarItem key={index} {...data} />
          ))}
        </ul>
      </nav>
    </>
  );
}
