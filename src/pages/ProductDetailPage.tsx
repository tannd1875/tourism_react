import { useSearchParams } from "react-router-dom";
import RelatedList from "../features/related-list/RelatedList";
import useFetchItem from "../hooks/useFetchItem";
import { Product } from "../types/type";
import Carousel from "../features/product-detail/Carousel";
import ProductInfo from "../features/product-detail/ProductInfo";

const ProductDetailPage = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");

  const [product, loading] = useFetchItem({
    path: `/product/${productId}`,
  });

  return (
    <>
      <div className="mt-32 w-4/5 mx-auto">
        {loading && (
          <div className="flex justify-center items-center h-96">
            Loading...{" "}
          </div>
        )}
        {!loading && (
          <>
            <div className="flex justify-between items-start bg-gray-50 p-8 rounded mb-8">
              <Carousel images={(product as Product).images} />
              <ProductInfo product={product as Product} />
            </div>
            <div className="lg:w-2/3 mx-auto">
              <div className="w-full h-1 bg-amber-500"></div>
              <p className="my-8 text-2xl font-bold">Thông tin liên quan</p>
            </div>

            <div className="lg:w-1/2 max-sm:gap-8 mx-auto flex items-start justify-around my-10">
              <RelatedList
                currInfo={"Làng tre Phú An"}
                title={"Địa điểm du lịch"}
                type={"direction"}
              />

              <RelatedList
                currInfo={"Làng tre Phú An"}
                title={"Các mẹo du lịch"}
                type={"tip"}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetailPage;
