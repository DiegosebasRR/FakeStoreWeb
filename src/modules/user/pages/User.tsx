import SyntaxHighlighter from "react-syntax-highlighter";
import { Element } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const User = () => {
  const userAll = `
  [
    {
      "_id": "id_del_usuario",
      "name": "Nombre del Usuario",
      "username": "nombre_de_usuario",
      "role": "rol_del_usuario",
      "image": {
        "key": "imagen_key",
        "location": "url_de_la_imagen"
      }
    },
    // Otros usuarios...
  ]
  
  `;
  const Request = `https://fakestoreapi-production-06c7.up.railway.app/user/{id}`;
  const userById = `
  {
    "_id": "id_del_usuario",
    "name": "Nombre del Usuario",
    "username": "nombre_de_usuario",
    "role": "rol_del_usuario",
    "image": {
      "key": "imagen_key",
      "location": "url_de_la_imagen"
    }
  }  
  `;
  const userCreate = `
  {
    "name": "Nuevo Nombre de Usuario",
    "role": "nuevo_rol_del_usuario",
    "image": {
      "key": "nueva_imagen_key",
      "location": "url_de_la_nueva_imagen"
    }
  }  
  `;
  const userUpdate = `
  {
    "name": "Nuevo Nombre de Usuario",
    "role": "nuevo_rol_del_usuario",
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
          <h1 className="text-4xl font-bold">Gestión de Usuarios</h1>
        </Element>

        <Element name="get">
          <h2 className="text-xl mt-10 font-bold">
            Obtener Todos los Usuarios
          </h2>
          <a href="#delete"> click</a>
          <ul className="mt-6 list-disc  ">
            <li className="mt-2">
              <span className="font-bold">Descripción:</span> Obtiene todos los
              usuarios registrados en el sistema.
            </li>
            <li className="mt-2">
              Endpoint:
              <SyntaxHighlighter
                language="typescript"
                className={"syntax-highlighter mt-6"}
                useInlineStyles={false}
                wrapLines={true}
              >
                [GET] https://fakestoreapi-production-06c7.up.railway.app/user
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
              {userAll}
            </SyntaxHighlighter>
          </div>
        </Element>
        <Element name="byId">
          <h2 className="text-xl mt-10 font-bold">
            Obtener Detalles de un Usuario por ID
          </h2>

          <ul className="mt-6 list-disc  ">
            <li className="mt-2">
              <span className="font-bold">Descripción:</span> Obtiene detalles
              específicos de un usuario según su ID.
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
              {userById}
            </SyntaxHighlighter>
          </div>
        </Element>
        <Element name="create">
          <h2 className="text-xl mt-10 font-bold">Agregar un Nuevo Usuario</h2>

          <ul className="mt-6 list-disc  ">
            <li className="mt-2">
              <span className="font-bold">Descripción:</span> Agrega un nuevo
              Usuario al sistema.
            </li>
            <li className="mt-2">
              <span className="font-bold">Endpoint:</span>
              <SyntaxHighlighter
                language="typescript"
                className={"syntax-highlighter mt-6"}
                useInlineStyles={false}
                wrapLines={true}
              >
                [POST] https://fakestoreapi-production-06c7.up.railway.app/user
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
              {userCreate}
            </SyntaxHighlighter>
          </div>
        </Element>
        <Element name="update">
          <h2 className="text-xl mt-10 font-bold">
            Actualizar un Usuario por ID
          </h2>

          <ul className="mt-6 list-disc  ">
            <li className="mt-2">
              <span className="font-bold">Descripción:</span> Actualiza los
              detalles de un usuario existente.
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
              {" "}
              <span className="font-bold">Ejemplo de Cuerpo de Solicitud:</span>
            </li>
          </ul>
          <SyntaxHighlighter
            language="typescript"
            className={"syntax-highlighter mt-6"}
            useInlineStyles={false}
            wrapLines={true}
          >
            {userUpdate}
          </SyntaxHighlighter>
        </Element>
        <Element name="delete">
          <h2 className="text-xl mt-10 font-bold">
            Eliminar un Usuario por ID
          </h2>

          <ul className="mt-6 list-disc  ">
            <li className="mt-2">
              <span className="font-bold">Descripción:</span> Elimina un usuario
              del sistema según su ID.
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
        <div className="flex w-full gap-4">
          <Link to="/inventory" className="w-full">
            <Button
              className="w-full h-24 mt-10 text-lg justify-start "
              variant="outline"
            >
              Anterior
            </Button>
          </Link>
          <Link to="/category" className="w-full">
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

export default User;
