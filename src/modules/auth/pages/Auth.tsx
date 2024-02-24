import SyntaxHighlighter from "react-syntax-highlighter";
import { Element } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Auth = () => {
  const auth = `
  {
    "username": "nombre_de_usuario",
    "password": "contraseña_segura",
  }
  `;
  const responseRegister = `
  {
    "username": "nombre_de_usuario",
    "password": "$2b$10$8jKc4j73BQE7uNcGK8Thlugjs62i2LcvhqN2ppox8/Pf8MepwqJnG",
    "_id": "65ce22161680ebf87782ee56",
  }
  `;
  const responseLogin = `
  {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5vbWJyZV9kZV91c3VhcmlvIiwiaWF0IjoxNzA4MDA4MTMyLCJleHAiOjE3MDgwNDQxMzJ9.61kqMlxun3vZWSdl-s2s2UpLxHTDxzoiOoke7sxkScs"
  }
  `;
  return (
    <>
      <section className="px-6">
        <Element name="index">
          <h1 className="text-4xl font-bold">Autenticación de Usuarios</h1>
        </Element>
        <Element name="register">
          <h2 className="text-xl mt-10 font-bold">Registro de Usuario</h2>
          <ul className="mt-6 list-disc  ">
            <li className="mt-2">
              <span className="font-bold">Descripción:</span> Registra un nuevo
              usuario en la plataforma.
            </li>
            <li className="mt-2">
              <span className="font-bold">Endpoint:</span>
              <SyntaxHighlighter
                language="typescript"
                className={"syntax-highlighter mt-6"}
                useInlineStyles={false}
                wrapLines={true}
              >
                [POST] https://fake-store-api-vqyd.onrender.com/auth/register
              </SyntaxHighlighter>
            </li>
            <li className="mt-2">
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
              {auth}
            </SyntaxHighlighter>
          </div>
          <li className="mt-2">
            <span className="font-bold">Ejemplo de Respuesta:</span>
          </li>
          <div>
            <SyntaxHighlighter
              language="typescript"
              className={"syntax-highlighter mt-6"}
              useInlineStyles={false}
              wrapLines={true}
            >
              {responseRegister}
            </SyntaxHighlighter>
          </div>
        </Element>
        <Element name="login">
          <h2 className="text-xl mt-10 font-bold">Inicio de Sesión</h2>

          <ul className="mt-6 list-disc  ">
            <li className="mt-2">
              <span className="font-bold">Descripción:</span> Inicia sesión y
              obtiene un token de autenticación.
            </li>
            <li className="mt-2">
              <span className="font-bold">Endpoint:</span>
              <SyntaxHighlighter
                language="typescript"
                className={"syntax-highlighter mt-6"}
                useInlineStyles={false}
                wrapLines={true}
              >
                {`[POST]  https://fake-store-api-vqyd.onrender.com/auth/login`}
              </SyntaxHighlighter>
            </li>
            <li className="mt-2">
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
              {auth}
            </SyntaxHighlighter>
          </div>
          <li className="mt-2">
            <span className="font-bold">Ejemplo de Respuesta:</span>
          </li>
          <div>
            <SyntaxHighlighter
              language="typescript"
              className={"syntax-highlighter mt-6"}
              useInlineStyles={false}
              wrapLines={true}
            >
              {responseLogin}
            </SyntaxHighlighter>
          </div>
        </Element>
        <Element name="profile">
          <h2 className="text-xl mt-10 font-bold">Perfil de Usuario</h2>

          <ul className="mt-6 list-disc  ">
            <li className="mt-2">
              <span className="font-bold">Descripción:</span> Agrega un nuevo
              producto al inventario.
            </li>
            <li className="mt-2">
              Endpoint:
              <SyntaxHighlighter
                language="typescript"
                className={"syntax-highlighter mt-6"}
                useInlineStyles={false}
                wrapLines={true}
              >
                [GET] https://fake-store-api-vqyd.onrender.com/auth/profile
              </SyntaxHighlighter>
            </li>
            <li className="mt-2">
              <span className="font-bold">Ejemplo de Respuesta Exitosa</span>
            </li>
          </ul>
          <div>
            <SyntaxHighlighter
              language="typescript"
              className={"syntax-highlighter mt-6"}
              useInlineStyles={false}
              wrapLines={true}
            >
              {auth}
            </SyntaxHighlighter>
          </div>
        </Element>
        <div className="flex w-full gap-4">
          <Link to="/introduction" className="w-full">
            <Button
              className="w-full h-24 mt-10 text-lg justify-start "
              variant="outline"
            >
              Anterior
            </Button>
          </Link>
          <Link to="/inventory" className="w-full">
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

export default Auth;
