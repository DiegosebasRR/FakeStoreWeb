import SyntaxHighlighter from "react-syntax-highlighter";
import { Element } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Inventory = () => {
  const productAll = `[
    {
      "products": [
        {
          "_id": "producto_id",
          "name": "Nombre del Producto",
          "price": 29.99,
          "description": "Descripción del producto.",
          "image": {
            "key": "imagen_key",
            "location": "url_de_la_imagen"
          },
          "Category": "categoria_id",
          "stock": 100
        }
      ],
      "totalPages": 2
    }
  ]
  `;
  const Request = `https://fake-store-api-vqyd.onrender.com/app/products/{id}`;
  const productById = `{
    "_id": "producto_id",
    "name": "Nombre del Producto",
    "price": 29.99,
    "description": "Descripción del producto.",
    "image": {
      "key": "imagen_key",
      "location": "url_de_la_imagen"
    },
    "Category": "categoria_id",
    "stock": 100
  }
  `;
  const productCreate = `{
    "name": "Nuevo Producto",
    "price": 49.99,
    "description": "Descripción del nuevo producto.",
    "image": {
      "key": "nueva_imagen_key",
      "location": "url_de_la_nueva_imagen"
    },
    "Category": "categoria_id",
    "stock": 50
  }
  `;
  const productUpdate = `
  {
    "name": "Producto Actualizado",
    "price": 39.99,
    "description": "Nueva descripción del producto.",
    "image": {
      "key": "nueva_imagen_key",
      "location": "url_de_la_nueva_imagen"
    },
    "Category": "nueva_categoria_id",
    "stock": 75
  }
  `;
  return (
    <>
      <section className="px-6">
        <Element name="index">
          <h1 className="text-4xl font-bold">Inventario de Productos</h1>
        </Element>
        <Element name="get">
          <h2 className="text-xl mt-10 font-bold">
            Obtener Todos los Productos
          </h2>
          <a href="#delete"> click</a>
          <ul className="mt-6 list-disc">
            <li className="mt-2">
              <span className="font-bold">Descripción:</span> Obtiene todos los
              productos disponibles en el inventario.
            </li>
            <li>
              <span className="font-bold">Parámetros de Consulta:</span>
            </li>
            <ul className="mx-4 ">
              <li>
                <span className="font-bold">results (opcional):</span> Número
                total de productos que se requieran. Si no se proporciona, se
                obtienen todos los productos de la tienda.
              </li>
              <li>
                <span className="font-bold">page:</span> Número de página que se
                desea recuperar.
              </li>
              <li>
                <span className="font-bold">pageSize:</span> Número de productos
                por página.
              </li>
            </ul>
            <li className="mt-2">
              <span className="font-bold">Endpoint:</span>
              <SyntaxHighlighter
                language="typescript"
                className={"syntax-highlighter mt-6"}
                useInlineStyles={false}
                wrapLines={true}
              >
                [GET] http://localhost:3000/product?results=2&page=1&pageSize=1
              </SyntaxHighlighter>
            </li>
            <li className="mt-2">
              <span className="font-bold">Ejemplo de Respuesta:</span>
            </li>
          </ul>
          <div>
            <SyntaxHighlighter
              language="typescript"
              className={"syntax-highlighter mt-6"}
              useInlineStyles={false}
              wrapLines={true}
            >
              {productAll}
            </SyntaxHighlighter>
          </div>
        </Element>
        <Element name="byId">
          <h2 className="text-xl mt-10 font-bold">
            Obtener Detalles de un Producto por ID
          </h2>

          <ul className="mt-6 list-disc  ">
            <li className="mt-2">
              <span className="font-bold">Descripción:</span> Obtiene detalles
              específicos de un producto según su ID.
            </li>
            <li className="mt-2">
              <span className="font-bold">Endpoint:</span>
              <SyntaxHighlighter
                language="typescript"
                className={"syntax-highlighter mt-6"}
                useInlineStyles={false}
                wrapLines={true}
              >
                {`[GET]  ${Request}`}
              </SyntaxHighlighter>
            </li>
            <li className="mt-2">
              <span className="font-bold">Ejemplo de Respuesta:</span>
            </li>
          </ul>
          <div>
            <SyntaxHighlighter
              language="typescript"
              className={"syntax-highlighter mt-6"}
              useInlineStyles={false}
              wrapLines={true}
            >
              {productById}
            </SyntaxHighlighter>
          </div>
        </Element>
        <Element name="create">
          <h2 className="text-xl mt-10 font-bold">Agregar un Nuevo Producto</h2>

          <ul className="mt-6 list-disc  ">
            <li className="mt-2">
              Descripción: Agrega un nuevo producto al inventario.
            </li>
            <li className="mt-2">
              Endpoint:
              <SyntaxHighlighter
                language="typescript"
                className={"syntax-highlighter mt-6"}
                useInlineStyles={false}
                wrapLines={true}
              >
                [POST] http://localhost:3000/product
              </SyntaxHighlighter>
            </li>
            <li className="mt-2">Ejemplo de Cuerpo de Solicitud:</li>
          </ul>
          <div>
            <SyntaxHighlighter
              language="typescript"
              className={"syntax-highlighter mt-6"}
              useInlineStyles={false}
              wrapLines={true}
            >
              {productCreate}
            </SyntaxHighlighter>
          </div>
        </Element>
        <Element name="update">
          <h2 className="text-xl mt-10 font-bold">
            Actualizar un Producto por ID
          </h2>

          <ul className="mt-6 list-disc  ">
            <li className="mt-2">
              <span className="font-bold">Descripción:</span> Actualiza los
              detalles de un producto existente.
            </li>
            <li className="mt-2">
              <span className="font-bold">Endpoint:</span>
              <SyntaxHighlighter
                language="typescript"
                className={"syntax-highlighter mt-6"}
                useInlineStyles={false}
                wrapLines={true}
              >
                {`[PUT]  ${Request}`}
              </SyntaxHighlighter>
            </li>
            <li className="mt-2">
              <span className="font-bold">Ejemplo de Cuerpo de Solicitud:</span>
            </li>
          </ul>
          <SyntaxHighlighter
            language="typescript"
            className={"syntax-highlighter mt-6"}
            useInlineStyles={false}
            wrapLines={true}
          >
            {productUpdate}
          </SyntaxHighlighter>
        </Element>
        <Element name="delete">
          <h2 className="text-xl mt-10 font-bold">
            Eliminar un Producto por ID
          </h2>

          <ul className="mt-6 list-disc  ">
            <li className="mt-2">
              <span className="font-bold">Descripción:</span> Elimina un
              producto del inventario según su ID.
            </li>
            <li className="mt-2">
              <span className="font-bold">Endpoint:</span>
              <SyntaxHighlighter
                language="typescript"
                className={"syntax-highlighter mt-6"}
                useInlineStyles={false}
                wrapLines={true}
              >
                {`[DELETE] ${Request}`}
              </SyntaxHighlighter>
              <li className="mt-2">
                <span className="font-bold">Ejemplo de respuestas:</span>
              </li>
              <SyntaxHighlighter
                language="typescript"
                className={"syntax-highlighter mt-6"}
                useInlineStyles={false}
                wrapLines={true}
              >
                true
              </SyntaxHighlighter>
            </li>
          </ul>
        </Element>{" "}
        <div className="flex w-full gap-4">
          <Link to="/auth" className="w-full">
            <Button
              className="w-full h-24 mt-10 text-lg justify-start "
              variant="outline"
            >
              Anterior
            </Button>
          </Link>
          <Link to="/user" className="w-full">
            <Button
              className="w-full h-24 mt-10 text-lg justify-end "
              variant="outline"
            >
              Siguiente
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Inventory;
