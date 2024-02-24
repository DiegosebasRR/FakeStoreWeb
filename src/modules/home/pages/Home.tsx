import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { Product } from "@/types/Product";
import SyntaxHighlighter from "react-syntax-highlighter";
interface ProductCardsProps {
  products: Product[];
}
function ProductCards({ products }: ProductCardsProps) {
  return products.map((product: Product) => (
    <ProductCard key={product._id} product={product} />
  ));
}

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://fake-store-api-vqyd.onrender.com/product?results=4&page=1&pageSize=4"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      <div className="flex flex-col md:flex-row sm:py-20 items-center py-6 gap-6 ">
        <div className="flex gap-6 flex-col">
          <h1 className="text-5xl font-extrabold">
            Impulsa la Experiencia de Usuario con Fake Store API
          </h1>
          <h2 className="text-xl">
            Fake Store API ofrece una solución versátil para desarrolladores que
            buscan enriquecer la experiencia de sus aplicaciones. Con nuestra
            API, podrás simular un inventario completo de productos, permitiendo
            a los usuarios explorar y experimentar con diversas funcionalidades.
          </h2>
          <Link to="/introduction">
            <Button className="w-64 h-12">View Document</Button>
          </Link>
        </div>
        <img className="h-96" src="shop.png" alt="shop web" />
      </div>
      <SyntaxHighlighter
        language="typescript"
        className={"syntax-highlighter my-6"}
        useInlineStyles={false}
        wrapLines={true}
      >
        {`[GET] https://fake-store-api-vqyd.onrender.com/product?results=4&page=1&pageSize=4`}
      </SyntaxHighlighter>
      <div className="gap-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <ProductCards products={products} />
      </div>
    </div>
  );
};

export default Home;
