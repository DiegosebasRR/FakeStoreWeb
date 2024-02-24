import SyntaxHighlighter from "react-syntax-highlighter";
import { Element } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Category = () => {
  const categoryAll = `
  [
    {
      "_id": "categoria_id",
      "name": "Nombre de la Categoría",
      "image": {
        "key": "imagen_key",
        "location": "url_de_la_imagen"
      }
    },
    // Otras categorías...
  ]
  `;
  const Request = `https://fake-store-api-vqyd.onrender.com/app/category/{id}`;
  const categoryById = `
  {
    "_id": "categoria_id",
    "name": "Nombre de la Categoría",
    "image": {
      "key": "imagen_key",
      "location": "url_de_la_imagen"
    }
  }
  `;
  const categoryCreate = `
  {
    "name": "Nueva Categoría",
    "image": {
      "key": "nueva_imagen_key",
      "location": "url_de_la_nueva_imagen"
    }
  }
  `;
  const categoryUpdate = `
  {
    "name": "Categoría Actualizada",
    "image": {
      "key": "nueva_imagen_key",
      "location": "url_de_la_nueva_imagen"
    }
  }
  `;
  return (
    <>
      <section className="px-6">
        <Element name="index">
          <h1 className="text-4xl font-bold">Categorías de Productos</h1>
        </Element>

        <Element name="get">
          <h2 className="text-xl mt-10 font-bold">
            Obtener Todas las Categorías
          </h2>
          <a href="#delete"> click</a>
          <ul className="mt-6 list-disc  ">
            <li className="mt-2">
              <span className="font-bold">Descripción:</span> Obtiene todas las
              categorías disponibles.
            </li>
            <li className="mt-2">
              <span className="font-bold">Endpoint:</span>
              <SyntaxHighlighter
                language="typescript"
                className={"syntax-highlighter mt-6"}
                useInlineStyles={false}
                wrapLines={true}
              >
                [GET] https://fake-store-api-vqyd.onrender.com/category
              </SyntaxHighlighter>
            </li>
            <li className="mt-2">
              {" "}
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
              {categoryAll}
            </SyntaxHighlighter>
          </div>
        </Element>
        <Element name="byId">
          <h2 className="text-xl mt-10 font-bold">
            Obtener Detalles de una Categoría por ID
          </h2>

          <ul className="mt-6 list-disc  ">
            <li className="mt-2">
              <span className="font-bold">Descripción:</span> Obtiene detalles
              específicos de una categoría según su ID.
            </li>
            <li className="mt-2">
              Endpoint:
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
              {" "}
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
              {categoryById}
            </SyntaxHighlighter>
          </div>
        </Element>
        <Element name="create">
          <h2 className="text-xl mt-10 font-bold">
            Agregar una Nueva Categoría
          </h2>

          <ul className="mt-6 list-disc  ">
            <li className="mt-2">
              {" "}
              <span className="font-bold">Descripción:</span> Agrega una nueva
              categoría.
            </li>
            <li className="mt-2">
              <span className="font-bold">Endpoint:</span>
              <SyntaxHighlighter
                language="typescript"
                className={"syntax-highlighter mt-6"}
                useInlineStyles={false}
                wrapLines={true}
              >
                [POST] https://fake-store-api-vqyd.onrender.com/category
              </SyntaxHighlighter>
            </li>
            <li className="mt-2">
              {" "}
              <span className="font-bold">Ejemplo de Cuerpo de Solicitud:</span>
            </li>
          </ul>
          <div>
            <SyntaxHighlighter
              language="typescript"
              className={"syntax-highlighter mt-6"}
              useInlineStyles={false}
              wrapLines={true}
            >
              {categoryCreate}
            </SyntaxHighlighter>
          </div>
        </Element>
        <Element name="update">
          <h2 className="text-xl mt-10 font-bold">
            Actualizar una Categoría por ID
          </h2>

          <ul className="mt-6 list-disc  ">
            <li className="mt-2">
              <span className="font-bold">Descripción:</span> Actualiza los
              detalles de una categoría existente.
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
            {categoryUpdate}
          </SyntaxHighlighter>
        </Element>
        <Element name="delete">
          <h2 className="text-xl mt-10 font-bold">
            Eliminar una Categoría por ID
          </h2>

          <ul className="mt-6 list-disc  ">
            <li className="mt-2">
              <span className="font-bold">Descripción:</span> Elimina una
              categoría según su ID.
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
        </Element>
        <Link to="/user">
          <Button
            className="w-full h-24 mt-10 text-lg justify-start px-10"
            variant="outline"
          >
            Anterior
          </Button>
        </Link>
      </section>
    </>
  );
};

export default Category;
