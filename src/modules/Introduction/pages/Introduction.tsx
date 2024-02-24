import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Bienvenido a la Fake Store API</h1>
      <p className="text-lg mt-6">
        ¡Saludos, desarrollador! Entra en el emocionante mundo de la simulación
        de tiendas virtuales con nuestra Fake Store API. Facilitamos la vida de
        los programadores al proporcionar un entorno simulado para probar y
        perfeccionar sus frontends de manera eficiente.
      </p>
      <p className="text-xl mt-6 font-bold">
        ¿Qué puedes esperar de nuestra Fake Store API?
      </p>
      <ol className="mt-6 list-decimal px-6 ">
        <li className="mt-2">
          <span className="font-bold">Datos Simulados Realistas: </span>
          Ofrecemos datos simulados que imitan la diversidad de productos y
          categorías que encontrarías en una tienda real.
        </li>
        <li className="mt-2">
          <span className="font-bold">Endpoints Intuitivos: </span>
          Nuestra API cuenta con endpoints lógicos y fáciles de entender,
          diseñados para simplificar el proceso de integración con tu frontend.
        </li>
        <li className="mt-2">
          <span className="font-bold">Personalización Total: </span>
          Adapta la API según tus necesidades. Puedes ajustar la cantidad de
          datos, simular diferentes escenarios de inventario y experimentar con
          diversas respuestas del servidor.
        </li>
      </ol>
      <p className="text-xl mt-6 font-bold text-red-500">¡Atención!</p>
      <ul className="mt-6 list-disc px-6 ">
        <li className="mt-2">
          La Fake Store API está destinada exclusivamente para entornos de
          desarrollo y pruebas. No se deben utilizar datos confidenciales ni
          información real.
        </li>
        <li className="mt-2">
          Nos encantaría recibir tus comentarios. ¡Háznoslos saber para mejorar
          continuamente!
        </li>
      </ul>
      <Link to="/auth">
        <Button
          className="w-full h-24 mt-10 text-lg justify-end px-10"
          variant="outline"
        >
          Siguiente
        </Button>
      </Link>
    </div>
  );
};

export default Introduction;
