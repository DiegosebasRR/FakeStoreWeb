import { Link } from "react-router-dom";

const SiteIcon = () => {
  return (
    <Link
      to="/"
      className="flex items-center justify-center w-full   sm:justify-start "
    >
      <img
        src="/icon.svg"
        className="w-16 xl:w-20"
        alt="icono de fake store app"
      />
      <p className="text-4xl sm:text-2xl xl:text-4xl font-bold">
        Fake Store Api
      </p>
    </Link>
  );
};

export default SiteIcon;
