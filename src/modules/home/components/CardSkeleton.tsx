import { Card, CardContent, CardHeader } from "@/components/ui/card";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const CardSkeleton = () => {
  return (
    <Card className="rounded-2xl overflow-hidden">
      <CardHeader>
        <div className="overflow-hidden w-60 h-60">
          <Skeleton className="w-full h-full" />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Skeleton height={30} />
        <Skeleton height={20} />
        <Skeleton count={3} />
        <Skeleton height={30} />
      </CardContent>
    </Card>
  );
};

export default CardSkeleton;
