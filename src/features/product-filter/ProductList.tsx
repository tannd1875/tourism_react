import { Product } from "../../types/type";
import ProductItem from "./ProductItem";

const ProductList = ({ productList }: { productList: Product[] }) => {
  return (
    <div className="flex lg:justify-evenly w-full lg:flex-wrap items-center max-sm:flex-col">
      {productList.length == 0 ? (
        <p className="italic">Không có kết quả phù hợp nào được tìm thấy</p>
      ) : (
        productList.map((product) => {
          return <ProductItem product={product} key={product._id} />;
        })
      )}
    </div>
  );
};

export default ProductList;
