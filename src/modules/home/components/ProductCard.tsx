import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/types/Product";

interface ProductCardProps {
  product: Product;
}
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="rounded-2xl overflow-hidden">
      <CardHeader>
        <div className="overflow-hidden w-60 h-60">
          <img src={product.image.location} alt={product.name} />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 items-center">
        <CardTitle className="text-2xl font-extrabold">
          {product.name}
        </CardTitle>
        <Badge className="text-sm font-bold">{product.Category.name}</Badge>
        <CardDescription className="text-sm text-black font-semibold">
          {product.description}
        </CardDescription>
        <CardDescription className="text-2xl font-extrabold text-gray-700">
          {product.price + " $"}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
